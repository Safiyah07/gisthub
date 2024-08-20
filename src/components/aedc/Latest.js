import React from "react";
import { Palanquin_Dark } from "next/font/google";
import Power1 from "../../../public/power1.webp";
import Power2 from "../../../public/power4.webp";
import Power3 from "../../../public/power5.webp";
import Image from "next/image";
import Link from "next/link";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Latest() {
	const blogs = [
		{
			img: Power1,
			header: "Lorem Ipsum Dolor",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			btn: "Read More",
		},
		{
			img: Power2,
			header: "Lorem Ipsum Dolor",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			btn: "Read More",
		},
		{
			img: Power3,
			header: "Lorem Ipsum Dolor",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.	Repellat, id?",
			btn: "Read More",
		},
	];

	return (
		<section className="flex flex-col gap-10">
			<h1 className={`${palanquin.className} fade mb-5 text-xl`}>
				Latest gist with AEDC
			</h1>

			<div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
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
						<div className="absolute inset-0 text-white transition-all duration-300 ease-in-out rounded-md opacity-0 bg-black/50 hover:opacity-100">
							<div className="flex flex-col gap-3 p-5">
								<h1 className="text-xl tracking-wide">{blog.header}</h1>
								<p className="w-4/5">{blog.text}</p>
								<Link
									href="/"
									className="transition-all duration-700 ease-in-out border-b hover:p-1 w-fit border-orange"
								>
									{blog.btn}
								</Link>
							</div>
						</div>
					</div>
				))}
				<Link href="/">Load More</Link>
			</div>
		</section>
	);
}
