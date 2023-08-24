import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header/Header";
const cx = classNames.bind(styles);

const DefaultLayout = () => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        
      </div>
    </div>
  );
};

export default DefaultLayout;
