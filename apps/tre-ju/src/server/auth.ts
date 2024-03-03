import {KyselyAdapter} from "@auth/kysely-adapter";
import {
	container,
	withClient
}                      from "@tre-ju/server";
import NextAuth        from "next-auth";
import {AuthConfig}    from "~/server/auth.config";

export const {
	handlers: {
				  GET,
				  POST
			  },
	auth,
} = NextAuth({
	adapter: KyselyAdapter(withClient.use(container)),
	...AuthConfig,
});
