import { z } from "zod";

export const geometrySchema = z.object({
    type: z.string(),
    coordinates: z.array(z.number()),
});

export const categorySchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const partnerSchema = z.object({
    category: categorySchema.array(),
    name: z.string(),
    mobile_logo: z.string().nullable(),
});

export const featurePropertiesSchema = z.object({
    address1: z.string(),
    is_gold: z.boolean(),
    has_qr_terminal: z.boolean(),
    partner: partnerSchema,
});

export const featureSchema = z.object({
    id: z.number(),
    type: z.literal('Feature'),
    geometry: geometrySchema,
    properties: featurePropertiesSchema,
});

export const mapSchema = z.object({
    type: z.literal('FeatureCollection'),
    features: featureSchema.array(),
});

export const responseSchema = z.object({
    data: mapSchema,
});

export type Response = z.infer<typeof responseSchema>;
