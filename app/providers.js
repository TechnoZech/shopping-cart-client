'use client';

import CartProvider from '../utils/cartUtils';

export function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}