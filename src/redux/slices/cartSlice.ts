import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((existing_item) => existing_item?.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((current_item) => current_item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((current_item) => current_item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((current_item) => current_item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((current_item) => current_item.id !== action.payload);
      }
    },
    emptyCart: (state) => {
      state.items = []
    }
  },
});

export const { addToCart, removeFromCart,emptyCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
