"use client";

import { Palanquin_Dark } from "next/font/google";
import Link from "next/link";
import Button from "./../shared/Button";
import GistData from "./GistData";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Latest({ gists }) {
	return (
		<section className="flex flex-col gap-10 sm:gap-5">
			<div>
				<h1
					className={`${palanquin.className} text-4xl font-semibold text-black capitalize dark:text-white md:text-3xl sm:text-2xl mt-5`}
				>
					Latest gist with AEDC
				</h1>
				<br />
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
