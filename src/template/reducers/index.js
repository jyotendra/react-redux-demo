import { combineReducers } from "redux";
import templateListReducer from "./templateList";

const templateReducer = combineReducers(templateListReducer);

export default templateReducer;
