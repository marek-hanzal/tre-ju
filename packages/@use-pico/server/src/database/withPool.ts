import {withService} from "@use-pico/server";
import {type Pool}   from "pg";

/**
 * Access to a database pool through container.
 */
export const withPool = withService<Pool>("@use-pico/server/withPool");
export type withPool = typeof withPool;
