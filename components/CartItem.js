// components/CartItem.js
import { useCart } from "../utils/cartUtils";

export default function CartItem({ item }) {
	const { updateQuantity, removeFromCart } = useCart();

	return (
		<div className="flex items-center border-b py-4">
			<img
				src={item.image}
				alt={item.name}
				className="w-20 h-20 object-cover mr-4"
			/>
			<div className="flex-grow">
				<h3 className="text-lg font-semibold">{item.name}</h3>
				<p className="text-gray-600">${item.price.toFixed(2)}</p>
			</div>
			<div className="flex items-center">
				<button
					onClick={() => updateQuantity(item.id, item.quantity - 1)}
					className="px-2 py-1 bg-gray-200 rounded-l"
				>
					-
				</button>
				<span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
				<button
					onClick={() => updateQuantity(item.id, item.quantity + 1)}
					className="px-2 py-1 bg-gray-200 rounded-r"
				>
					+
				</button>
			</div>
			<button
				onClick={() => removeFromCart(item.id)}
				className="ml-4 text-red-500 hover:text-red-700"
			>
				Remove
			</button>
		</div>
	);
}
