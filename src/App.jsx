import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { publicRoutes, privateRoutes } from "./routes/routes";
import { getTokenFromLocalStorage } from "./validations/validations";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const dataToken = useSelector((state) => state.token.data);
  const token = localStorage.getItem("token") || dataToken;

  useEffect(() => {
    dispatch(getTokenFromLocalStorage());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            }

            if (token.length === 0) {
              // Hiển thị thông báo khi người dùng chưa đăng nhập và truy cập tuyến đường riêng tư
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Navigate to="/login" replace={true} />}
                />
              );
            }
            // Nếu người dùng đã đăng nhập, hiển thị tuyến đường riêng tư
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
