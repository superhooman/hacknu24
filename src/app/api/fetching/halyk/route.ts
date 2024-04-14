import { and, arrayOverlaps, eq, like, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { halykCategoriesToMcc } from '@src/app/constants/categories';
import { fetchHalykPartners } from '@src/scripts/halyk';
import { db } from '@src/server/db';
import { places } from '@src/server/db/schema';

export const GET = async () => {
    const data = await fetchHalykPartners('ASTANA');

    await Promise.all(data.map(async (item) => {
        // Select all places with the same name
        const existing = await db.select().from(places).where(
            and(
                like(places.name, `%${item.name}%`),
                arrayOverlaps(places.mcc, halykCategoriesToMcc(item.category_id) ?? [])
            )
        );
        
        if (existing.length > 0) {
            // find closest place
            const closest = existing.reduce((closest, place) => {
                const distance = Math.sqrt((place.lat - item.lat) ** 2 + (place.lng - item.lng) ** 2);
                return distance < closest.distance ? { place, distance } : closest;
            }, { place: existing[0]!, distance: Infinity });

            if (closest.distance < 0.001) {
                await db.update(places).set({ halyk: item.tags, }).where(eq(places.id, closest.place.id));
                return;
            }
        }

        const itemToInsert = {
            id: `halyk_${item.id}`,
            name: item.name,
            mcc: halykCategoriesToMcc(item.category_id) ?? [],
            kaspi: false,
            address: item.address,
            lat: item.lat,
            lng: item.lng,
            halyk: item.tags,
        };

        await db.insert(places).values(itemToInsert).onConflictDoUpdate({
            target: places.id,
            set: {
                ...itemToInsert,
                updatedAt: sql`CURRENT_TIMESTAMP`,
            },
        });
    }));

    return NextResponse.json(data);
};

export const dynamic = 'force-dynamic';
