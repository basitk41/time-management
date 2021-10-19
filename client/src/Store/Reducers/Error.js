import * as constant from "../Constants";
const initialState = {
  error: "",
  loading: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case constant.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
