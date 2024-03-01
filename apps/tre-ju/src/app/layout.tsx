import "~/styles/globals.css";

import {Inter}          from "next/font/google";
import {type ReactNode} from "react";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title:       "Tre-Ju",
	description: "Simple trading analytics app",
	icons:       [{
		rel: "icon",
		url: "/favicon.ico"
	}],
};

export default function RootLayout(
	{
		children,
	}: {
		children: ReactNode;
	}
) {
	return (
		<html lang={"en"}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
