import Api from "../../Services/Api";
import * as constant from "../Constants";
import { setError, loading } from "../Actions";
export const setAuth = (data) => {
  localStorage.setItem("token", data.token);
  return {
    type: constant.LOGIN,
    token: data.token,
    userId: data.user.id,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: constant.LOGOUT,
  };
};
export const login = (credentials, push) => {
  return (dispatch) => {
    dispatch(loading(true));
    Api.post("/auth/login", credentials)
      .then((res) => {
        dispatch(setAuth(res.data), loading(false), push("/dashboard"));
      })
      .catch((err) => dispatch(setError(err), loading(false)));
  };
};
export const register = (data) => {
  return (dispatch) => {
    dispatch(loading(true));
    Api.get("/data")
      .then((res) => res.data)
      .catch((err) => dispatch(setError(err), loading(false)));
  };
};
