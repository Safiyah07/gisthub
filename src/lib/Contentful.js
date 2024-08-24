import { createClient } from "contentful";
import Latest from "@/components/aedc/Latest";

console.log("object1");

// async function getGist() {
// 	console.log("attempt1");
// 	const client = createClient({
// 		space: process.env.CONTENTFUL_SPACE_ID,
// 		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// 	});

// 	try {
// 		const response = await client.getEntries(
// 			{
// 				content_type: "gist",
// 			},
// 			{ cache: "no-store" }
// 		);

// 		console.log("Fetched Entries:", response.items);
// 		console.log("Fetched Entries:", response.limit);

// 		gisthub = response.items;
// 		// return console.log("Fetched Entries:", response), response.items;
// 	} catch (error) {
// 		console.error("Error fetching data from Contentful:", error);
// 		return [];
// 	}
// }

function gisthub() {
	console.log("hey");
	return "hi";
}

export default async function Contentful() {
	const gists = gisthub();

	if (!gists) {
		return gists;
	}

	// console.log("waiting for", gists);

	// return <Latest gists={gists} />;
}
