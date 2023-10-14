import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { format, isValid } from "date-fns";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, addUser } from "../../redux/features/user/userSlice";
import { useEffect, useMemo } from "react";
import { GetUser } from "../../services/UseServices";

const cx = classNames.bind(styles);

const User = () => {
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.data);
  const memoizedUserData = useMemo(() => listUser, [listUser]);

  const handleClickDelete = (id) => {
    dispatch(removeUser(id));
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await GetUser(1);
        if (res && res.status === 200 && res.data.data) {
          const userData = res.data.data;
          userData.map((item) => dispatch(addUser(item)));
        }
      } catch (error) {
        console.error("Có lỗi xảy ra:", error);
      }
    };
    if (!memoizedUserData.length) {
      fetchAPI();
    }
  }, [dispatch, memoizedUserData]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Title className={cx("title")} text="Statistical User" />
        <div className={cx("box__table")}>
          {listUser && listUser.length > 0 ? (
            <table className={cx("table")}>
              <tbody>
                <tr className={cx("group__title")}>
                  <th className={cx("title__text")}>STT</th>
                  <th className={cx("title__text")}>Tài khoản</th>
                  <th className={cx("title__text")}>số điện thoại</th>
                  <th className={cx("title__text")}>Địa chỉ</th>
                  <th className={cx("title__text")}>Quyền</th>
                  <th className={cx("title__text")}>Trạng thái</th>

                  <th className={cx("title__text")}>Ngày tạo</th>
                  <th className={cx("title__text")}>Thao tác</th>
                </tr>
                {listUser.map((user, index) => {
                  return (
                    <tr key={index} className={cx("group__row")}>
                      <td className={cx("item")}>{user.id}</td>
                      <td className={cx("item")}>{user.full_name}</td>
                      <td className={cx("item")}>{user.phone_number}</td>
                      <td className={cx("item")}>{user.address}</td>
                      <td className={cx("item")}>
                        {user.is_staff === "true" ? "Admin" : "Client"}
                      </td>
                      <td className={cx("item")}>
                        {user.is_active === 1 ? "Active" : "Blocked"}
                      </td>
                      <td className={cx("item")}>
                        {isValid(new Date(user.created_date))
                          ? format(
                              new Date(user.created_date),
                              "hh:mm, dd/MM/yyyy"
                            )
                          : ""}
                      </td>

                      <td className={cx("item")}>
                        <Button className={cx("btn", "update")} text="sửa" />
                        <Button
                          onClick={() => handleClickDelete(user.id)}
                          className={cx("btn", "delete")}
                          text="xoá"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <Title
              className={cx("title")}
              text="No users registered for an account..."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
