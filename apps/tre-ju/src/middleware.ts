import NextAuth from "next-auth";
import {
	AuthConfig,
	AuthRoutes
}               from "~/server/auth/auth.config";

const {auth} = NextAuth(AuthConfig);

export default auth(req => {
	const {nextUrl} = req;
	const isAuth = !!req.auth;
	const isProtected = AuthRoutes.protected.filter(route => nextUrl.pathname.startsWith(route)).length > 0;
	const isPublic = AuthRoutes.public.filter(route => nextUrl.pathname.startsWith(route)).length > 0;

	/**
	 * Do nothing, when we're working with the auth stuff
	 */
	if (nextUrl.pathname.startsWith("/api/auth")) {
		return;
	}

	if (isProtected) {
		if (isAuth) {
			return Response.redirect(new URL("/journal", nextUrl));
		}
		return;
	}

	if (!isAuth && !isPublic) {
		return Response.redirect(new URL("/auth/login", nextUrl));
	}

	return;
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};
