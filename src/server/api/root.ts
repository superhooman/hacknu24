import { placesRouter } from "@src/server/api/routers/places";
import { createCallerFactory, createTRPCRouter } from "@src/server/api/trpc";
import { cardsRouter } from "./routers/cards";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  places: placesRouter,
  cards: cardsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
