import React from "react";
import { CartProvider } from "react-use-cart";

const CartWrapper = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default CartWrapper;
