import classNames from "classnames/bind";
import styles from "./MenuWater.module.scss";
import Button from "../../../components/Button/Button";
import CoffeeBlack from "../../../assets/images/coffee-black.svg";
import HearIcon from "../../../assets/images/icon-hear.svg";
const cx = classNames.bind(styles);

const MenuWater = () => {
  const listMenu = [
    {
      name: "Cà Phê Đen",
      price: "25.000",
      image: CoffeeBlack,
    },
    {
      name: "Cà Phê Sữa",
      price: "25.000",
      image: CoffeeBlack,
    },
    {
      name: "Cà Phê Thường",
      price: "25.000",
      image: CoffeeBlack,
    },
    {
      name: "Cà Phê Phô Mai",
      price: "25.000",
      image: CoffeeBlack,
    },
    {
      name: "Milo",
      price: "25.000",
      image: CoffeeBlack,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h1 className={cx("title")}>có gì trong thực đơn ?</h1>
        <div className={cx("group__btn")}>
          <Button className={cx("btn", "active_btn")} text="Cà Phê" />
          <Button className={cx("btn")} text="Trà Sữa" />
          <Button className={cx("btn")} text="Soda" />
        </div>
        <div className={cx("group__card")}>
          {listMenu.map((item, index) => {
            return (
              <div key={index} className={cx("item")}>
                <div className={cx("background__image")}>
                  <img
                    width={61}
                    className={cx("Item__image")}
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
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuWater;
