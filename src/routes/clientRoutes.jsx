import { Route, useNavigate } from "react-router-dom";

const ClientRoute = ({ children, authCheck, redirectPath = "/login" }) => {
  const navigate = useNavigate();

  const checkAuth = () => {
    if (authCheck) {
      return children;
    } else {
      alert("you need login");
      navigate(redirectPath);
      return null;
    }
  };

  return <Route path="" element={checkAuth()} />;
};

export default ClientRoute;
