import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Button = ({ text, onClick, className }) => {
  return (
    <button className={cx("button", className)} onClick={onClick}>
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
