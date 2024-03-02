import {
	withClientFactory,
	withService
}                      from "@use-pico/server";
import {type Database} from "./Database";

export const withClient = withService<withClientFactory.Client<Database>>("@tre-ju/server/withClient");
export type withClient = typeof withClient;
