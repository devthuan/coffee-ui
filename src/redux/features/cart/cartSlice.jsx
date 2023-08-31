import { createSlice } from "@reduxjs/toolkit";
import Image from "../../../assets/images/coffee-black.svg";

const initialState = {
  data: [
    { id: 16, image: Image, name: "Cà phê đen", price: 25000 },
    { id: 17, image: Image, name: "Cà phê đen", price: 25000 },
    { id: 18, image: Image, name: "Cà phê đen", price: 25000 },
    { id: 19, image: Image, name: "Cà phê đen", price: 25000 },
  ],
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data.push(action.payload);
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    incrementByAmount: (state, action) => {
      state.data += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
