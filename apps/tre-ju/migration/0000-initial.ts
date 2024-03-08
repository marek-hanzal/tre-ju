import {withAuthMigration} from "@use-pico/server/src/auth/withAuthMigration";
import {type Kysely}       from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
	return withAuthMigration(db);
}
