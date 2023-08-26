import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import IconSearch from "../../../assets/images/icon-search.png";
import ImageBackground from "../../../assets/images/coffee_image-1.png";
import Logo from "../../../assets/images/logo.png";
import Cart from "../../../assets/images/gio-hang.png";
import Avatar from "../../../assets/images/avatar-crycle.jpg";
import Button from "../../../components/Button/Button";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <img
        width={1280}
        className="backgroundImage"
        src={ImageBackground}
        alt=""
      />

      <div className={cx("header")}>
        <div className={cx("search")}>
          <img width={36} height={37} src={IconSearch} alt="" />
        </div>
        <ul className={cx("menu")}>
          <li className={cx("menu-item")}>Trang Chủ</li>
          <li className={cx("menu-item")}>Thực Đơn</li>
          <li className={cx("menu-item")}>
            <img width={76} src={Logo} alt="" />
          </li>
          <li className={cx("menu-item")}>Ưu đãi</li>
          <li className={cx("menu-item")}>Về Chúng Tôi</li>
          <li className={cx("menu-item")}>
            <img width={35} src={Cart} alt="" />
          </li>
          <li className={cx("menu-item")}>
            <img className={cx("avatar")} width={46} src={Avatar} alt="" />
          </li>
        </ul>
      </div>

      <div className={cx("banner")}>
        <p className={cx("hastag")}>#Welcome To</p>
        <h1 className={cx("title")}>THE LANGTHANG COFFEE HOUSE</h1>
        <p className={cx("description")}>
          không chỉ là coffee , chúng tôi bán cả sự trải nghiệm
        </p>
        <button className={cx("order-btn")}>Đặt Hàng</button>
        <a className={cx("link")} href="">
          xem video giới thiệu
        </a>
      </div>
    </header>
  );
};

export default Header;
