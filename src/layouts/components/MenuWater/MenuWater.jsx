import classNames from "classnames/bind";
import styles from "./MenuWater.module.scss";
import Button from "../../../components/Button/Button";
import CoffeeBlack from "../../../assets/images/coffee-black.svg";
import MilkTea from "../../../assets/images/milkTea.png";
import Soda from "../../../assets/images/soda.png";
import SodaNho from "../../../assets/images/soda-nho.png";
import HearIcon from "../../../assets/images/icon-hear.svg";

import { useState } from "react";
const cx = classNames.bind(styles);

const MenuWater = () => {
  const [activeTabs, setActiveTabs] = useState(1);

  const listMenu = [
    {
      name: "Cà Phê Đen",
      price: "25.000",
      image: CoffeeBlack,
      classify: 1,
    },
    {
      name: "Cà Phê Sữa",
      price: "25.000",
      image: CoffeeBlack,
      classify: 1,
    },
    {
      name: "Cà Phê Thường",
      price: "25.000",
      image: CoffeeBlack,
      classify: 1,
    },
    {
      name: "Cà Phê Phô Mai",
      price: "25.000",
      image: CoffeeBlack,
      classify: 1,
    },
    {
      name: "Milo",
      price: "25.000",
      image: CoffeeBlack,
      classify: 1,
    },
    {
      name: "Trà sữa đường đen",
      price: "25.000",
      image: MilkTea,
      classify: 2,
    },
    {
      name: "Trà sữa đường đen",
      price: "25.000",
      image: MilkTea,
      classify: 2,
    },
    {
      name: "Trà sữa đường đen",
      price: "25.000",
      image: MilkTea,
      classify: 2,
    },
    {
      name: "Trà sữa đường đen",
      price: "25.000",
      image: MilkTea,
      classify: 2,
    },
    {
      name: "Trà sữa đường đen",
      price: "25.000",
      image: MilkTea,
      classify: 2,
    },
    {
      name: "Soda Đào",
      price: "30.000",
      image: Soda,
      classify: 3,
    },
    {
      name: "Soda Đào",
      price: "30.000",
      image: Soda,
      classify: 3,
    },
    {
      name: "Soda Đào",
      price: "30.000",
      image: Soda,
      classify: 3,
    },
    {
      name: "Soda Nho",
      price: "30.000",
      image: SodaNho,
      classify: 3,
    },
    {
      name: "Soda Nho",
      price: "30.000",
      image: SodaNho,
      classify: 3,
    },
  ];

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
                  <p className={cx("price")}>{item.price} VND</p>
                  <img className={cx("item__icon")} src={HearIcon} alt="" />
                  <Button
                    className={cx("btn__add-cart")}
                    text="Thêm vào giỏ hàng"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default MenuWater;
