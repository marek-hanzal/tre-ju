import {type Kysely}       from "kysely";
import {withUuidTable}     from "../database/withUuidTable";
import {type AuthDatabase} from "./AuthDatabase";

export async function withAuthMigration(db: Kysely<AuthDatabase>): Promise<void> {
	await withUuidTable<AuthDatabase>("User", db)
		.addColumn("name", "text")
		.addColumn("email", "text", col => col.unique().notNull())
		.addColumn("emailVerified", "timestamptz")
		.addColumn("image", "text")
		.execute();

	await withUuidTable<AuthDatabase>("Account", db)
		.addColumn("userId", "uuid", col =>
			col.references("User.id").onDelete("cascade").notNull()
		)
		.addColumn("type", "text", col => col.notNull())
		.addColumn("provider", "text", col => col.notNull())
		.addColumn("providerAccountId", "text", col => col.notNull())
		.addColumn("refresh_token", "text")
		.addColumn("access_token", "text")
		.addColumn("expires_at", "bigint")
		.addColumn("token_type", "text")
		.addColumn("scope", "text")
		.addColumn("id_token", "text")
		.addColumn("session_state", "text")
		.execute();

	await withUuidTable<AuthDatabase>("Session", db)
		.addColumn("userId", "uuid", col =>
			col.references("User.id").onDelete("cascade").notNull()
		)
		.addColumn("sessionToken", "text", col => col.notNull().unique())
		.addColumn("expires", "timestamptz", col => col.notNull())
		.execute();

	await db.schema
		.createTable("VerificationToken")
		.addColumn("identifier", "text", col => col.notNull())
		.addColumn("token", "text", col => col.notNull().unique())
		.addColumn("expires", "timestamptz", col => col.notNull())
		.execute();

	await db.schema
		.createIndex("Account_userId_index")
		.on("Account")
		.column("userId")
		.execute();

	await db.schema
		.createIndex("Session_userId_index")
		.on("Session")
		.column("userId")
		.execute();
}
