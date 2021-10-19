import * as constant from "../Constants";
const initialState = {
  users: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SETUSERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
export default Reducer;
