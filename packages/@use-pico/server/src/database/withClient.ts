import {
	Kysely,
	PostgresDialect
}             from "kysely";
import {Pool} from "pg";

export namespace withClient {
	export interface Props {
		dsn?: string;
	}

	export type Client<TDatabase> = Kysely<TDatabase>;
}

export const withClient = <TDatabase>(
	{
		dsn = process.env.DATEBASE_URL,
	}: withClient.Props
) => {
	return new Kysely<TDatabase>({
		dialect: new PostgresDialect({
			pool: new Pool({
				connectionString: dsn,
			}),
		}),
	});
};
