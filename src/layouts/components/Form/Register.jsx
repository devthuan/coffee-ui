import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const cx = classNames.bind(styles);

const Register = () => {
  const GroupInput = [
    { type: "text", label: "Họ và tên", placeholder: "Họ và tên" },
    { type: "text", label: "Số Điện thoại", placeholder: "Số điện thoại" },
    { type: "text", label: "Mật khẩu", placeholder: "Mật khẩu" },
  ];

  const [inputValues, setInputValues] = useState({});

  const handleInputValues = (e, index) => {
    const { value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [index]: value,
    }));

    console.log(inputValues);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("content__right")}>
          <Title className={cx("content__right-title")} text="Đăng ký" />

          <div className={cx("group__input")}>
            {GroupInput.map((item, index) => {
              return (
                <>
                  <label htmlFor="" className={cx("title__input")}>
                    {item.label}
                  </label>
                  <Input
                    key={index}
                    className={cx("input")}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={(e) => handleInputValues(e, index)}
                  />
                </>
              );
            })}
            <Button className={cx("btn")} text="Đăng Ký" />
          </div>
          <div className={cx("box__support")}>
            <p className={cx("not__number")}>
              Bạn đã có tài khoản ?
              <NavLink to="/login" className={cx("btn__register")}>
                {" "}
                Đăng Nhập
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
