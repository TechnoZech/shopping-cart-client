"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
	return useContext(CartContext);
}

export default function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setCartItems(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);
			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prevItems, { ...product, quantity: 1 }];
		});
	};

	const updateQuantity = (id, quantity) => {
		setCartItems((prevItems) =>
			prevItems
				.map((item) =>
					item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const removeFromCart = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
