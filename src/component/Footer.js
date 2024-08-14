import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/gih-logo.png";

export default function Footer() {
	return (
		<footer className="flex flex-col w-full gap-5 py-20 font-semibold text-black h-fit">
			<div className="flex justify-between p-10 text-sm leading-7 text-black bg-white sm:mt-20 sm:text-center sm:justify-center sm:py-10 sm:px-5 md:flex-wrap sm:flex-col lg:gap-20 md:gap-20 sm:gap-10">
				<div className="lg:w-[35%] lg:pt-7 sm:flex sm:flex-col sm:items-center sm:text-center">
					<div className="w-32">
						<Link href="/">
							<Image
								src={Logo}
								alt="Logo"
								className="h-5"
							/>
						</Link>
					</div>
					<br className="sm:hidden" />
					<p>
						Choose Nanny for a nanny placement experience that goes beyond
						expectations. Your family&apos;s well-being is our priority, and we
						look forward to assisting you in finding the perfect caregiver for
						your loved ones.
					</p>
				</div>

				{/* Explore */}
				<div className="flex flex-col gap-2 pt-7">
					<h1 className="text-lg font-extrabold">Follow us</h1>
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

				{/* Contact */}
				<div className="flex flex-col gap-2 sm:m-auto pt-7">
					<h1 className="text-lg font-extrabold">Contact Us</h1>
					<br className="sm:hidden" />
					<p className="flex items-center gap-2">
						{/* <MdOutlineLocationOn size={18} />  */}
						Gwarinpa, Abuja, Nigeria
					</p>
					<p>
						<a
							href="tel:+234 234 567 8901"
							className="flex items-center gap-2 transition-all duration-500 ease-in-out hover:text-black/50"
						>
							{/* <MdOutlinePhone size={18} /> */}
							+234 234 567 8901
						</a>
					</p>
					<p>
						<a
							href="mailto:nannyappng@gmail.com"
							className="flex items-center gap-2 break-all transition-all duration-500 ease-in-out hover:text-black/50"
						>
							{/* <MdOutlineMailOutline size={18} />  */}
							nannyappng@gmail.com
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
