import { z } from "zod";

export const cashbackSchema = z.object({
  generic: z.number(),
  deals: z.array(
    z.object({
      mcc: z.array(z.number()),
      percent: z.number(),
      condition: z.string(),
    })
  ),
});
