import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
  },
  reducers: {
    setMenuItems: (state, action) => {
      if (state.items.length === 0) {
        state.items = action.payload;
      }
    },
  },
});

export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
