import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeItem } from "../../../redux/features/cart/cartSlice";

import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const cx = classNames.bind(styles);

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.data);
  const [itemQuantities, setItemQuantities] = useState({});

  // console.log(items);

  let handlePlus = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
    console.log(itemQuantities);
  };
  let handleMinus = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 0),
    }));
  };

  let handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  let handleQuantityChange = (e, itemId) => {
    let newQuantity = parseInt(e.target.value);
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let totalPayment = 0;
    for (const item of items) {
      const quantity = itemQuantities[item.id] || 1;
      const itemTotal = item.price * quantity;
      totalPrice += itemTotal;
    }
    totalPayment = totalPrice + 15000;
    return { totalPrice, totalPayment };
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
            {items.map((item, index) => {
              return (
                <tr key={index} className={cx("table__items")}>
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
                      {item.price.toLocaleString()}
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

                      <input
                        className={cx("input__amount")}
                        type="text"
                        value={itemQuantities[item.id] || 1}
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
                        item.price * itemQuantities[item.id] || item.price * 1
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
            <Button className={cx("order__btn")} text="Đặt Hàng" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
