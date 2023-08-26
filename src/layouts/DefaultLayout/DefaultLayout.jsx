import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "../components/Header/Header";
import Space from "../components/Space/Space";
import About from "../components/About/About";
import MenuWater from "../components/MenuWater/MenuWater";
const cx = classNames.bind(styles);

const DefaultLayout = () => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Space />
      <About />
      <div className={cx("container")}>
        <MenuWater />
      </div>
    </div>
  );
};

export default DefaultLayout;
