import { createSlice } from "@reduxjs/toolkit";
import Image from "../../../assets/images/coffee-black.svg";

const initialState = {
  data: [
    { id: 16, image: Image, name: "Cà phê đen", price: 25000, quantity: 1 },
  ],
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    removeAll: (state, action) => {
      state.data = [];
    },
    increasingQuantity: (state, action) => {
      let itemUpdate = state.data.find(
        (item) => item.id === action.payload.itemId
      );
      if (itemUpdate) {
        itemUpdate.quantity += 1;
      }
    },
    reduceQuantity: (state, action) => {
      let itemUpdate = state.data.find(
        (item) => item.id === action.payload.itemId
      );
      if (itemUpdate) {
        itemUpdate.quantity -= 1;
        if (itemUpdate.quantity < 1) {
          itemUpdate.quantity = 1;
        }
      }
    },
    updateQuantity: (state, action) => {
      let itemUpdate = state.data.find(
        (item) => item.id === action.payload.itemId
      );
      if (itemUpdate) {
        itemUpdate.quantity = action.payload.newQuantity;
        if (itemUpdate.quantity < 1) {
          itemUpdate.quantity = 1;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeItem,
  removeAll,
  increasingQuantity,
  reduceQuantity,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
