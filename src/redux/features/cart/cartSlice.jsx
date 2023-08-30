import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{ image: "image", name: "Cà phê đen", price: 25000 }],
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
      state.data -= 1;
    },
    incrementByAmount: (state, action) => {
      state.data += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
