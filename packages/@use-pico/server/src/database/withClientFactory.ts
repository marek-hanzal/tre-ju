import {
	Kysely,
	PostgresDialect
}                        from "kysely";
import {Pool}            from "pg";
import {withPoolFactory} from "./withPoolFactory";

export namespace withClientFactory {
	export interface Props {
		pool?: Pool;
	}

	export type Client<TDatabase> = Kysely<TDatabase>;
}

/**
 * This is a factory function for a Kysely client.
 */
export const withClientFactory = <TDatabase>(
	{
		pool = withPoolFactory(),
	}: withClientFactory.Props = {
		pool: withPoolFactory(),
	}
) => {
	return new Kysely<TDatabase>({
		dialect: new PostgresDialect({
			pool,
		}),
	});
};
