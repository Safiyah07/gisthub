import Image from "next/image";
import { Palanquin_Dark } from "next/font/google";
import Logo from "../../public/gih-logo.png";
import Power from "../../public/power1.webp";
import Water from "../../public/water1.webp";
// import icon from "../../public/gih-icon.webp";

const palanquin = Palanquin_Dark({ weight: "400", subsets: ["latin"] });

export default function Home() {
	return (
		<main className="m-10">
			<section className="flex flex-col gap-10 text-center">
				<div className="w-32 m-auto">
					<Image
						src={Logo}
						alt="logo"
					/>
					{/* <Image
						src={icon}
						alt="logo"
					/> */}
				</div>
				<div className="w-3/4 m-auto text-center lg:w-2/5">
					<h1 className={palanquin.className}>
						What gist did you come for today?
					</h1>
					<p>
						We are giving you exclusive gist from aedc and water board on recent
						events, stay informed today
					</p>
				</div>

				<div className="flex flex-col justify-between gap-10 lg:flex-row">
					<div className="relative w-full lg:w-[49%]">
						<div className="rounded-md h-[300px] bg-power1 bg-cover "></div>
						<div className="absolute inset-0 bg-black rounded-md opacity-40"></div>
						<p
							style={{ textShadow: "3px 1px 5px black" }}
							className="absolute inset-0 flex items-center justify-center font-medium text-white text-7xl"
						>
							Power (AEDC)
						</p>
					</div>
					<div className="relative w-full lg:w-[49%]">
						<div className="rounded-md h-[300px] bg-water1 bg-cover "></div>
						<div className="absolute inset-0 bg-black rounded-md opacity-40"></div>
						<p
							style={{ textShadow: "3px 1px 5px black" }}
							className="absolute inset-0 flex items-center justify-center font-medium text-white text-7xl"
						>
							Water Board
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
