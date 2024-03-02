import {
	withClientFactory,
	withService
} from "@use-pico/server";

/**
 * Access to a database client through container.
 */
export const withClient = withService<withClientFactory.Client<any>>("@use-pico/server/withClient");
export type withClient = typeof withClient;
