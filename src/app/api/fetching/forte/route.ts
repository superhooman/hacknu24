import { fetchForte } from "@src/scripts/forte";
import { db } from "@src/server/db";
import { cards } from "@src/server/db/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = await fetchForte();

    await db.insert(cards).values(data).onConflictDoUpdate({
        target: cards.id,
        set: {
            ...data,
            updatedAt: sql`CURRENT_TIMESTAMP`,
        },
    })

    return NextResponse.json(data);
};

export const dynamic = 'force-dynamic';
