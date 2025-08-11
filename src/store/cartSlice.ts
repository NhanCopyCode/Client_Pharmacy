import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (items) => {
  localStorage.setItem("cart_items", JSON.stringify(items));
  localStorage.setItem("cart_quantity", JSON.stringify(items.length));
};

const cart_items = JSON.parse(localStorage.getItem("cart_items") || "[]");

const initialState = {
  items: cart_items,
  cart_quantity: cart_items.length,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += product.quantity || 1;
      } else {
        state.items.push({
          ...product,
          quantity: product.quantity || 1,
        });
      }

      state.cart_quantity = state.items.length;
      saveCartToLocalStorage(state.items);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }

      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      const product_id = action.payload;
      state.items = state.items.filter((item) => item.id !== product_id);

      state.cart_quantity = state.items.length;
      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.cart_quantity = 0;
      localStorage.removeItem("cart_items");
      localStorage.removeItem("cart_quantity");
    },

    replaceCart: (state, action) => {
      state.items = action.payload || [];
      state.cart_quantity = state.items.length;
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  replaceCart,
} = cartSlice.actions;

export default cartSlice.reducer;
