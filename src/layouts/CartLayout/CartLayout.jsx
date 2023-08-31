import classNames from "classnames/bind";
import styles from "./CartLayout.module.scss";

import Menu from "../components/Header/Menu";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
const cx = classNames.bind(styles);

const CartLayout = () => {
  return (
    <div className={cx("wrapper")}>
      <Menu />
      <Cart />

      <Footer />
    </div>
  );
};

export default CartLayout;
