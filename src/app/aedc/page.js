import React from "react";
import { Palanquin_Dark } from "next/font/google";
import Latest from "@/components/aedc/Latest";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function page() {
	return (
		<section className="flex flex-col gap-10 p-10 sm:px-5">
			<Latest />
			<h1 className={`${palanquin.className} fade mb-5 text-xl`}>
				Latest gist with AEDC
			</h1>

			<div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
				<div className="relative">
					<div className="rounded-md h-[300px] bg-power1 bg-cover shadow-3xl"></div>
					<div className="absolute inset-0 text-white transition-all duration-300 ease-in-out rounded-md opacity-0 bg-black/50 hover:opacity-100">
						<div className="flex flex-col gap-3 p-5">
							<h1 className="text-xl">Lorem Ipsum Dilor</h1>
							<p className="w-4/5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellat, id?
							</p>
							<button className="transition-all duration-700 ease-in-out border-b hover:p-1 w-fit border-orange">
								Read More
							</button>
						</div>
					</div>
				</div>
				<div className="relative">
					<div className="rounded-md h-[300px] bg-power1 bg-cover shadow-3xl"></div>
					<div className="absolute inset-0 text-white transition-all duration-300 ease-in-out rounded-md opacity-0 bg-black/50 hover:opacity-100">
						<div className="flex flex-col gap-3 p-5">
							<h1 className="text-xl">Lorem Ipsum Dilor</h1>
							<p className="w-4/5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellat, id?
							</p>
							<button className="transition-all duration-700 ease-in-out border-b hover:p-1 w-fit border-orange">
								Read More
							</button>
						</div>
					</div>
				</div>
				<div className="relative">
					<div className="rounded-md h-[300px] bg-power1 bg-cover shadow-3xl"></div>
					<div className="absolute inset-0 text-white transition-all duration-300 ease-in-out rounded-md opacity-0 bg-black/50 hover:opacity-100">
						<div className="flex flex-col gap-3 p-5">
							<h1 className="text-xl">Lorem Ipsum Dilor</h1>
							<p className="w-4/5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellat, id?
							</p>
							<button className="transition-all duration-700 ease-in-out border-b hover:p-1 w-fit border-orange">
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
