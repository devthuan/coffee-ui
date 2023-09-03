import classNames from "classnames/bind";
import styles from "./OrderStatistics.module.scss";
import styleDashboard from "../Dashboard/Dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);
const cxDashboard = classNames.bind(styleDashboard);

const OrderManagement = () => {
  const listUser = [
    {
      id: 1,
      product: "Trần Phước Thuận",
      totalPayment: "100,000",
      address: "Hướng phùng, hướng hoá, quảng trị",
      action: "Đang xử lý",
      createdDate: "03/09/2023",
    },
    {
      id: 2,
      product: "Trần Phước Thuận",
      totalPayment: "0945986661",
      address: "Hướng phùng, hướng hoá, quảng trị",
      action: "Thành công",
      createdDate: "03/09/2023",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Title className={cx("title")} text="order statistics" />
        <div className={cxDashboard("box__statistical")}>
          <div className={cxDashboard("box__item")}>
            <div className={cxDashboard("box__icon")}>
              <FontAwesomeIcon
                className={cxDashboard("icon", "success")}
                icon={faCheck}
              />
            </div>
            <div className={cxDashboard("box__text")}>
              <Title className={cxDashboard("title")} text="order successful" />
              <p className={cxDashboard("number")}>12</p>
            </div>
          </div>
          <div className={cxDashboard("box__item")}>
            <div className={cxDashboard("box__icon")}>
              <FontAwesomeIcon
                className={cxDashboard("icon", "pending")}
                icon={faSpinner}
              />
            </div>
            <div className={cxDashboard("box__text")}>
              <Title className={cxDashboard("title")} text="order pending" />
              <p className={cxDashboard("number")}>12</p>
            </div>
          </div>
          <div className={cxDashboard("box__item")}>
            <div className={cxDashboard("box__icon")}>
              <FontAwesomeIcon
                className={cxDashboard("icon", "failed")}
                icon={faXmark}
              />
            </div>
            <div className={cxDashboard("box__text")}>
              <Title className={cxDashboard("title")} text="order failed" />
              <p className={cxDashboard("number")}>12</p>
            </div>
          </div>
        </div>

        <div className={cx("box__table")}>
          {listUser && listUser.length > 0 ? (
            <table className={cx("table")}>
              <tbody>
                <tr className={cx("group__title")}>
                  <th className={cx("title__text")}>STT</th>
                  <th className={cx("title__text")}>
                    Tên sản phẩm và số lượng
                  </th>
                  <th className={cx("title__text")}>Số tiền</th>
                  <th className={cx("title__text")}>thông tin người nhận</th>
                  <th className={cx("title__text")}>trạng thái</th>

                  <th className={cx("title__text")}>Ngày tạo</th>
                </tr>
                {listUser.map((user, index) => {
                  return (
                    <tr className={cx("group__row")}>
                      <td className={cx("item")}>{user.id}</td>
                      <td className={cx("item")}>{user.product}</td>
                      <td className={cx("item")}>{user.totalPayment}</td>
                      <td className={cx("item")}>{user.address}</td>
                      <td className={cx("item")}>
                        <Button
                          className={cx("btn", "action")}
                          text={user.action}
                        />
                      </td>
                      <td className={cx("item")}>{user.createdDate}</td>
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

export default OrderManagement;
