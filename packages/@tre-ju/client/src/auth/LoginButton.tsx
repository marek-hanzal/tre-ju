import Link      from "next/link";
import {type FC} from "react";

export namespace LoginButton {
	export interface Props {
	}
}

export const LoginButton: FC<LoginButton.Props> = (
	{}
) => {
	return <Link href={"/login"}>
		cudlyk
	</Link>;
};
