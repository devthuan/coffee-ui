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
import { useEffect, useMemo } from "react";
import { GetUser } from "../../services/UseServices";
import { useSelector, useDispatch } from "react-redux";
import { addTotalData } from "../../redux/features/user/userSlice";

const cx = classNames.bind(styles);

const Dashboard = () => {
  const dispatch = useDispatch();
  const totalUser = useSelector((state) => state.user.totalData);
  const memoizedUserData = useMemo(() => totalUser, [totalUser]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const users = await GetUser(1);
        if (users && users.status === 200) {
          const data = users.data.total;
          dispatch(addTotalData(data));
        }
      } catch (error) {
        console.error("Có lỗi xảy ra:", error);
      }
    };
    if (memoizedUserData === 0) {
      fetchAPI();
    }
  }, [dispatch, memoizedUserData]);

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
              <p className={cx("number")}>{totalUser}</p>
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
          <div className={cx("chart__item")}>{/* <PieChart /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
