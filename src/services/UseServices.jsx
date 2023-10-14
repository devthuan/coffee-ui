import axios from "axios";
import { getItemWithExpiration } from "./LocalStorage";

const baseURL = "http://localhost:8080/v1/";

const accessToken = await getItemWithExpiration("token");

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

export const GetUser = (page) => {
  return axios.get(`${baseURL}user?page=${page}`, { headers });
};

export const GetOrdersAPI = () => {
  return axios.get(`${baseURL}order-all`, { headers });
};
export const GetOrdersByUserIdAPI = () => {
  return axios.get(`${baseURL}order`, { headers });
};

export const GetOrdersDetailAPI = (order_id) => {
  return axios.get(`${baseURL}order-detail/${order_id}`, { headers });
};
export const GetProductAPI = (page) => {
  return axios.get(`${baseURL}product?page=${page}`, { headers });
};

export const GetCartAPI = () => {
  return axios.get(`${baseURL}cart`, { headers });
};
export const DeleteCartAPI = () => {
  return axios.delete(`${baseURL}cart`, { headers });
};
export const UpdateQuantityCart = (cart_id, quantity) => {
  return axios.patch(`${baseURL}cart/${cart_id}`, { quantity }, { headers });
};

export const AddCartAPI = (product_id, quantity) => {
  return axios.post(`${baseURL}cart`, { product_id, quantity }, { headers });
};

export const AddOrderAPI = (
  full_name,
  phone_number,
  delivery_address,
  payment_method,
  order_status
) => {
  return axios.post(
    `${baseURL}order`,
    {
      full_name,
      phone_number,
      delivery_address,
      payment_method,
      order_status,
    },
    { headers }
  );
};
export const AddOrderDetailAPI = (order_id, products) => {
  return axios.post(
    `${baseURL}order-detail`,
    { order_id, products },
    { headers }
  );
};

export const RegisterAPI = (full_name, phone_number, password) => {
  return axios.post(`${baseURL}register/`, {
    full_name,
    phone_number,
    password,
  });
};

export const LogOut = () => {
  return axios.post(`${baseURL}logout`, {}, { headers });
};

export const AddItemCart = (product_id, quantity) => {
  return axios.post(`${baseURL}cart/`, { product_id, quantity }, { headers });
};
// export const CartUpdateQuantity = (product_id, quantity) => {
//   return axios.post(`${baseURL}cart/${product_id}`, { quantity }, { headers });
// };
