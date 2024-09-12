import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Palanquin_Dark } from "next/font/google";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import Logo from "../../public/logo.png";
// import Marqueee from "../components/shared/Marqueee";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Footer() {
	const socials = [
		{
			name: "Facebook",
			icon: <IoLogoFacebook />,
		},
		{
			name: "Instagram",
			icon: <AiFillInstagram />,
		},
		{
			name: "X",
			icon: <FaXTwitter />,
		},
		{
			name: "YouTube",
			icon: <FaYoutube />,
		},
	];

	return (
		<footer>
			{/* <Marqueee /> */}
			<section className="px-10 pt-10 border-t sm:text-center">
				<div className="flex justify-between w-full gap-20 md:flex-wrap sm:flex-col">
					{/* logo and text */}
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
							Board. Get real-time information on power and water supply,
							outages, and restoration efforts. Your reliable source for
							essential updates.
						</p>
					</section>
					{/* Follow us */}
					<section>
						<div className="flex flex-col gap-2 pt-3">
							<h1 className={`${palanquin.className} text-lg font-extrabold`}>
								Follow us
							</h1>

							<br className="sm:hidden" />
							{socials.map((social, id) => (
								<Link
									key={id}
									href={"/"}
									className="flex items-center gap-2 transition-all duration-500 ease-in-out hover:text-orange sm:justify-center"
								>
									{social.icon} {social.name}
								</Link>
							))}
						</div>
					</section>
					{/* menu */}
					<section>
						<div className="flex flex-col gap-2 pt-3">
							<h1 className={palanquin.className}>Menu</h1>
							<br className="sm:hidden" />
							<Link
								href="/aedc"
								className="flex items-center gap-2 transition-all duration-500 ease-in-out hover:text-orange sm:justify-center"
							>
								Power (AEDC)
							</Link>
							<Link
								href="/water-board"
								className="flex items-center gap-2 transition-all duration-500 ease-in-out hover:text-orange sm:justify-center"
							>
								Water Board
							</Link>
						</div>
					</section>
					{/* back to top button */}
					<section>
						<h1 className={`${palanquin.className} pt-3`}>
							<a href="#top">Back to top</a>
						</h1>
					</section>
				</div>
				<p className="mt-10 mb-5 lg:text-end md:text-center">
					copyright &copy; {new Date().getFullYear()}. All Rights Reserved
					Gisthub
				</p>
			</section>
		</footer>
	);
}
