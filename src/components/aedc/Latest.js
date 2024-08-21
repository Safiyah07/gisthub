import React from "react";
import { createClient } from "contentful";
import { Palanquin_Dark } from "next/font/google";
import Power1 from "../../../public/power1.webp";
import Power2 from "../../../public/power2.webp";
import Power3 from "../../../public/power3.webp";
import Power4 from "../../../public/power4.webp";
import Power5 from "../../../public/power5.webp";
import Power7 from "../../../public/power7.webp";
import Image from "next/image";
import Link from "next/link";
import Button from "./../shared/Button";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const response = await client.getEntries({
		content_type: "gist",
	});

	console.log(response);

	return {
		props: {
			gist: response.items,
		},
	};
}

export default function Latest({ gist }) {
	console.log(gist);
	const blogs = [
		{
			img: Power1,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power4,
			header: "The Future of Energy",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power5,
			header: "The Importance of Energy Conservation",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power3,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power7,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power5,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power1,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power4,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
		{
			img: Power2,
			header: "Understanding Your Electricity Bill",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			date: "20th August 2024",
		},
	];

	return (
		<section className="flex flex-col gap-10 sm:gap-5">
			<h1 className={`${palanquin.className} fade mt-5 text-xl`}>
				Latest gist with AEDC
			</h1>

			<div className="grid grid-cols-3 gap-10 sm:gap-5 md:grid-cols-2 sm:grid-cols-1">
				{blogs.map((blog, id) => (
					<div
						key={id}
						className="relative"
					>
						<div className={`rounded-md h-[300px]`}>
							<Image
								src={blog.img}
								className="object-cover h-[300px] rounded-md shadow-3xl"
								alt="image"
							/>
						</div>
						{/* Change div to link */}
						<div className="absolute inset-0 text-white transition-all duration-300 ease-in-out rounded-md lg:opacity-0 bg-black/70 lg:hover:opacity-100">
							<div className="flex flex-col justify-between h-full p-5">
								<div className="flex flex-col w-4/5 gap-3">
									<h1 className="text-xl tracking-wide">{blog.header}</h1>
									<p>{blog.text}</p>
									<Link href={`/aedc/${blog.header}`}>
										<Button>Read More</Button>
									</Link>
								</div>
								<p className="flex justify-end">{blog.date}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<Link
				href="/"
				className="flex justify-end sm:justify-center"
			>
				<Button>Load More</Button>
			</Link>
		</section>
	);
}
