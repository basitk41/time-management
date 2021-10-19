import { combineReducers } from "redux";
import Error from "./Error";
import Auth from "./Auth";
import User from "./User";
const rootReducer = combineReducers({ Error, Auth, User });
export default rootReducer;
