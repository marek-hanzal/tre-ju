import {Pool} from "pg";

export namespace withPoolFactory {
	export interface Props {
		dsn?: string;
	}
}

/**
 * This is a factory function for a database pool.
 */
export const withPoolFactory = (
	{
		dsn = process.env.DATEBASE_URL,
	}: withPoolFactory.Props = {
		dsn: process.env.DATEBASE_URL,
	}
) => {
	return new Pool({
		connectionString: dsn,
	});
};
