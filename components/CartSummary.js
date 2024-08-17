import { useState } from "react";
import { useCart } from "../utils/cartUtils";
import { useRouter } from "next/navigation";

export default function CartSummary() {
	const { cartItems } = useCart();
	const [discountCode, setDiscountCode] = useState("");
	const [appliedDiscount, setAppliedDiscount] = useState(null);
	const router = useRouter();

	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	const discount = appliedDiscount
		? appliedDiscount.type === "fixed"
			? appliedDiscount.value
			: subtotal * appliedDiscount.value
		: 0;
	const total = subtotal - discount;

	const applyDiscount = () => {
		// This is a simplified discount system. In a real app, you'd validate against a database of discount codes.
		const discounts = {
			SUMMER10: { type: "percentage", value: 0.1 },
			SAVE20: { type: "fixed", value: 20 },
		};

		if (discounts[discountCode]) {
			setAppliedDiscount(discounts[discountCode]);
		} else {
			alert("Invalid discount code");
		}
	};

	const handleCheckout = () => {
		router.push("/checkout");
	};

	return (
		<div className="bg-gray-100 p-6 rounded-lg">
			<h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
			<div className="flex justify-between mb-2">
				<span>Subtotal:</span>
				<span>${subtotal.toFixed(2)}</span>
			</div>
			{appliedDiscount && (
				<div className="flex justify-between mb-2 text-green-600">
					<span>Discount:</span>
					<span>-${discount.toFixed(2)}</span>
				</div>
			)}
			<div className="flex justify-between font-bold text-lg mb-4">
				<span>Total:</span>
				<span>${total.toFixed(2)}</span>
			</div>
			<div className="mb-4">
				<input
					type="text"
					value={discountCode}
					onChange={(e) => setDiscountCode(e.target.case`Value`)}
					placeholder="Enter discount code"
					className="w-full p-2 border rounded"
				/>
				<button
					onClick={applyDiscount}
					className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
				>
					Apply Discount
				</button>
			</div>
			<button
				onClick={handleCheckout}
				className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
			>
				Proceed to Checkout
			</button>
		</div>
	);
}
