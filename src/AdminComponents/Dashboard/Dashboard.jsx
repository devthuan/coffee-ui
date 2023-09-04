import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import Title from "../../components/Title/Title";
import PieChart from "../../components/Chart/PieChart";
import LineChart from "../../components/Chart/LineChart";
const cx = classNames.bind(styles);

const Dashboard = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("box__statistical")}>
          <div className={cx("box__item")}>
            <div className={cx("box__icon")}>
              <FontAwesomeIcon className={cx("icon")} icon={faMoneyBill} />
            </div>
            <div className={cx("box__text")}>
              <Title className={cx("title")} text="Tổng doanh thu" />
              <p className={cx("number")}>12 $</p>
            </div>
          </div>
          <div className={cx("box__item")}>
            <div className={cx("box__icon")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUser} />
            </div>
            <div className={cx("box__text")}>
              <Title className={cx("title")} text="Tổng thành viên" />
              <p className={cx("number")}>12</p>
            </div>
          </div>
          <div className={cx("box__item")}>
            <div className={cx("box__icon")}>
              <FontAwesomeIcon className={cx("icon")} icon={faCartShopping} />
            </div>
            <div className={cx("box__text")}>
              <Title className={cx("title")} text="tổng đơn hàng" />
              <p className={cx("number")}>12</p>
            </div>
          </div>
        </div>
        <div className={cx("box__lineChart")}>
          <LineChart />
        </div>
        <div className={cx("box__chart")}>
          <div className={cx("chart__item")}>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
