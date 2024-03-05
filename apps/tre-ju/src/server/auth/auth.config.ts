import {type NextAuthConfig} from "next-auth";
import GitHub                from "next-auth/providers/github";

export const AuthConfig = {
	session:   {strategy: "jwt"},
	providers: [
		GitHub({}),
	],
} satisfies NextAuthConfig;

export const AuthRoutes = {
	public:    [],
	protected: [],
} as const;
