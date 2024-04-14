import {
  createTRPCRouter,
  publicProcedure,
} from "@src/server/api/trpc";
import { cards } from "@src/server/db/schema";

export const cardsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.db.select().from(cards);

    return items;
  })
});
