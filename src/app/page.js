"use client";
import { Palanquin_Dark } from "next/font/google";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect } from "react";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Home() {
	useEffect(() => {
		// gsap.to(".fade", {
		// 	opacity: 1,
		// 	y: -50,
		// 	duration: 1,
		// 	stagger: 0.2,
		// 	ease: "back.out",
		// 	// delay: 0.5,
		// 	// Optional delay before the animation starts
		// });
		gsap.fromTo(
			".fade",
			{ opacity: 0, duration: 0, y: 40 },
			{
				y: 0,
				opacity: 1,
				duration: 0.7,
				stagger: 0.5,
				delay: 0.5,
				// ease: "back.out",
				// repeat: -1,
				// yoyo: true,
			}
		);
	}, []);

	return (
		<section className="flex flex-col gap-10 px-10 pt-16 pb-32 text-center sm:px-5">
			{/* text */}
			<div className="m-auto overflow-hidden text-xl text-center lg:w-3/5">
				<h1 className={`${palanquin.className} fade lg:text-[2rem] mb-5`}>
					What&apos;s the scoop you&apos;re after today?
				</h1>
				<p className="w-3/4 m-auto fade text-grey sm:w-full">
					We’re dishing out the hottest updates from AEDC and Water Board —
					don’t blink!
				</p>
			</div>

			{/* images */}
			<div className="flex flex-col justify-between gap-10 overflow-hidden lg:flex-row">
				<div className="relative w-full lg:w-[49%] border-2 border-transparent hover:border-orange rounded-lg transition-all ease-in-out duration-700 fade">
					<div className="rounded-md h-[300px] bg-power1 bg-cover"></div>
					<div className="absolute inset-0 bg-black rounded-md opacity-40"></div>
					<Link
						href={"/aedc"}
						style={{ textShadow: "3px 1px 5px black" }}
						className="absolute inset-0 flex items-center justify-center text-5xl font-medium text-white lg:text-7xl"
					>
						Power (AEDC)
					</Link>
				</div>
				<div className="relative w-full lg:w-[49%] border-2 border-transparent hover:border-orange rounded-lg transition-all ease-in-out duration-700 fade">
					<div className="rounded-md h-[300px] bg-water1 bg-cover "></div>
					<div className="absolute inset-0 bg-black rounded-md opacity-40"></div>
					<Link
						href={"/water-board"}
						style={{ textShadow: "3px 1px 5px black" }}
						className="absolute inset-0 flex items-center justify-center text-5xl font-medium text-white lg:text-7xl"
					>
						Water Board
					</Link>
				</div>
			</div>
		</section>
	);
}
