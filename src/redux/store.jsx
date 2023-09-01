import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import orderSlice from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
  },
});
