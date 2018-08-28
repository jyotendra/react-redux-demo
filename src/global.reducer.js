import { combineReducers } from "redux";
import createConversationReducer from "./conversation/reducers";
import templateReducer from "./template/reducers";

const appReducer = combineReducers({
  conversation: createConversationReducer,
  template: templateReducer
});

export default appReducer;
