import { combineReducers } from "redux";
import templateListReducer from "./templateList";

// const templateReducer = combineReducers({list: templateListReducer});
const templateReducer = templateListReducer;
export default templateReducer;
