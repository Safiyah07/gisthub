import { createClient } from "contentful";
import Post from "./Post";

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
		return paths;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function getBlog({ URL }) {
	try {
		const { slug } = URL;
		const response = await client.getEntries({
			content_type: "gist",
			"fields.slug": slug,
		});

		const gist = response.items;

		if (!gist || gist.length === 0) {
			return "no gist";
		} else {
			console.log("Gist is", gist);
			return gist;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default async function Page({ params }) {
	const URL = params;
	const post = await getBlog({ URL });
	console.log("returning gist", post);

	return <Post post={post} />;
}
