"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { Squeeze as Hamburger } from "hamburger-react";
import Logo from "../../public/logo.png";
import ThemeContext from "@/context/ThemeContext";
import Button from "./shared/Button";

export default function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	// const router = useRouter();
	const currentURL = usePathname();

	const menuItems = [
		{
			id: 1,
			title: "power (AEDC)",
			link: "aedc",
		},
		{
			id: 2,
			title: "water board",
			link: "water-board",
		},
	];

	const [showMenu, setShowMenu] = useState(true);

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState);
	};

	return (
		<div
			id="top"
			className={`flex justify-between py-3 px-4 border-b items-center`}
		>
			<Link
				href="/"
				className="z-20 w-36 sm:w-32"
			>
				<Image
					src={Logo}
					alt="logo"
					priority
				/>
			</Link>

			{/* Hamburger for mobile */}
			<div className="hidden sm:block">
				<div className="relative z-20 cursor-pointer">
					{showMenu ? (
						<Hamburger
							toggled={!showMenu}
							toggle={menuDisplay}
							size="30"
						/>
					) : (
						<Hamburger
							toggled={!showMenu}
							toggle={menuDisplay}
							size="30"
						/>
					)}
				</div>

				<ul
					onClick={menuDisplay}
					className={`${
						showMenu ? "-right-full" : " right-0"
					} py-5 px-16 md:px-10 sm:px-4 bg-white dark:bg-black w-full text-xl flex justify-center flex-col transition-all ease-in-out duration-500 absolute z-10 h-svh top-0`}
				>
					{menuItems.map((Item) => (
						<li
							key={Item.id}
							className="capitalize"
						>
							<Link
								href={`/${Item.link}`}
								className="flex items-center px-2 pt-4 pb-[10px] hover:text-orange transition ease-in-out duration-500 leading-[150%] text-3xl md:text-2xl sm:text-xl"
							>
								{Item.title}
							</Link>
						</li>
					))}
					<li className="capitalize">
						<button
							onClick={toggleTheme}
							className="flex items-center px-2 pt-4 pb-[10px] hover:text-orange transition ease-in-out duration-500 leading-[150%] text-3xl md:text-2xl sm:text-xl"
						>
							{theme === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>}
						</button>
					</li>
				</ul>
			</div>

			<div className="flex items-center gap-4 sm:hidden">
				<button
					onClick={toggleTheme}
					className="transition-all duration-300 ease-in-out"
				>
					{theme === "light" ? (
						<Button>Dark Mode</Button>
					) : (
						<Button>Light Mode</Button>
					)}
				</button>

				{currentURL.startsWith("/aedc") && (
					<Link href="/water-board">
						<Button>Water Board</Button>
					</Link>
				)}

				{currentURL.startsWith("/water-board") && (
					<Link href="/aedc">
						<Button>Power (AEDC)</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
