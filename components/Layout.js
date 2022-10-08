import Head from "next/head"

export default function Layout({ title, keywords, description, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>

			{children}
		</>
	)
}

Layout.defaultProps = {
	title: "DJ EVENTS | Find the hottest parties",
	description: "Find the latest DJ and other musical events",
	keywords: "music, dj, edm, events",
}
