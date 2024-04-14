import { type InferSelectModel, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  doublePrecision,
  json,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `hacknu24_${name}`);

export const places = createTable(
  "place",
  {
    id: varchar("id", { length: 256 }).primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    address: varchar("address", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }),
    mcc: integer('mcc').array().notNull(),
    kaspi: boolean('kaspi').default(false).notNull(),
    halyk: json('halyk').$type<{ bonus?: number, phone?: number }>().default({}).notNull(),
    lat: doublePrecision('lat').notNull(),
    lng: doublePrecision('lng').notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`).notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export type Place = InferSelectModel<typeof places>;

export const cards = createTable(
  "card",
  {
    id: varchar("id", { length: 256 }).primaryKey(),
    generic: doublePrecision('generic').default(0).notNull(),
    deals: json('deals').$type<{ mcc: number[], percent: number, condition: string }[]>().default([]).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`).notNull(),
  }
);

export type Card = InferSelectModel<typeof cards>;
