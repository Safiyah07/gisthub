import { createClient } from "contentful";
import Latest from "@/components/aedc/Latest";

console.log("object1");
let gisthub;
async function getGist() {
	console.log("attempt1");
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	try {
		const response = await client.getEntries(
			{
				content_type: "gist",
			},
			{ cache: "no-store" }
		);

		console.log("Fetched Entries:", response.items);
		console.log("Fetched Entries:", response.limit);

		gisthub = response.items;
		// return console.log("Fetched Entries:", response), response.items;
	} catch (error) {
		console.error("Error fetching data from Contentful:", error);
		return [];
	}
}
// const gists = await getGist();

export default async function Contentful() {
	const gists = await getGist();

	console.log("waiting for", gists);

	return (
		<div>
			<Latest gists={gisthub} />
		</div>
	);
}
