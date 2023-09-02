import classNames from "classnames/bind";
import styles from "./User.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faUser,
//   faCartShopping,
// } from "@fortawesome/free-solid-svg-icons";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

const User = () => {
  const listUser = [
    {
      id: 1,
      fullName: "Trần Phước Thuận",
      username: "0945986661",
      address: "Hướng phùng, hướng hoá, quảng trị",
      permission: "Khác Hàng",
      createdDate: "03/09/2023",
    },
    {
      id: 2,
      fullName: "Trần Phước Thuận",
      username: "0945986661",
      address: "Hướng phùng, hướng hoá, quảng trị",
      permission: "Khác Hàng",
      createdDate: "03/09/2023",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Title className={cx("title")} text="Statistical User" />
        <div className={cx("box__table")}>
          {listUser && listUser.length > 0 ? (
            <table className={cx("table")}>
              <tbody>
                <tr className={cx("group__title")}>
                  <th className={cx("title__text")}>STT</th>
                  <th className={cx("title__text")}>Họ và tên</th>
                  <th className={cx("title__text")}>Tài khoản </th>
                  <th className={cx("title__text")}>Địa chỉ nhận hàng</th>
                  <th className={cx("title__text")}>Quyền</th>

                  <th className={cx("title__text")}>Ngày tạo</th>
                  <th className={cx("title__text")}>Thao tác</th>
                </tr>
                {listUser.map((user, index) => {
                  return (
                    <tr className={cx("group__row")}>
                      <td className={cx("item")}>{user.id}</td>
                      <td className={cx("item")}>{user.fullName}</td>
                      <td className={cx("item")}>{user.username}</td>
                      <td className={cx("item")}>{user.address}</td>
                      <td className={cx("item")}>{user.permission}</td>
                      <td className={cx("item")}>{user.createdDate}</td>
                      <td className={cx("item")}>
                        <Button className={cx("btn", "update")} text="sửa" />
                        <Button className={cx("btn", "delete")} text="xoá" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <Title
              className={cx("title")}
              text="No users registered for an account..."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
