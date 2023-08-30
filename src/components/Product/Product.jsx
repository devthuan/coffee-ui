import React from "react";
import styles from "../../layouts/components/MenuWater/MenuWater.module.scss"; // Import the SCSS module
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import HearIcon from "../../assets/images/icon-hear.svg";

const cx = classNames.bind(styles);

const Product = ({ product, addToCart, className }) => {
  return (
    <div className={cx("item")}>
      <div className={cx("background__image")}>
        <img
          width={61}
          height={130}
          className={cx("item__image")}
          src={product.image}
          alt=""
        />
      </div>
      <p className={cx("name")}>{product.name}</p>
      <p className={cx("price")}>{product.price} VND</p>
      <img className={cx("_icon")} src={HearIcon} alt="" />
      <Button
        onClick={addToCart(product)}
        className={cx("btn__add-cart")}
        text="Thêm vào giỏ hàng"
      />
    </div>
  );
};

Product.propTypes = {
  // Corrected propTypes spelling

  className: PropTypes.string,
};

export default Product;
