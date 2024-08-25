import Latest from "@/components/aedc/Latest";
import React from "react";
import { createClient } from "contentful";

export async function gisthub() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	try {
		const response = await client.getEntries({
			content_type: "gist",
		});

		if (!response.items) {
			return "no gists";
		} else {
			return response.items;
		}
	} catch (error) {
		console.error("Error fetching data from Contentful:", error);
		return error;
	}
}

export default async function Gist() {
	const gistt = await gisthub();
	return (
		<div>
			<Latest gists={gistt} />
		</div>
	);
}
