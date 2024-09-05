"use client";

import React from "react";
import Image from "next/image";
import Power1 from "../../../../public/power1.webp";
import Power4 from "../../../../public/power4.webp";
import Power5 from "../../../../public/power5.webp";

export default function Post({ post }) {
	const {
		title,
		intro,
		info,
		time,
		slug,
		thumbnail,
		conclusionImage,
		featuredImage,
	} = post;
	console.log(post);
	return (
		<section className="max-w-[100%] flex flex-col items-center m-auto lg:py-14 py-5 text-lg dark:text-white p-4">
			<div className="flex flex-col w-full gap-5 lg:w-4/5">
				<h1 className="text-4xl font-semibold text-black capitalize dark:text-white md:text-3xl sm:text-2xl">
					{intro}
				</h1>
				<div className="flex gap-3 text-sm">
					<p>From AEDC</p>
					<p>-</p>
					<p>20th August 2024</p>
				</div>
				<p>
					Electricity bills in Nigeria have been a recurring source of
					frustration for many households and businesses. The high cost of
					electricity has significant implications for the economy, as it drives
					up production costs and reduces disposable income. This article will
					explore some of the key factors contributing to the high electricity
					bills in Nigeria.
				</p>
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
					alt="thumbnail"
					className="object-cover h-[350px] rounded-md"
					priority
				/>
				<p>
					1. Aging Infrastructure: One of the primary reasons for high
					electricity bills is the aging and dilapidated state of Nigeria&apos;s
					electricity infrastructure. The country&apos;s power grid has been
					neglected for decades, leading to frequent power outages, transmission
					losses, and inefficiencies. The cost of maintaining and upgrading this
					infrastructure is passed on to consumers in the form of higher
					tariffs.
				</p>
				<p>
					2. Inadequate Supply: The demand for electricity in Nigeria far
					exceeds the supply. This shortage has led to rationing and power
					outages, forcing consumers to rely on alternative power sources like
					generators, which can be expensive to operate. The cost of generating
					electricity through these alternative means is often factored into the
					overall electricity tariff.
				</p>
				<p>
					3. Government Policies: Government policies and regulations play a
					significant role in determining electricity tariffs. Subsidies and
					price controls can distort the market and lead to inefficiencies.
					Additionally, the cost of fuel for power generation, which is often
					subsidized by the government, can also contribute to higher tariffs.
				</p>
				<p>
					4. Corruption and Theft: Corruption and theft within the electricity
					sector are pervasive problems in Nigeria. These issues can lead to
					revenue losses, inefficiencies, and increased costs for consumers.
				</p>
				<p>
					5. Distribution Losses: The transmission and distribution of
					electricity in Nigeria is often inefficient, leading to significant
					losses. These losses are ultimately borne by consumers in the form of
					higher tariffs.
				</p>
				<p>
					6. Lack of Investment: The Nigerian electricity sector has suffered
					from a lack of investment for many years. This has hindered the
					development of new power plants and the modernization of the existing
					infrastructure. Without adequate investment, it is difficult to meet
					the growing demand for electricity and reduce costs.
				</p>
				<Image
					src={`https:${featuredImage.fields.file.url}`}
					width={featuredImage.fields.file.details.image.width}
					height={featuredImage.fields.file.details.image.height}
					alt="featured image"
					className="object-cover h-[350px] rounded-md"
					priority
				/>
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
				<Image
					src={`https:${conclusionImage.fields.file.url}`}
					width={conclusionImage.fields.file.details.image.width}
					height={conclusionImage.fields.file.details.image.height}
					alt="image4"
					className="object-cover h-[350px] rounded-md"
					priority
				/>
			</div>
		</section>
	);
}
