import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  removeItem,
  removeAll,
  increasingQuantity,
  reduceQuantity,
  updateQuantity,
} from "../../../redux/features/cart/cartSlice";
import { addItemOrder } from "../../../redux/features/order/orderSlice";

import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const cx = classNames.bind(styles);

const Cart = () => {
  const dispatch = useDispatch();
  const listItemCart = useSelector((state) => state.cart.data);
  const [newQuantity, setNewQuantity] = useState();
  const [fullName, setFullName] = useState();
  const [numberPhone, setNumberPhone] = useState();
  const [address, setAddress] = useState();

  let handlePlus = (itemId) => {
    dispatch(
      increasingQuantity({
        itemId,
      })
    );
  };

  let handleMinus = (itemId) => {
    dispatch(
      reduceQuantity({
        itemId,
      })
    );
  };

  let handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  let handleQuantityChange = (e, itemId) => {
    setNewQuantity(parseInt(e.target.value));
    dispatch(
      updateQuantity({
        itemId,
        newQuantity: parseInt(e.target.value),
      })
    );
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let totalPayment = 0;
    for (let item of listItemCart) {
      let amount = item.quantity || 1;
      let itemTotal = item.price * amount;
      totalPrice += itemTotal;
    }
    totalPayment = totalPrice + 15000;
    return { totalPrice, totalPayment };
  };

  let handleOrderBtn = () => {
    const nameProduct = [];
    let totalQuantity = 0;
    let idTemp = 0;
    for (let product of listItemCart) {
      nameProduct.push({
        id: idTemp++,
        nameOrder: product.name,
        price: product.price,
        imageOrder: product.image,
        quantityOrder: product.quantity,
      });
      totalQuantity += product.quantity;
    }
    const orderData = {
      id: idTemp,
      name: nameProduct,
      fullName: fullName,
      numberPhone: numberPhone,
      address: address,
      totalPayment: totalPayment,
    };
    dispatch(addItemOrder(orderData));

    toast.success("Đơn hàng của bạn đã được xác nhận");

    dispatch(removeAll());
  };

  const { totalPrice, totalPayment } = calculateTotalPrice();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Title className={cx("title")} text="Giỏ hàng" />
        <table className={cx("table")}>
          <tbody className={cx("table__content")}>
            <tr className={cx("table__title")}>
              <th className={cx("table__title-item")}>Sản phẩm</th>
              <th className={cx("table__title-item")}>Đơn giá</th>
              <th className={cx("table__title-item")}>Số lượng</th>
              <th className={cx("table__title-item")}>Số tiền</th>
              <th className={cx("table__title-item")}>Thao tác</th>
            </tr>
            {listItemCart.map((item, index) => {
              return (
                <tr key={index} className={cx("table__listItemCart")}>
                  <td className={cx("table__item")}>
                    <div className={cx("image__name-product")}>
                      <img
                        height={65}
                        className={cx("img_product")}
                        src={item.image}
                        alt=""
                      />
                      <p className={cx("name__product")}>{item.name}</p>
                    </div>
                  </td>
                  <td className={cx("table__item")}>
                    <p className={cx("price__product")}>
                      {item.price ? item.price.toLocaleString() : "N/A"}
                    </p>
                  </td>
                  <td className={cx("table__item")}>
                    <div className={cx("amount")}>
                      <h1
                        className={cx("icon__minus")}
                        onClick={() => handleMinus(item.id)}
                      >
                        -
                      </h1>

                      <Input
                        className={cx("input__amount")}
                        type="text"
                        value={
                          newQuantity !== undefined
                            ? item.newQuantity
                            : item.quantity
                        }
                        onChange={(e) => handleQuantityChange(e, item.id)}
                      />

                      <h1
                        className={cx("icon__plus")}
                        onClick={() => handlePlus(item.id)}
                      >
                        +
                      </h1>
                    </div>
                  </td>
                  <td className={cx("table__item")}>
                    <p className={cx("total")}>
                      {(
                        item.price * item.quantity || item.price * 1
                      ).toLocaleString()}
                    </p>
                  </td>
                  <td className={cx("table__item")}>
                    <div className={cx("table__btn")}>
                      <Button
                        onClick={() => handleDelete(item.id)}
                        className={cx("btn")}
                        text="Xoá"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={cx("checkOut")}>
          <div className={cx("group__address")}>
            <h2 className={cx("title__info")}>Thông tin Giao Hàng</h2>
            <div className={cx("name_num")}>
              <div className={cx("label_input")}>
                <label className={cx("label__title")} htmlFor="Input">
                  Họ và Tên
                </label>
                <Input
                  onChange={(e) => setFullName(e.target.value)}
                  className={cx("fullName")}
                  type="text"
                  placeholder="Họ và tên"
                />
              </div>

              <div className={cx("label_input")}>
                <label className={cx("label__title")} htmlFor="fullName">
                  Số điện thoại
                </label>
                <Input
                  onChange={(e) => setNumberPhone(e.target.value)}
                  readOnly
                  className={cx("NumPhone")}
                  type="text"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>

            <div className={cx("label_input")}>
              <label className={cx("label__title")} htmlFor="fullName">
                Địa chỉ giao hàng
              </label>
              <Input
                onChange={(e) => setAddress(e.target.value)}
                className={cx("address")}
                type="text"
                placeholder="Địa chỉ giao hàng"
              />
            </div>
          </div>
          <div className={cx("group__totalPayment")}>
            <ul className={cx("list")}>
              <li className={cx("item")}>
                Tổng tiền hàng:
                <p className={cx("item__number")}>
                  {totalPrice.toLocaleString()}
                </p>
              </li>
              <li className={cx("item")}>
                Phí vận chuyển:
                <p className={cx("item__number")}> 15,000</p>
              </li>
              <li className={cx("item")}>
                Tổng tiền thanh toán:
                <p className={cx("item__number")}>
                  {totalPayment.toLocaleString()}
                </p>
              </li>
            </ul>
            <Button
              onClick={() => handleOrderBtn()}
              className={cx("order__btn")}
              text="Đặt Hàng"
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Cart;
