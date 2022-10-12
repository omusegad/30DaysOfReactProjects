import { counterReducer } from "./counter";
import { loggedInReducer } from "./isLoggedIn";
import { combineReducers } from "./redux";

export const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedInReducer

})