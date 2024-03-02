// @ts-nocheck
import { transpile } from './transpile.mjs';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode:             true,
	poweredByHeader:             false,
	productionBrowserSourceMaps: false,
	transpilePackages:           transpile,
	/**
	 * This piece looks strange, but when a library supports it, it's possible to rewrite
	 * barrel imports into direct module imports, thus optimizing page size, speed, and overall
	 * world is nicer, better and with more rainbows everywhere.
	 */
	modularizeImports: transpile.reduce((acc, item) => {
		acc[item] = {
			transform:             `${item}/src/$export/{{member}}`,
			skipDefaultConversion: true,
		};
		return acc;
	}, {}),
};

export default config;
