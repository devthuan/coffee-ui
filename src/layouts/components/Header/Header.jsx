import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import ImageBackground from "../../../assets/images/coffee_image-1.png";
import IconSearch from "../../../assets/images/icon-search.png";
import Logo from "../../../assets/images/logo.png";
import Cart from "../../../assets/images/gio-hang.png";
import Avatar from "../../../assets/images/avatar-crycle.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Header = () => {
  const Items = useSelector((state) => state.cart.data);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
          <li>
            <a href="#menu" className={cx("menu-item")}>
              Thực Đơn
            </a>
          </li>
          <li className={cx("menu-item")}>
            <img width={76} src={Logo} alt="" />
          </li>
          <li>
            <a href="#endow" className={cx("menu-item")}>
              Ưu đãi
            </a>
          </li>
          <li>
            <a href="#introduce" className={cx("menu-item")}>
              Về Chúng Tôi
            </a>
          </li>

          <li className={cx("menu-item", "cart")}>
            <NavLink to="/cart">
              <img width={35} src={Cart} alt="" />
              <p className={cx("amount")}>{Items.length || 0} </p>
            </NavLink>
          </li>

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cx("menu-item", "popup")}
          >
            <img className={cx("avatar")} width={46} src={Avatar} alt="" />
            <div className={cx("group__prop-up", !isHovered ? "hidden" : "")}>
              <p className={cx("name")}>Nguyễn Minh Trí</p>
              <p className={cx("id")}>ID: #12512</p>
              <ul className={cx("list_menu")}>
                <li className={cx("item", "active_popup")}>Trang Chủ</li>
                <NavLink to="/order">
                  <li className={cx("item")}>Đơn hàng</li>
                </NavLink>
                <li className={cx("item")}>Voucher</li>
                <li className={cx("item")}>lịch sử</li>
                <li className={cx("item")}>cài đặt</li>
                <li className={cx("item")}>đăng xuất</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className={cx("banner")}>
        <p className={cx("hastag")}>#Welcome To</p>
        <h1 className={cx("title")}>THE LANGTHANG COFFEE HOUSE</h1>
        <p className={cx("description")}>
          không chỉ là coffee , chúng tôi bán cả sự trải nghiệm
        </p>
        <button className={cx("order-btn")}>
          <a href="#menu" className={cx("order-btn")}>
            Đặt Hàng
          </a>
        </button>
        <a className={cx("link")} href="#">
          xem video giới thiệu
        </a>
      </div>
    </header>
  );
};

export default Header;
