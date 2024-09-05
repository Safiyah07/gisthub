import React from "react";
import { createClient } from "contentful";
import Slug from "../aedc/[slug]/page";
import Latest from "@/components/aedc/Latest";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateStaticParams() {
	try {
		const response = await client.getEntries({
			content_type: "gist",
		});

		const uniqueSlug = response.items;

		const paths = uniqueSlug.map((post) => ({
			slug: post.fields.slug,
		}));
		console.log(paths);
		return paths;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function getBlog({ params }) {
	try {
		const { slug } = params;
		const response = await client.getEntries({
			content_type: "gist",
			"fields.slug": slug,
		});

		const gist = response.items;

		if (!gist || gist.length === 0) {
			return "no gist";
		} else {
			console.log(gist);
			return gist;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default async function Post({ params }) {
	const post = await getBlog({ params });

	console.log(params);

	console.log("unique post is", post);
	return (
		<div>
			<Latest post={post} />
			<Slug post={post} />
		</div>
	);
}

// export default async function Post({ params }) {
// 	const { slug } = params;
// 	await generateStaticParams();
// 	return (
// 		<p>
// 			Hi <span>Hi</span>
// 		</p>
// 	);
// }
