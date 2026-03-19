// Assuming the ProductPage component is responsible for adding products to the cart

import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ProductPage = ({ product }) => {
  const { addItemToCart } = useShoppingCart();

  const handleAddToCart = () => {
    addItemToCart(product);
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;