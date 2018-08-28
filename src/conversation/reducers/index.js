import { combineReducers } from "redux";
import groupReducer from "./group";

const createConversationReducer = combineReducers({
  group: groupReducer
});

export default createConversationReducer;