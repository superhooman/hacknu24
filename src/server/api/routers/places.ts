import {
  createTRPCRouter,
  publicProcedure,
} from "@src/server/api/trpc";
import { places } from "@src/server/db/schema";

export const placesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.db.select().from(places);

    return items;
  })
});
