import { kaspiCategoriesToMcc } from "@src/app/constants/categories";
import { fetchKaspiPartners } from "@src/scripts/kaspi"
import { db } from "@src/server/db";
import { places } from "@src/server/db/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = await fetchKaspiPartners('ASTANA');

    const items = data.map((item) => ({
        id: `kaspi_${item.id}`,
        name: item.properties.partner.name,
        image: item.properties.partner.mobile_logo ? `https://kaspi.kz${item.properties.partner.mobile_logo}` : null,
        mcc: item.properties.partner.category.flatMap(({ id }) => kaspiCategoriesToMcc(id)).filter(Boolean) as number[],
        kaspi: item.properties.is_gold && item.properties.has_qr_terminal,
        address: item.properties.address1,
        lng: item.geometry.coordinates[0]!,
        lat: item.geometry.coordinates[1]!,
    })).filter(({ mcc }) => mcc.length > 0);


    await Promise.all(items.map(async (item) => {
        await db.insert(places).values(item).onConflictDoUpdate({
            target: places.id,
            set: {
                ...item,
                updatedAt: sql`CURRENT_TIMESTAMP`,
            },
        })
    }));

    return NextResponse.json(data);
};

export const dynamic = 'force-dynamic';
