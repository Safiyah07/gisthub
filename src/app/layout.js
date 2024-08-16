import { Palanquin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const palanquin = Palanquin({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "The Gist",
	description: "The latest news blog for AEDC and Water Board of Nigeria",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={palanquin.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
