"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthWrapper({ children }) {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.push("/login");
		}
	}, [user, loading, router]);

	if (loading) {
		return <div className="flex items-center justify-center h-screen">Loading...</div>;
	}

	return children;
}
