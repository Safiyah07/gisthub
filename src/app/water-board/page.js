import React from "react";
import { createClient } from "contentful";
import Display from "../../components/water/DisplayWater";

export async function gisthub() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	try {
		const response = await client.getEntries({
			content_type: "water-board",
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

export default async function page() {
	const gistt = await gisthub();
	return (
		<div>
			<Display gists={gistt} />
		</div>
	);
}
