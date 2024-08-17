import { Providers } from "./providers";
import RootLayout from "./RootLayout";

export const metadata = {
	title: "E-commerce Shop",
	description: "Your one-stop shop for all your needs",
};

export default function Layout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<RootLayout>{children}</RootLayout>
				</Providers>
			</body>
		</html>
	);
}
