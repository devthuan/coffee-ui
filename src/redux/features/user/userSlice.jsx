import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalData: 0,
  data: [
    // {
    //   id: 1,
    //   fullName: "Trần Phước Thuận",
    //   username: "0945986661",
    //   address: "Hướng phùng, hướng hoá, quảng trị",
    //   permission: "Khác Hàng",
    //   createdDate: "03/09/2023",
    // },
    // {
    //   id: 2,
    //   fullName: "Trần Phước Thuận",
    //   username: "0945986661",
    //   address: "Hướng phùng, hướng hoá, quảng trị",
    //   permission: "Khác Hàng",
    //   createdDate: "03/09/2023",
    // },
  ],
  loading: false,
  error: [],
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTotalData: (state, action) => {
      state.totalData = action.payload;
    },
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    removeUser: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    setStatusUser: (state, action) => {
      const { orderId, newStatus } = action.payload;
      console.log(orderId, newStatus);

      state.data = state.data.map((item) =>
        item.id === orderId ? { ...item, status: newStatus } : item
      );

      const orderToUpdate = state.data.find((item) => item.id === orderId);
      if (orderToUpdate) {
        orderToUpdate.status = newStatus;
      }
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTotalData,
  addUser,
  removeUser,
  setStatusUser,
  setLoading,
  setError,
} = userSlice.actions;

export default userSlice.reducer;
