// Assuming the context file structure is as follows:

import React, { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  }

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}>{children}</ShoppingCartContext.Provider>
  );
}

export const useShoppingCart = () => useContext(ShoppingCartContext);

export default ShoppingCartProvider;