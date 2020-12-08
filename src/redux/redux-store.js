import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import loginPageReducer from "./loginPage-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    loginPage:loginPageReducer
});

let store = createStore(reducers);

export default store