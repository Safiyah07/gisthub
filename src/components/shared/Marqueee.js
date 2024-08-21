"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Button from "./Button";

export default function Marqueee() {
	return (
		<section className="bg-menu-bg">
			<Marquee
				speed={100}
				autoFill={true}
				pauseOnHover={false}
				gradientColor={"#f7f3f2"}
				// style={{
				// 	animationDuration: "8s",
				// }}
			>
				<div className="flex items-center gap-2 py-5 font-medium uppercase md:py-3">
					<h1 className="lg:text-[118px] max-md:text-[100px] md:text-[80px] sm:text-[40px] lg:w-[650px] md:w-[450px] sm:w-[300px] leading-[150%]">
						Get in touch.
					</h1>
					{/* <Link
						href="/contact"
						className="mr-[50px] px-5 py-3 h-[50px]"
					>
						<Button>Contact Us</Button>
					</Link> */}
				</div>
			</Marquee>
		</section>
	);
}
