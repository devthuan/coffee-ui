import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useState } from "react";

import Rectangle1 from "../../../assets/images/Rectangle-1.png";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

const Cart = () => {
  const items = useSelector((state) => state.cart.data);

  console.log(items);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div>
          <h2>Giỏ Hàng</h2>

          {items &&
            items.map((item, index) => {
              return (
                <ul key={index}>
                  <li>
                    <img width={50} src={item.image} alt="" />
                  </li>
                  <li>{item.name}</li>
                  <li>{item.price}</li>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
