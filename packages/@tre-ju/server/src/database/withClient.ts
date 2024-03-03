import {
	withClient as withCoolClient,
	withClientFactory,
	withService
}                      from "@use-pico/server";
import {type Database} from "./Database";

export const withClient = withService<withClientFactory.Client<Database>>(withCoolClient.key);
export type withClient = typeof withClient;
