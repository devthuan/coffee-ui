import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import classNames from "classnames/bind";
import styles from "./MenuWater.module.scss";
import Button from "../../../components/Button/Button";
import CoffeeBlack from "../../../assets/images/coffee-black.svg";
import MilkTea from "../../../assets/images/milkTea.png";
import Soda from "../../../assets/images/soda.png";
import SodaNho from "../../../assets/images/soda-nho.png";
import HearIcon from "../../../assets/images/icon-hear.svg";

import { addItem } from "../../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

const MenuWater = () => {
  const [activeTabs, setActiveTabs] = useState(1);

  const dispatch = useDispatch();

  const listMenu = [
    {
      id: 1,
      name: "Cà Phê Đen",
      price: 25000,
      image: CoffeeBlack,
      classify: 1,
    },
    {
      id: 2,
      name: "Cà Phê Sữa",
      price: 25000,
      image: CoffeeBlack,
      classify: 1,
    },
    {
      id: 3,
      name: "Cà Phê Thường",
      price: 25000,
      image: CoffeeBlack,
      classify: 1,
    },
    {
      id: 4,
      name: "Cà Phê Phô Mai",
      price: 25000,
      image: CoffeeBlack,
      classify: 1,
    },
    {
      id: 5,
      name: "Milo",
      price: 25000,
      image: CoffeeBlack,
      classify: 1,
    },
    {
      id: 6,
      name: "Trà sữa đường đen",
      price: 25000,
      image: MilkTea,
      classify: 2,
    },
    {
      id: 7,
      name: "Trà sữa đường đen",
      price: 25000,
      image: MilkTea,
      classify: 2,
    },
    {
      id: 8,
      name: "Trà sữa đường đen",
      price: 25000,
      image: MilkTea,
      classify: 2,
    },
    {
      id: 9,
      name: "Trà sữa đường đen",
      price: 25000,
      image: MilkTea,
      classify: 2,
    },
    {
      id: 10,
      name: "Trà sữa đường đen",
      price: 25000,
      image: MilkTea,
      classify: 2,
    },
    {
      id: 11,
      name: "Soda Đào",
      price: 30000,
      image: Soda,
      classify: 3,
    },
    {
      id: 12,
      name: "Soda Đào",
      price: 30000,
      image: Soda,
      classify: 3,
    },
    {
      id: 13,
      name: "Soda Đào",
      price: 30000,
      image: Soda,
      classify: 3,
    },
    {
      id: 14,
      name: "Soda Nho",
      price: 30000,
      image: SodaNho,
      classify: 3,
    },
    {
      id: 15,
      name: "Soda Nho",
      price: 30000,
      image: SodaNho,
      classify: 3,
    },
  ];

  let handleClickBtn = (id, image, name, price) => {
    dispatch(
      addItem({
        id,
        image,
        name,
        price,
      })
    );
    toast.success("Thêm sản phẩm thành công");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h1 id="menu" className={cx("title")}>
          có gì trong thực đơn ?
        </h1>
        <div className={cx("group__btn")}>
          <Button
            onClick={() => setActiveTabs(1)}
            className={activeTabs === 1 ? cx("active_btn") : cx("btn")}
            text="Cà Phê"
          />
          <Button
            onClick={() => setActiveTabs(2)}
            className={activeTabs === 2 ? cx("active_btn") : cx("btn")}
            text="Trà Sữa"
          />
          <Button
            onClick={() => setActiveTabs(3)}
            className={activeTabs === 3 ? cx("active_btn") : cx("btn")}
            text="Soda"
          />
        </div>
        <div className={cx("group__card")}>
          {listMenu.map((item, index) => {
            if (item.classify === activeTabs) {
              return (
                <div key={index} className={cx("item")}>
                  <div className={cx("background__image")}>
                    <img
                      width={61}
                      height={130}
                      className={cx("item__image")}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <p className={cx("name")}>{item.name}</p>
                  <p className={cx("price")}>
                    {item.price.toLocaleString()} VND
                  </p>
                  <img className={cx("item__icon")} src={HearIcon} alt="" />
                  <Button
                    onClick={() =>
                      handleClickBtn(item.id, item.image, item.name, item.price)
                    }
                    className={cx("btn__add-cart")}
                    text="Thêm vào giỏ hàng"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default MenuWater;
