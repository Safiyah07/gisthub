"use client";

import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Post({ gist }) {
	const {
		title,
		date,
		introText,
		introImage,
		bodyText,
		bodyImage,
		conclusionText,
		conclusionImage,
	} = gist.fields;

	return (
		<section className="max-w-[100%] flex flex-col items-center m-auto lg:py-14 py-5 lg:w-4/5 w-full dark:text-white leading-7 text-lg p-4">
			<div className="flex flex-col w-full gap-10">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl font-semibold text-black capitalize dark:text-white md:text-3xl sm:text-2xl">
						{title}
					</h1>
					<div className="flex gap-3 text-sm">
						<p>
							AEDC <span>-</span> <span>{date}</span>
						</p>
					</div>
				</div>
				<p>{introText}</p>
				{introImage && (
					<Image
						src={`https:${introImage.fields.file.url}`}
						width={introImage.fields.file.details.image.width}
						height={introImage.fields.file.details.image.height}
						alt="introImage"
						className="object-cover h-[350px] w-auto shadow-[-1px_1px_4px_0_rgba(0,0,0,0.5)] rounded-md"
						priority
					/>
				)}
				<div>{documentToReactComponents(bodyText)}</div>
				{bodyImage && (
					<Image
						src={`https:${bodyImage.fields.file.url}`}
						width={bodyImage.fields.file.details.image.width}
						height={bodyImage.fields.file.details.image.height}
						alt="body image"
						className="object-cover h-[350px] w-auto shadow-[-1px_1px_4px_0_rgba(0,0,0,0.5)] rounded-md"
						priority
					/>
				)}
				<p>{conclusionText}</p>
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
			{/* <section className="w-full py-10">
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

				<div className="flex items-center gap-2">
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
			</section> */}
		</section>
	);
}
