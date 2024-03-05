import NextAuth from "next-auth";
import {
	AuthConfig,
	AuthRoutes
}               from "~/server/auth/auth.config";

const {auth} = NextAuth(AuthConfig);

export default auth(req => {
	const isAuth = !!req.auth;
	const isPublic = AuthRoutes.public.filter(route => req.nextUrl.pathname.startsWith(route)).length > 0;
	const isProtected = AuthRoutes.protected.filter(route => req.nextUrl.pathname.startsWith(route)).length > 0;
	console.log("isAuth", isAuth);
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};
