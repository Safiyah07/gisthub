"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import ThemeContext from "@/context/ThemeContext";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
// import {}

export default function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div
			id="top"
			className={`flex justify-between p-10 sm:px-5`}
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

			<button
				onClick={toggleTheme}
				className="transition-all duration-300 ease-in-out"
			>
				{theme === "light" ? <IoIosMoon size={30} /> : <IoIosSunny size={30} />}
			</button>
		</div>
	);
}
