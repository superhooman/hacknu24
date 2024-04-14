import { db } from "@src/server/db";
import { cards } from "@src/server/db/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = { id: 'simply', generic: 1.5, deals: [] }
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
