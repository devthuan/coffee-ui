import classNames from "classnames/bind";
import styles from "./MenuCake.module.scss";
import Cake1 from "../../../assets/images/cake-1.png";
import HearIcon from "../../../assets/images/icon-hear.svg";
import Button from "../../../components/Button/Button";
const cx = classNames.bind(styles);

const MenuCake = () => {
  const listMenu = [
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
    {
      name: "Bánh Cuộn Nho Khô",
      price: "30.000",
      image: Cake1,
      classify: 1,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h1 className={cx("title")}>
          bánh ngọt. <br /> Sao lại không?
        </h1>

        <div className={cx("group__card")}>
          {listMenu.map((item, index) => {
            return (
              <div key={index} className={cx("item")}>
                <div className={cx("background__image")}>
                  <img
                    width={189}
                    height={138}
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

export default MenuCake;
