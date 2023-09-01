import classNames from "classnames/bind";
import styles from "./OrderLayout.module.scss";

import Menu from "../components/Header/Menu";
import Order from "../components/Order/Order";

const cx = classNames.bind(styles);

const OrderLayout = () => {
  return (
    <div className={cx("wrapper")}>
      <Menu />
      <Order />
    </div>
  );
};

export default OrderLayout;
