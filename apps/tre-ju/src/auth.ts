import {NodePostgresAdapter} from "@lucia-auth/adapter-postgresql";
import {container}           from "@tre-ju/server";
import {withPool}            from "@use-pico/server";
import {Lucia}               from "lucia";

export const lucia = new Lucia(
	new NodePostgresAdapter(withPool.use(container), {
		session: "",
		user:    "",
	}),
	{
		sessionCookie: {
			expires:    false,
			attributes: {
				secure: true,
			},
		},
	}
);

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}
