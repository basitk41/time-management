import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import * as Cmp from "./Components";
const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Cmp.Login} />
      <Route path="/register" component={Cmp.Register} />
      <ProtectedRoute path="/dashboard" component={Cmp.Dashboard} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

export default Routes;
