import { createStore } from "redux";
import allReducers from "../Reducers/index";


let Store=createStore(allReducers);
export default Store;