import React, { createContext, useState, useEffect } from 'react';

export const itemContext = createContext();

const ItemContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products'); // Backend endpoint
        const data = await response.json();
        setProducts(data); // Update the state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item._id !== product._id));
  };

  return (
    <itemContext.Provider value={{ products, setProducts, addToCart, removeFromCart }}>
      {children}
    </itemContext.Provider>
  );

};

export default ItemContextProvider;
