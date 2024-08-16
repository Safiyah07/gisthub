"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useState } from "react";

export default function Header() {
	const [toggle, setToggle] = useState("false");

	const toggled = () => {
		setToggle(!toggle);
	};
	return (
		<div className="flex justify-between p-10">
			<div className="w-40">
				<Image
					src={Logo}
					alt="logo"
				/>
			</div>

			<div onClick={toggled}>{toggle ? <p>moon</p> : <p>sun</p>}</div>
		</div>
	);
}
