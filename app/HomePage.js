"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import ProductCard from "../components/ProductCard";
import products from "../utils/products.json";

export default function HomePage() {
	const [user] = useAuthState(auth);
	const router = useRouter();

	const handleSignOut = async () => {
		try {
			await auth.signOut();
			router.push("/login");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	if (!user) return null;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-[50px]">
			{/* <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1> */}
			{/* <button
				onClick={handleSignOut}
				className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
			>
				Sign Out
			</button> */}

			<div className="bg-gray-100">
				<h1 className="text-3xl font-bold mb-8">Our Products</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}
