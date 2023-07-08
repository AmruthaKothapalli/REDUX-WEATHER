import { applyMiddleware, createStore } from "redux";
import { CommonReducer } from "../reducer/CommonReducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);
export const store = createStore(CommonReducer, middleware);
