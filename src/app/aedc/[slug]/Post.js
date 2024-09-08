"use client";

import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Power1 from "../../../../public/power1.webp";
import Power4 from "../../../../public/power4.webp";
import Power5 from "../../../../public/power5.webp";

export default function Post({ gist }) {
	const {
		title,
		intro,
		info,
		time,
		slug,
		thumbnail,
		conclusionImage,
		featuredImage,
	} = gist[0].fields;
	console.log("me me me me meme", gist);

	return (
		<section className="max-w-[100%] flex flex-col items-center m-auto lg:py-14 py-5 lg:w-4/5 w-full dark:text-white p-4">
			<div className="flex flex-col w-full gap-5">
				<h1 className="text-4xl font-semibold text-black capitalize dark:text-white md:text-3xl sm:text-2xl">
					{intro}
				</h1>
				<div className="flex gap-3 text-sm">
					<p>From AEDC</p>
					<p>-</p>
					{/* <p>20th August 2024</p> */}
					<p>{time}</p>
				</div>
				<p>
					Electricity bills in Nigeria have been a recurring source of
					frustration for many households and businesses. The high cost of
					electricity has significant implications for the economy, as it drives
					up production costs and reduces disposable income. This article will
					explore some of the key factors contributing to the high electricity
					bills in Nigeria.
				</p>
				{thumbnail && (
					<Image
						src={`https:${thumbnail.fields.file.url}`}
						width={thumbnail.fields.file.details.image.width}
						height={thumbnail.fields.file.details.image.height}
						alt="thumbnail"
						className="object-cover h-[350px] w-auto shadow-[-1px_1px_4px_0_rgba(0,0,0,0.5)] rounded-md"
						priority
					/>
				)}
				<p>{documentToReactComponents(info)}</p>
				{featuredImage && (
					<Image
						src={`https:${featuredImage.fields.file.url}`}
						width={featuredImage.fields.file.details.image.width}
						height={featuredImage.fields.file.details.image.height}
						alt="featured image"
						className="object-cover h-[350px] w-auto shadow-[-1px_1px_4px_0_rgba(0,0,0,0.5)] rounded-md"
						priority
					/>
				)}
				<p>
					{" "}
					Conclusion: The high cost of electricity in Nigeria is a complex issue
					with multiple contributing factors. Addressing these challenges will
					require a comprehensive approach that involves investing in
					infrastructure, improving efficiency, reducing corruption, and
					implementing sound government policies. By addressing these issues,
					Nigeria can work towards a more affordable and reliable electricity
					supply for its citizens and businesses.
				</p>
				{conclusionImage && (
					<Image
						src={`https:${conclusionImage.fields.file.url}`}
						width={conclusionImage.fields.file.details.image.width}
						height={conclusionImage.fields.file.details.image.height}
						alt="image4"
						className="object-cover h-[350px] w-auto shadow-[-1px_1px_4px_0_rgba(0,0,0,0.5)] rounded-md"
						priority
					/>
				)}
			</div>

			{/* Comment */}
			<section className="w-full py-10">
				<h1>Comments: 2</h1>
				<br />
				<textarea
					name="comments"
					id="comments"
					cols="30"
					rows="10"
					placeholder="Add Comments Here"
					className="shadow-[-1px_1px_4px_0_rgba(0,0,0,0.5)] rounded-md w-full p-5 outline-none"
				></textarea>

				<div className="flex gap-2">
					<div className="w-10 h-10">
						<Image
							src={`https:${conclusionImage.fields.file.url}`}
							width={conclusionImage.fields.file.details.image.width}
							height={conclusionImage.fields.file.details.image.height}
							alt="image4"
							className="object-cover w-10 h-10 rounded-full"
							priority
						/>
					</div>
					<div>
						<h4>Sola Adebisi Koka</h4>
						<p>Thank you for this update AEDC, super informative</p>
						<p>20th August 2024</p>
					</div>
				</div>
				{/* {comments && (<div></div>)} */}
			</section>
		</section>
	);
}
