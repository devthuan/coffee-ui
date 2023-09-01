import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItemOrder: (state, action) => {
      state.data.push(action.payload);
    },
    removeItemOrder: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemOrder, removeItemOrder } = orderSlice.actions;

export default orderSlice.reducer;
