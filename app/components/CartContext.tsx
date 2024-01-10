"use client"
// components/CartContext.js
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext<any>([]);

const cartReducer = (state: any, action: any) => {
  // Xử lý các hành động thêm/sửa/xoá sản phẩm trong giỏ hàng
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItemIndex = state.findIndex((item: any) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update the quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity || 1;
        updatedCart[existingItemIndex].color = action.payload.color || [];
        updatedCart[existingItemIndex].pin = action.payload.pin || [];

        return updatedCart;
      } else {
        // If the item is not in the cart, add it
        return [...state, action.payload];
      }

    case 'UPDATE_CART_ITEM':
      // Update an item in the cart by id
      const updatedCart = state.map((item: any) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
            // Add more properties to update as needed
          };
        }
        return item;
      });

      return updatedCart;

    case 'REMOVE_FROM_CART':
      // Remove an item from the cart by id
      const filteredCart = state.filter((item: any) => item.id !== action.payload.id);
      return filteredCart;

    case 'RESET_CART':
      // Reset the cart to an empty array
      return [];

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };