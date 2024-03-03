import {KyselyAdapter} from "@auth/kysely-adapter";
import {
	container,
	withClient
}                      from "@tre-ju/server";
import NextAuth        from "next-auth";
import GitHub          from "next-auth/providers/github";

export const {
	handlers: {
				  GET,
				  POST
			  },
	auth,
} = NextAuth({
	adapter:   KyselyAdapter(withClient.use(container)),
	session:   {strategy: "jwt"},
	providers: [
		GitHub({}),
	],
});
