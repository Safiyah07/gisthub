import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

export default function GistData({ gist }) {
	const {
		title,
		intro,
		info,
		time,
		slug,
		thumbnail,
		// conclusionImage,
		featuredImage,
	} = gist.fields;

	console.log("From Gist Data Page", [gist]);

	return (
		<section className="relative">
			<div className={`rounded-md h-[300px]`}>
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
					className="object-cover h-[300px] rounded-md shadow-3xl"
					alt="image"
				/>
			</div>

			<Link
				href={`/aedc/${slug}`}
				className="absolute inset-0 text-white transition-all duration-300 ease-in-out rounded-md lg:opacity-0 bg-black/70 lg:hover:opacity-100"
			>
				<div className="flex flex-col justify-between h-full p-5">
					<div className="flex flex-col w-4/5 gap-3">
						<h1 className="text-xl tracking-wide">{title}</h1>
						<p>{intro}</p>
						<Button>Read More</Button>
					</div>
					<p className="flex justify-end">{time}</p>
				</div>
			</Link>
		</section>
	);
}
