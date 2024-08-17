"use client";

import Link from "next/link";
import { useCart } from "../utils/cartUtils";
import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function RootLayout({ children }) {
	const [user] = useAuthState(auth);

	const { cartItems } = useCart();

	const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

	const handleSignOut = async () => {
		try {
			await auth.signOut();
			router.push("/login");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-blue-600 text-white p-4">
				<nav className="container mx-auto flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold">
						E-Shop
					</Link>
					{user && (
						<div className="flex items-center justify-center gap-5">
							<h1 className="text-md font-medium">
								Welcome, {user.displayName}!
							</h1>
							<button
								onClick={handleSignOut}
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
							>
								Sign Out
							</button>

							<Link href="/cart" className="flex items-center">
								<div className="relative">
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
									{itemCount > 0 && (
										<span className="absolute -top-1 -right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
											{itemCount}
										</span>
									)}
								</div>
								Cart
							</Link>
						</div>
					)}
				</nav>
			</header>

			<main className="">{children}</main>

			<footer className="bg-gray-200 p-4 text-center">
				<p>&copy; 2024 E-Shop. All rights reserved.</p>
			</footer>
		</div>
	);
}
