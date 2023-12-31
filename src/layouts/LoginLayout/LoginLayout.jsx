import classNames from "classnames/bind";
import styles from "./LoginLayout.module.scss";

import Footer from "../components/Footer/Footer";
const cx = classNames.bind(styles);

const LoginLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}> {children}</div>
      </div>
    </div>
  );
};

export default LoginLayout;
