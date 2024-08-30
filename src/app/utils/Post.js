import React from "react";
import { createClient } from "contentful";
import Slug from "../aedc/[slug]/page";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateStaticParams() {
	const response = await client.getEntries({
		content_type: "gist",
	});
	const paths = response.items.map((post) => ({
		params: { slug: post.fields.slug },
	}));

	return { paths, fallback: false };
}

export async function getBlog({ params }) {
	try {
		const { slug } = params;
		const response = await client.getEntries({
			content_type: "gist",
			"fields.slug": slug,
		});

		if (!response.items) {
			return "no gists";
		} else {
			return response.items;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default async function Post({ params }) {
	const post = await getBlog(params);

	console.log("unique post is", post);
	return (
		<div>
			<Slug post={post} />
		</div>
	);
}
