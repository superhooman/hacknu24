import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {};

export default withVanillaExtract(nextConfig);
