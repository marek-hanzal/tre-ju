"use client";

import {signIn}  from "next-auth/react";
import {type FC} from "react";

export namespace LoginButton {
	export interface Props {
		provider: "github";
	}
}

export const LoginButton: FC<LoginButton.Props> = (
	{
		provider,
	}
) => {
	return <button
		onClick={async () => {
			await signIn(provider);
		}}
	>
		[{provider}]
	</button>;
};
