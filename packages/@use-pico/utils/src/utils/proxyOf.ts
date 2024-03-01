/**
 * A proxy that always returns itself.
 *
 * This hack function could be used to promote a type to a value in an object, but
 * keep it dummy (so type inference works properly, but the property itself is not required).
 */
export const proxyOf: any = new Proxy(() => proxyOf, {
	get: () => proxyOf,
});
