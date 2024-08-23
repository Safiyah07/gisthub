import React from "react";
import { createClient } from "contentful";
import Latest from "@/components/aedc/Latest";

async function getGist() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	try {
		const response = await client.getEntries({
			content_type: "gist",
		});

		console.log("Fetched Entries:", response);
		console.log("Fetched Entries:", response.items);
		console.log("Fetched Entries:", response.limit);

		return response.items;
	} catch (error) {
		console.error("Error fetching data from Contentful:", error);
		return [];
	}
}

export default async function Contentful() {
	const gists = await getGist();
	console.log(gists);
	console.debug(gists);

	return (
		<div>
			<Latest gists={gists} />
		</div>
	);
}
