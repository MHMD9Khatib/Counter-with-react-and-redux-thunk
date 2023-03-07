import { combineReducers } from "redux";
import { reducer } from "./accountReducer";

export const reducers = combineReducers({
    account: reducer
});