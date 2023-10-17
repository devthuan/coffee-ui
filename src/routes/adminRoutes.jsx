import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromLocalStorage } from "../validations/validations";

const AdminRoute = (props) => {
  const dispatch = useDispatch();
  const dataToken = useSelector((state) => state.token.data);
  const token = localStorage.getItem("token") || dataToken;
  const permission = JSON.parse(token).value[1];
  console.log(permission);
  useEffect(() => {
    dispatch(getTokenFromLocalStorage());
  }, [dispatch]);

  if (token.length === 0 || permission === "true") {
    alert("your account not admin");
    return <Navigate to="/login" />;
  } else {
    return <>{props.children}</>;
  }
};

export default AdminRoute;
