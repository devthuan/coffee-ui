import classNames from "classnames/bind";
import styles from "./OrderManagement.module.scss";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
// import ProductIMG from "../../assets/images/coffee-black.svg";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const OrderManagement = () => {
  const dataBill = useSelector((state) => state.order.data);

  console.log(dataBill);

  // const listBill = [
  //   {
  //     id: 1,
  //     product: [
  //       {
  //         imageProduct: ProductIMG,
  //         nameProduct: "Cà Phê Đen",
  //         classify: "Cà Phê",
  //         price: 19000,
  //         quantity: 5,
  //       },
  //       {
  //         imageProduct: ProductIMG,
  //         nameProduct: "Cà Phê Đen",
  //         classify: "Cà Phê",
  //         price: 19000,
  //         quantity: 5,
  //       },
  //     ],
  //     nameUser: "Trần Phước Thuận",
  //     numberPhone: "0945986661",
  //     address: " 35/9 Phan văn Hớn Q12",
  //     timeOrder: "19:28",
  //     paymentMethods: "Thanh toán khi nhân hàng",
  //     status: "Chờ",
  //   },
  //   {
  //     id: 2,
  //     product: [
  //       {
  //         imageProduct: ProductIMG,
  //         nameProduct: "Cà Phê Đen",
  //         classify: "Cà Phê",
  //         price: 19000,
  //         quantity: 5,
  //       },
  //       {
  //         imageProduct: ProductIMG,
  //         nameProduct: "Cà Phê Đen",
  //         classify: "Cà Phê",
  //         price: 19000,
  //         quantity: 5,
  //       },
  //     ],
  //     nameUser: "Trần Phước Thuận",
  //     numberPhone: "0945986661",
  //     address: " 35/9 Phan văn Hớn Q12",
  //     timeOrder: "19:28",
  //     paymentMethods: "Thanh toán khi nhân hàng",
  //     status: "Chờ",
  //   },
  // ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Title className={cx("title")} text="Bill management" />
        <div className={cx("group__bill")}>
          {dataBill.map((product, index) => {
            return (
              <div key={index} className={cx("box__bill")}>
                <div className={cx("id__bill")}>Hoá Đơn {product.id}</div>
                <div className={cx("item__product")}>
                  {product.product.map((item, index) => {
                    return (
                      <div key={index} className={cx("box__product")}>
                        <div className={cx("box__img")}>
                          <img
                            className={cx("image__product")}
                            width={35}
                            height={73}
                            src={item.imageProduct}
                            alt=""
                          />
                        </div>
                        <div className={cx("box__info__product")}>
                          <p className={cx("name__product")}>
                            {item.nameProduct}
                          </p>
                          <p className={cx("option__product")}>
                            {item.classify}
                          </p>
                          <p className={cx("quantity__product")}>
                            X {item.quantity}
                          </p>
                          <p className={cx("price__product")}>
                            {item.price.toLocaleString()} VNĐ
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={cx("box__information")}>
                  <h2 className={cx("title__infor")}>Thông tin</h2>
                  <ul className={cx("list__infor")}>
                    <li className={cx("item")}>
                      <p className={cx("item__title")}> tên </p>
                      <p className={cx("value")}>: {product.nameUser}</p>
                    </li>
                    <li className={cx("item")}>
                      <p className={cx("item__title")}> Số điện thoại </p>
                      <p className={cx("value")}>: {product.numberPhone}</p>
                    </li>
                    <li className={cx("item")}>
                      <p className={cx("item__title")}>Địa chỉ </p>
                      <p className={cx("value")}>: {product.address}</p>
                    </li>
                    <li className={cx("item")}>
                      <p className={cx("item__title")}>Thời gian </p>
                      <p className={cx("value")}>: “{product.timeOrder}”</p>
                    </li>
                    <li className={cx("item")}>
                      <p className={cx("item__title")}>Phương Thức </p>
                      <p className={cx("value")}>: {product.paymentMethods}</p>
                    </li>
                    <li className={cx("item")}>
                      <p className={cx("item__title")}>Trạng thái </p>
                      <p className={cx("value", "wait")}>: {product.status}</p>
                    </li>
                  </ul>
                </div>

                <div className={cx("box__btn")}>
                  <Button className={cx("btn", "accept")} text="Chấp Nhận" />
                  <Button className={cx("btn", "cancel")} text="Huỷ" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
