import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  let isAuth = localStorage.getItem("token");
  isAuth = isAuth === "undefined" ? undefined : isAuth;
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
