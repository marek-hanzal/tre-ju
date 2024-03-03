import NextAuth     from "next-auth";
import {AuthConfig} from "~/server/auth.config";

const {auth} = NextAuth(AuthConfig);

export default auth(req => {
	//
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};
