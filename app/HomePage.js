"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

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
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
			<h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1>
			<button
				onClick={handleSignOut}
				className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
			>
				Sign Out
			</button>
		</div>
	);
}
