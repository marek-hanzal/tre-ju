import {type AuthDatabase} from "@use-pico/server";

export interface Database {
	user: AuthDatabase.UserTable;
	session: AuthDatabase.SessionTable;
}
