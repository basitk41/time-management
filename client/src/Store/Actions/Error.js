import * as constant from "../Constants";
export const setError = (error) => {
  return {
    type: constant.ERROR,
    payload: error,
  };
};
export const loading = (bool) => {
  return {
    type: constant.LOADING,
    payload: bool,
  };
};
