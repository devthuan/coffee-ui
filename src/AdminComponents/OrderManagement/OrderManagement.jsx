import { useEffect, useMemo, useState } from "react";
import classNames from "classnames/bind";
import styles from "./OrderManagement.module.scss";
import { format, isValid } from "date-fns";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemOrder,
  addItemOrder,
} from "../../redux/features/order/orderSlice";

import { setStatusOrderStatistic } from "../../redux/features/order/orderStatisticSlice";
import {
  GetOrdersByUserIdAPI,
  GetOrdersDetailAPI,
} from "../../services/UseServices";

const cx = classNames.bind(styles);

const OrderManagement = () => {
  const dispatch = useDispatch();
  const dataBill = useSelector((state) => state.order.data);
  const menoizedDataOrder = useMemo(() => dataBill, [dataBill]);

  // calculate data pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataBill.slice(indexOfFirstItem, indexOfLastItem);

  const handleClickAccept = (id) => {
    dispatch(
      setStatusOrderStatistic({
        orderId: id,
        newStatus: "Successful",
      })
    );
    dispatch(removeItemOrder(id));
  };

  const handleClickCancel = (id) => {
    dispatch(
      setStatusOrderStatistic({
        orderId: id,
        newStatus: "Failed",
      })
    );
    dispatch(removeItemOrder(id));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await GetOrdersByUserIdAPI();
        if (res && res.status === 200 && res.data) {
          const dataRes = res.data.data;

          for (const item of dataRes) {
            const order_id = item.id;
            const resOrderDetail = await GetOrdersDetailAPI(order_id);
            const orderDetail = {
              id: item.id,
              product: resOrderDetail.data.data,
              full_name: item.full_name,
              phone_number: item.phone_number,
              delivery_address: item.delivery_address,
              total_payment: item.total_payment,
              order_date: item.order_date,
              payment_methods: item.payment_methods,
              order_status: item.order_status,
            };

            dispatch(addItemOrder(orderDetail));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!menoizedDataOrder.length) {
      fetchAPI();
    }
  }, [dispatch, menoizedDataOrder]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Title className={cx("title")} text="Bill management" />
        <div className={cx("group__bill")}>
          {currentItems.map((product, index) => {
            if (product.order_status === "Processing") {
              return (
                <div key={index} className={cx("box__bill")}>
                  <div className={cx("id__bill")}>Hoá Đơn {product.id}</div>
                  <div className={cx("item__product")}>
                    {product.product.map((item, index2) => {
                      return (
                        <div key={index2} className={cx("box__product")}>
                          <div className={cx("box__img")}>
                            <img
                              className={cx("image__product")}
                              width={35}
                              height={73}
                              src={item.image_product}
                              alt=""
                            />
                          </div>
                          <div className={cx("box__info__product")}>
                            <p className={cx("name__product")}>
                              {item.name_product}
                            </p>
                            <p className={cx("option__product")}>
                              {item.classify}
                            </p>
                            <p className={cx("quantity__product")}>
                              X {item.quantity}
                            </p>
                            <p className={cx("price__product")}>
                              {parseInt(item.price).toLocaleString()} VNĐ
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
                        <p className={cx("value")}>: {product.full_name}</p>
                      </li>
                      <li className={cx("item")}>
                        <p className={cx("item__title")}> Số điện thoại </p>
                        <p className={cx("value")}>: {product.phone_number}</p>
                      </li>
                      <li className={cx("item")}>
                        <p className={cx("item__title")}>Địa chỉ </p>
                        <p className={cx("value")}>
                          : {product.delivery_address}
                        </p>
                      </li>
                      <li className={cx("item")}>
                        <p className={cx("item__title")}>Thời gian </p>
                        <p className={cx("value")}>
                          :{" "}
                          {isValid(new Date(product.order_date))
                            ? format(
                                new Date(product.order_date),
                                "hh:mm, dd/MM/yyyy"
                              )
                            : ""}
                        </p>
                      </li>
                      <li className={cx("item")}>
                        <p className={cx("item__title")}>Phương Thức </p>
                        <p className={cx("value")}>
                          : {product.payment_methods}
                        </p>
                      </li>
                      <li className={cx("item")}>
                        <p className={cx("item__title")}>Trạng thái </p>
                        <p className={cx("value", "wait")}>
                          : {product.order_status}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className={cx("box__btn")}>
                    <Button
                      onClick={() => handleClickAccept(product.id)}
                      className={cx("btn", "accept")}
                      text="Chấp Nhận"
                    />
                    <Button
                      onClick={() => handleClickCancel(product.id)}
                      className={cx("btn", "cancel")}
                      text="Huỷ"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={dataBill.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default OrderManagement;
