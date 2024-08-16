import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Palanquin_Dark } from "next/font/google";
import Logo from "../../public/logo.png";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Footer() {
	return (
		<footer className="px-10 pt-10 border-t-2 mt-28 sm:text-center border-grey">
			<div className="flex justify-between w-full gap-20 md:flex-wrap sm:flex-col">
				<section className="flex flex-col gap-2 pt-3 lg:w-[35%]">
					<div className="w-48 sm:m-auto">
						<Link
							href="/"
							className=""
						>
							<Image
								src={Logo}
								alt="Logo"
								// className="h-5"
							/>
						</Link>
					</div>
					<br className="sm:hidden" />
					<p className="">
						Stay informed with the latest news and updates on AEDC and Water
						Board. Get real-time information on power and water supply, outages,
						and restoration efforts. Your reliable source for essential updates.
					</p>
				</section>
				<section>
					<div className="flex flex-col gap-2 pt-3">
						<h1 className={`${palanquin.className} text-lg font-extrabold`}>
							Follow us
						</h1>
						<br className="sm:hidden" />
						<a
							className="transition-all duration-500 ease-in-out hover:text-black/50"
							href={`/`}
						>
							Facebook
						</a>
						<a
							className="transition-all duration-500 ease-in-out hover:text-black/50"
							href={`/`}
						>
							Instagram
						</a>
						<a
							className="transition-all duration-500 ease-in-out hover:text-black/50"
							href="#services"
						>
							X
						</a>
						<a
							className="transition-all duration-500 ease-in-out hover:text-black/50"
							href="#about"
						>
							YouTube
						</a>
					</div>
				</section>
				<section>
					<div className="flex flex-col gap-2 pt-3">
						<h1 className={palanquin.className}>Menu</h1>
						<br className="sm:hidden" />
						<p>Power (AEDC)</p>
						<p>Water Board</p>
					</div>
				</section>
				<section>
					<h1 className={`${palanquin.className} pt-3`}>
						<a href="#top">Back to top</a>
					</h1>
				</section>
			</div>
			<p className="mt-10 mb-5">
				copyright &copy; {new Date().getFullYear()}. All Rights Reserved Gist
				Hub
			</p>
		</footer>
		// <footer className="flex flex-col w-full gap-5 py-20 font-semibold text-black h-fit">
		// 	<div className="flex justify-between p-10 text-sm leading-7 text-black bg-white sm:mt-20 sm:text-center sm:justify-center sm:py-10 sm:px-5 md:flex-wrap sm:flex-col lg:gap-20 md:gap-20 sm:gap-10">
		// 		<div className="lg:w-[35%] lg:pt-7 sm:flex sm:flex-col sm:items-center sm:text-center">
		// 			<div className="w-32">
		// 				<Link href="/">
		// 					<Image
		// 						src={Logo}
		// 						alt="Logo"
		// 						className="h-5"
		// 					/>
		// 				</Link>
		// 			</div>
		// 			<br className="sm:hidden" />
		// 			<p>
		// 				Choose Nanny for a nanny placement experience that goes beyond
		// 				expectations. Your family&apos;s well-being is our priority, and we
		// 				look forward to assisting you in finding the perfect caregiver for
		// 				your loved ones.
		// 			</p>
		// 		</div>

		// 		{/* Explore */}
		// 		<div className="flex flex-col gap-2 pt-7">
		// 			<h1 className="text-lg font-extrabold">Follow us</h1>
		// 			<br className="sm:hidden" />
		// 			<a
		// 				className="transition-all duration-500 ease-in-out hover:text-black/50"
		// 				href={`/`}
		// 			>
		// 				Facebook
		// 			</a>
		// 			<a
		// 				className="transition-all duration-500 ease-in-out hover:text-black/50"
		// 				href={`/`}
		// 			>
		// 				Instagram
		// 			</a>
		// 			<a
		// 				className="transition-all duration-500 ease-in-out hover:text-black/50"
		// 				href="#services"
		// 			>
		// 				X
		// 			</a>
		// 			<a
		// 				className="transition-all duration-500 ease-in-out hover:text-black/50"
		// 				href="#about"
		// 			>
		// 				YouTube
		// 			</a>
		// 		</div>

		// 		{/* Contact */}
		// 		<div className="flex flex-col gap-2 sm:m-auto pt-7">
		// 			<h1 className="text-lg font-extrabold">Contact Us</h1>
		// 			<br className="sm:hidden" />
		// 			<p className="flex items-center gap-2">
		// 				{/* <MdOutlineLocationOn size={18} />  */}
		// 				Gwarinpa, Abuja, Nigeria
		// 			</p>
		// 			<p>
		// 				<a
		// 					href="tel:+234 234 567 8901"
		// 					className="flex items-center gap-2 transition-all duration-500 ease-in-out hover:text-black/50"
		// 				>
		// 					{/* <MdOutlinePhone size={18} /> */}
		// 					+234 234 567 8901
		// 				</a>
		// 			</p>
		// 			<p>
		// 				<a
		// 					href="mailto:nannyappng@gmail.com"
		// 					className="flex items-center gap-2 break-all transition-all duration-500 ease-in-out hover:text-black/50"
		// 				>
		// 					{/* <MdOutlineMailOutline size={18} />  */}
		// 					nannyappng@gmail.com
		// 				</a>
		// 			</p>
		// 		</div>
		// 	</div>
		// </footer>
	);
}
