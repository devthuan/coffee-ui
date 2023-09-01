import classNames from "classnames/bind";
import stylesOrder from "./Order.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItemOrder } from "../../../redux/features/order/orderSlice";

import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";

const cx = classNames.bind(stylesOrder);

const Order = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.order.data);
  console.log(items.length);
  let handleDelete = (itemId) => {
    dispatch(removeItemOrder(itemId));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        {items && items.length > 0 ? (
          <>
            <Title className={cx("title")} text="Đơn hàng" />
            <table className={cx("table")}>
              <tbody className={cx("table__content")}>
                <tr className={cx("table__title")}>
                  <th className={cx("table__title-item")}>Sản phẩm</th>

                  <th className={cx("table__title-item")}>Số tiền</th>
                  <th className={cx("table__title-item")}>
                    thông tin người nhận
                  </th>
                  <th className={cx("table__title-item")}>Trạng thái</th>
                  <th className={cx("table__title-item")}>Thao tác</th>
                </tr>
                {items.map((order, index) => {
                  return (
                    <tr key={index} className={cx("table__items")}>
                      <td className={cx("table__item")}>
                        {order.name.map((item, indexOrder) => {
                          return (
                            <div
                              key={indexOrder}
                              className={cx("image__name-product")}
                            >
                              <img
                                height={65}
                                className={cx("img_product")}
                                src={item.imageOrder}
                                alt=""
                              />
                              <div className={cx("box__infoProduct")}>
                                <div className={cx("box__detail")}>
                                  <p className={cx("name__product")}>
                                    {item.nameOrder}
                                  </p>
                                  <div className={cx("amount")}>
                                    <p className={cx("quantity__product")}>
                                      X {item.quantityOrder}
                                    </p>
                                  </div>
                                </div>
                                <p className={cx("price__product")}>
                                  {item.price.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </td>
                      <td className={cx("table__item")}>
                        <p className={cx("total")}>
                          {order.totalPayment.toLocaleString()}
                        </p>
                      </td>
                      <td className={cx("table__item")}>
                        <div className={cx("box__info")}>
                          <p className={cx("text__name")}>{order.fullName},</p>
                          <p className={cx("text__numberPhone")}>
                            {order.numberPhone},
                          </p>
                          <p className={cx("text__address")}>{order.address}</p>
                        </div>
                      </td>
                      <td className={cx("table__item")}>
                        <div className={cx("table__btn")}>
                          <Button className={cx("btn")} text="Pending" />
                        </div>
                      </td>
                      <td className={cx("table__item")}>
                        <div className={cx("table__btn")}>
                          <Button
                            onClick={() => handleDelete(order.id)}
                            className={cx("btn")}
                            text="Huỷ"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <Title
            className={cx("title")}
            text="Không có đơn hàng nào đang xử lý"
          />
        )}
      </div>
    </div>
  );
};

export default Order;
