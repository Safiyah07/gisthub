import Image from "next/image";
import React from "react";
import Logo from "../../public/gih-logo.png";

export default function Footer() {
	return (
		<div className="flex justify-between p-10 text-sm leading-7 text-black bg-white sm:mt-20 sm:text-center sm:justify-center sm:py-10 sm:px-5 md:flex-wrap sm:flex-col lg:gap-20 md:gap-20 sm:gap-10">
			<div className="lg:w-[35%] lg:pt-7 sm:flex sm:flex-col sm:items-center sm:text-center">
				<div className="w-52">
					<a href="/">
						<Image
							src={Logo}
							alt="Logo"
							className="h-5"
						/>
					</a>
				</div>
				<br className="sm:hidden" />
				<p>
					Choose Nanny for a nanny placement experience that goes beyond
					expectations. Your family&apos;s well-being is our priority, and we
					look forward to assisting you in finding the perfect caregiver for
					your loved ones.
				</p>
				<br />
				<div className="flex gap-5 w-fit">
					<a
						href={`/register`}
						className="flex items-center gap-4 transition-all duration-500 ease-in-out hover:gap-2"
					>
						Find A Nanny
					</a>

					<a
						href={`/register`}
						className="flex items-center justify-center gap-2 transition-all duration-500 ease-in-out hover:gap-4 w-fit"
					>
						Become A Nanny
					</a>
				</div>
			</div>

			{/* Explore */}
			<div className="flex flex-col gap-2 pt-7">
				<h1 className="text-lg font-extrabold">Explore</h1>
				<br className="sm:hidden" />
				<a
					className="transition-all duration-500 ease-in-out hover:text-black/50"
					href={`/register`}
				>
					Become a Nanny
				</a>
				<a
					className="transition-all duration-500 ease-in-out hover:text-black/50"
					href={`/register`}
				>
					Find a Nanny
				</a>
				{/* <a
						className="transition-all duration-500 ease-in-out hover:text-black/50"
						href="#home"
					>
						Top
					</a> */}
				<a
					className="transition-all duration-500 ease-in-out hover:text-black/50"
					href="#services"
				>
					Services
				</a>
				<a
					className="transition-all duration-500 ease-in-out hover:text-black/50"
					href="#about"
				>
					About
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
	);
}
