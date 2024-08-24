import React from "react";
import Latest from "./aedc/Latest";
import { getStaticProps } from "next/dist/build/templates/pages";
import { createClient } from "contentful";

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	try {
		const response = await client.getEntries({
			content_type: "gist",
		});

		console.log("Fetched Entries:", response.items);
		console.log("Fetched Entries:", response.limit);

		if (!response.items) {
			return "no gists";
		} else {
			return response.items;
		}
		// return response.items;
		// return console.log("Fetched Entries:", response), response.items;
	} catch (error) {
		console.error("Error fetching data from Contentful:", error);
		return error;
	}
};

export default async function Contentful() {
	const gisthub = await getStaticProps();
	if (!gisthub) {
		return "no gists";
	}

	return (
		<div>
			{/* <Latest gisthub={gisthub} /> */}
		</div>
	);
}
