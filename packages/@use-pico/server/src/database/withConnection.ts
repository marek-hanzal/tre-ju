import {
	withClient,
	withService
} from "@use-pico/server";

export const withConnection = withService<withClient.Client<any>>("@use-pico/server/withConnection");
export type withConnection = typeof withConnection;
