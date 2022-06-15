import { combineReducers } from "redux";
import Contract from "./Contract";
import Update from "./Update";
const allReducers=combineReducers({
Contract,
Update
});

export default allReducers;