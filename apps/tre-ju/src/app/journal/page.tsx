import {auth} from "~/server/auth/auth";

export default async function Index() {
	const session = await auth();

	return <>
		{JSON.stringify(session)}

		fooo
	</>;
};
