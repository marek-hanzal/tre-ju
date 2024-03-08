import {
	type Kysely,
	sql
} from "kysely";

/**
 * Prevent dependency on migrator as it depends on this package.
 */
export const withUuidTable = <TDatabase>(table: string, db: Kysely<TDatabase>) => {
	return db.schema
		.createTable(table)
		.addColumn("id", "uuid", col =>
			col.primaryKey().defaultTo(sql`gen_random_uuid()`)
		);
};
