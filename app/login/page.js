import GoogleSignInButton from "../../components/GoogleSignInButton";

export default function Login() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="p-6 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-bold mb-4">Login</h1>
				<GoogleSignInButton />
			</div>
		</div>
	);
}
