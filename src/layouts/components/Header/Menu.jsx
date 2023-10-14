import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import IconSearch from "../../../assets/images/icon-search.png";
import Logo from "../../../assets/images/logo.png";
import Cart from "../../../assets/images/gio-hang.png";
import Avatar from "../../../assets/images/avatar-crycle.jpg";
import { useState, useEffect, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { GetCartAPI } from "../../../services/UseServices";
import { addTotalData } from "../../../redux/features/cart/cartSlice";
const cx = classNames.bind(styles);

const Menu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.totalData);
  const [isHovered, setIsHovered] = useState(false);
  const checkLogin = localStorage.getItem("token");
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/");
  };

  // Sử dụng useMemo để lưu trạng thái dữ liệu đã được tải
  const memoizedCartData = useMemo(() => cartData, [cartData]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await GetCartAPI();

        if (res && res.status === 200 && res.data) {
          const data = res.data.totalCart;
          dispatch(addTotalData(data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Kiểm tra xem dữ liệu đã được tải chưa trước khi gọi API
    if (memoizedCartData === 0) {
      fetchAPI();
    }
  }, [dispatch, memoizedCartData]);

  return (
    <div className={cx("header")}>
      <div className={cx("search")}>
        <img width={36} height={37} src={IconSearch} alt="" />
      </div>
      <ul className={cx("menu")}>
        <li className={cx("menu-item")}>
          <NavLink to="/" className={cx("menu-item")}>
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <a href="#menu" className={cx("menu-item")}>
            Thực Đơn
          </a>
        </li>

        <NavLink to="/" className={cx("menu-item")}>
          <img width={76} src={Logo} alt="" />
        </NavLink>

        <li>
          <a href="#endow" className={cx("menu-item")}>
            Ưu đãi
          </a>
        </li>
        <li>
          <NavLink to="/dashboard" className={cx("menu-item")}>
            Về Chúng Tôi
          </NavLink>
          {/* <a href="#introduce" className={cx("menu-item")}>
            Về Chúng Tôi
          </a> */}
        </li>
        <NavLink to="/cart">
          <li className={cx("menu-item", "cart")}>
            <img width={35} src={Cart} alt="" />
            <p className={cx("amount")}>{cartData ? cartData : 0} </p>
          </li>
        </NavLink>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cx("menu-item", "popup")}
        >
          {checkLogin ? (
            <>
              <img className={cx("avatar")} width={46} src={Avatar} alt="" />

              <div className={cx("group__prop-up", !isHovered ? "hidden" : "")}>
                <p className={cx("name")}>Nguyễn Minh Trí</p>
                <p className={cx("id")}>ID: #12512</p>
                <ul className={cx("list_menu")}>
                  <li>
                    <NavLink
                      to="/"
                      className={cx("item", {
                        active_popup: location.pathname === "/",
                      })}
                    >
                      Trang Chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/order"
                      className={cx("item", {
                        active_popup: location.pathname === "/order",
                      })}
                    >
                      Đơn hàng
                    </NavLink>
                  </li>
                  <li className={cx("item")}>Voucher</li>
                  <li className={cx("item")}>lịch sử</li>
                  <li className={cx("item")}>cài đặt</li>
                  <li onClick={handleLogOut} className={cx("item")}>
                    đăng xuất
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink to="/login" className={cx("login__link")}>
              <FontAwesomeIcon
                className={cx("icon__login")}
                icon={faRightToBracket}
              />
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
