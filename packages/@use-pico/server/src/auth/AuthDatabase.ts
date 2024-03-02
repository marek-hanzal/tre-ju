export namespace AuthDatabase {
	export interface UserTable {
		id: number;
	}

	export interface SessionTable {
		id: string;
		user_id: string;
		expires_at: Date;
	}
}
