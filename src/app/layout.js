import { Palanquin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const palanquin = Palanquin({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Gisthub",
	description: "The latest news blog for AEDC and Water Board of Nigeria",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={palanquin.className}>
				<ThemeProvider>
					<main className="relative overflow-x-hidden dark:bg-black/95 dark:text-white">
						<Header />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
