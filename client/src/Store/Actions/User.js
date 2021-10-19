import Api from "../../Services/Api";
import * as constant from "../Constants";
import { setError, loading } from "../Actions";
export const setUsers = (users) => {
  return {
    type: constant.SETUSERS,
    users,
  };
};
export const getUsers = () => {
  return (dispatch) => {
    dispatch(loading(true));
    Api.get("/data")
      .then((res) => dispatch(setUsers(res.data), loading(false)))
      .catch((err) => dispatch(setError(err), loading(false)));
  };
};
