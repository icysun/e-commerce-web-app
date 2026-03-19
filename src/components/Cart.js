// Assuming the Cart component is responsible for rendering the shopping cart items

import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart } = useShoppingCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - $${item.price}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => { /* Implement clear cart functionality */ }}>Clear Cart</button>
    </div>
  );
}

export default Cart;