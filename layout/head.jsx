import NextHead from "next/head";

export const Head = () => {
	return (
		<NextHead>
			<title>Summer Berries</title>
			<meta name="description" content="Summer Berries shop"/>
			<meta key="viewport" content="width=device-width, initial-scale=1"/>
			<link href="/logo.ico" rel="icon" />
		</NextHead>
	);
};