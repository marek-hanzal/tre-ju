import {promises}          from "fs";
import {
	FileMigrationProvider,
	Migrator,
}                          from "kysely";
import * as path           from "path";
import {withClientFactory} from "./withClientFactory";

export namespace migrator {
	export interface Props {
		migrations?: string;
	}
}

export async function migrator(
	{
		migrations = path.join(process.cwd(), "migration"),
	}: migrator.Props = {
		migrations: path.join(process.cwd(), "migration"),
	}
): Promise<void> {
	const db = withClientFactory();

	const migrator = new Migrator({
		db,
		provider: new FileMigrationProvider({
			fs:              promises,
			path,
			migrationFolder: migrations,
		}),
	});

	const {
		error,
		results
	} = await migrator.migrateToLatest();

	results?.forEach((it) => {
		if (it.status === "Success") {
			console.log(`migration "${it.migrationName}" was executed successfully`);
		} else if (it.status === "Error") {
			console.error(`failed to execute migration "${it.migrationName}"`);
		}
	});

	if (error) {
		console.error("failed to migrate");
		console.error(error);
		process.exit(1);
	}

	await db.destroy();
}
