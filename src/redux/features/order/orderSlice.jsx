import { createSlice } from "@reduxjs/toolkit";
import ProductIMG from "../../../assets/images/coffee-black.svg";

const initialState = {
  data: [
    {
      id: 1,
      product: [
        {
          imageProduct: ProductIMG,
          nameProduct: "Cà Phê Đen",
          classify: "Cà Phê",
          price: 19000,
          quantity: 5,
        },
        {
          imageProduct: ProductIMG,
          nameProduct: "Cà Phê Đen",
          classify: "Cà Phê",
          price: 19000,
          quantity: 5,
        },
      ],
      nameUser: "Trần Phước Thuận",
      numberPhone: "0945986661",
      address: " 35/9 Phan văn Hớn Q12",
      timeOrder: "19:28",
      paymentMethods: "Thanh toán khi nhân hàng",
      status: "Chờ",
    },
  ],
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
