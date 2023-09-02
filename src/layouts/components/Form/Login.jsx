import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import { NavLink } from "react-router-dom";
import { useState, Fragment } from "react";
const cx = classNames.bind(styles);

const Login = () => {
  const GroupInput = [
    { type: "text", label: "Tài khoản", placeholder: "Số điện thoại" },
    { type: "text", label: "Mật khẩu", placeholder: "Mật khẩu" },
  ];

  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setInputValues((preValues) => ({
      ...preValues,
      [index]: value,
    }));

  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("content__right")}>
          <Title className={cx("content__right-title")} text="Đăng Nhập" />

          <div className={cx("group__input")}>
            {GroupInput.map((item, index) => {
              return (
                <Fragment key={index}>
                  <label htmlFor="" className={cx("title__input")}>
                    {item.label}
                  </label>
                  <Input
                    key={index}
                    className={cx("input")}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Fragment>
              );
            })}
            <Button className={cx("btn")} text="Đăng Nhập" />
          </div>
          <div className={cx("box__support")}>
            <p className={cx("forgot__password")}>Quên mật khẩu</p>
            <p className={cx("not__number")}>
              Bạn chưa có tài khoản ?
              <NavLink to="/register" className={cx("btn__register")}>
                Đăng Ký
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
