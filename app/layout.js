import Link from "next/link";
import { CartProvider } from "../utils/cartUtils";
import "../styles/globals.css";

export const metadata = {
	title: "E-commerce Shop",
	description: "Your one-stop shop for all your needs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<CartProvider>
					<div className="min-h-screen flex flex-col">
						<header className="bg-blue-600 text-white p-4">
							<nav className="container mx-auto flex justify-between items-center">
								<Link href="/" className="text-2xl font-bold">
									E-Shop
								</Link>
								<Link href="/cart" className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									Cart
								</Link>
							</nav>
						</header>

						<main>
							{children}
						</main>

						<footer className="bg-gray-300 p-4 text-center">
							<p>&copy; 2024 E-Shop. All rights reserved.</p>
						</footer>
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
