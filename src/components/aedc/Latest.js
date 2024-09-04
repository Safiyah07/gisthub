"use client";

import { Palanquin_Dark } from "next/font/google";
import Link from "next/link";
import Power1 from "../../../public/power1.webp";
import Power2 from "../../../public/power2.webp";
import Power3 from "../../../public/power3.webp";
import Power4 from "../../../public/power4.webp";
import Power5 from "../../../public/power5.webp";
import Power7 from "../../../public/power7.webp";
import Button from "./../shared/Button";
import GistData from "./GistData";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Latest({ gists, post }) {
	console.log("latest slug", post);
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
			<div>
				<h1
					className={`${palanquin.className} text-4xl font-semibold text-black capitalize dark:text-white md:text-3xl sm:text-2xl mt-5`}
				>
					Latest gist with AEDC
				</h1>
				<br />

				{/* for waterboard page
        Stay updated with the latest news from the Water Board, ensuring you never miss important information about water supply and distribution in your area. We provide timely updates on water rationing schedules, maintenance activities, and any service interruptions that might affect your daily routine. Our goal is to keep you well-informed about everything related to water services, so you can plan ahead and manage your resources effectively. Trust us to bring you reliable information directly from the Water Board, helping you stay prepared for any changes. */}

				<p>
					Stay connected with the latest updates from the Abuja Electricity
					Distribution Company (AEDC). We bring you real-time information on
					power supply schedules, planned outages, and emergency maintenance
					activities across the region. Our updates ensure you&apos;re always
					aware of any changes that might affect your electricity service,
					helping you manage your energy needs efficiently. Whether it&apos;s a
					new initiative from AEDC or important alerts on service disruptions,
					we&apos;re here to keep you informed and empowered.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
				{gists.map((gist) => (
					<GistData
						key={gist.sys.id}
						gist={gist}
					/>
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
