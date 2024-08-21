"use client";
import React, { useContext } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";
import ThemeContext from "@/context/ThemeContext";
import Button from "./shared/Button";

export default function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	// const router = useRouter();
	const currentURL = usePathname();

	return (
		<div
			id="top"
			className={`flex justify-between p-4 border-b`}
		>
			<Link
				href="/"
				className="w-40 sm:w-32"
			>
				<Image
					src={Logo}
					alt="logo"
					priority
				/>
			</Link>

			<div className="flex items-center gap-4">
				<button
					onClick={toggleTheme}
					className="transition-all duration-300 ease-in-out"
				>
					{theme === "light" ? (
						<IoIosMoon
							className="hover:text-grey outline-black outline-8 hover:outline-orange"
							size={30}
						/>
					) : (
						<IoIosSunny size={30} />
					)}
				</button>

				{currentURL.startsWith("/aedc") && (
					<Link href="/water-board">
						<Button>Water Board</Button>
					</Link>
				)}

				{currentURL.startsWith("/water-board") && (
					<Link href="/aedc">
						<Button>AEDC</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
