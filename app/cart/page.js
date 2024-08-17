// app/cart/page.js
'use client';

import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import { useCart } from '../../utils/cartUtils';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="px-[10%] min-h-screen py-[50px]">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}