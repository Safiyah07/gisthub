import React from "react";
import Link from "next/link";
import { Palanquin_Dark } from "next/font/google";
import DisplayWater from "./DisplayWater";
import Button from "../shared/Button";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Display({ gists }) {
	return (
		<section className="flex flex-col gap-10 sm:gap-5">
			<div>
				<h1
					className={`${palanquin.className} text-4xl font-semibold text-black capitalize dark:text-white md:text-3xl sm:text-2xl mt-5`}
				>
					Latest gist from Water Board
				</h1>
				<br />

				<p>
					Stay updated with the latest news from the Water Board, ensuring you
					never miss important information about water supply and distribution
					in your area. We provide timely updates on water rationing schedules,
					maintenance activities, and any service interruptions that might
					affect your daily routine. Our goal is to keep you well-informed about
					everything related to water services, so you can plan ahead and manage
					your resources effectively. Trust us to bring you reliable information
					directly from the Water Board, helping you stay prepared for any
					changes.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
				{gists.map((gist) => (
					<DisplayWater
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
