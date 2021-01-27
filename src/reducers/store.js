import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import gestoresReducer from "./gestoresReducer";

const mainReducer = combineReducers({ gestores: gestoresReducer });

export default createStore(mainReducer, applyMiddleware(thunk));
