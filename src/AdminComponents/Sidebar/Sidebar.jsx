import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faPeopleRoof,
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const location = useLocation();
  const listMenuManagement = [
    { route: "/dashboard", name: "Dashboard", icon: faGauge },
    {
      route: "/order-statistics",
      name: "Statistics Order",
      icon: faCartShopping,
    },
    { route: "/user-management", name: "User Management", icon: faPeopleRoof },
    {
      route: "/order-management",
      name: "Bill Management",
      icon: faCartShopping,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("content")}>
          <ul className={cx("list")}>
            {listMenuManagement &&
              listMenuManagement.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "item",
                      item.route === location.pathname ? "active" : ""
                    )}
                  >
                    <NavLink to={item.route} className={cx("link")}>
                      <FontAwesomeIcon
                        className={cx("icon")}
                        icon={item.icon}
                      />
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}

            <li className={cx("item")}>
              <a className={cx("link", "logout")} href="/">
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faRightFromBracket}
                />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
