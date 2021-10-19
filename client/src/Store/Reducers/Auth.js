import * as constant from "../Constants";
const initialState = {
  token: "",
  isAuth: false,
  userId: "",
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.LOGIN:
      return {
        ...state,
        tokon: action.token,
        isAuth: true,
        userId: action.userId,
      };
    case constant.LOGOUT:
      return {
        ...state,
        tokon: "",
        isAuth: false,
        userId: "",
      };
    default:
      return state;
  }
};
export default Reducer;
