import React from "react";

export default function Button({ children }) {
	return (
		<div className="px-4 py-2 transition-all duration-300 ease-in-out border rounded-full border-orange hover:text-white w-fit hover-link z-10">
			{children}
		</div>
	);
}
