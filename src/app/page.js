import Image from "next/image";
import Logo from "../../public/gih-logo.png";

export default function Home() {
	return (
		<main className="m-10">
			<section className="text-center">
				<div className="w-32 m-auto mb-4">
					<Image
						src={Logo}
						alt="logo"
					/>
				</div>
				<p>What gist did you come for today?</p>
			</section>
		</main>
	);
}
