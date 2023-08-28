import React from "react";
import styles from "./Input.module.scss"; // Import the SCSS module
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Input = ({ type, placeholder, onClick, className }) => {
  return (
    <input
      className={cx("input", className)}
      type={type}
      onChange={onClick}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  // Corrected propTypes spelling
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onchange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
