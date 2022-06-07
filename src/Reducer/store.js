import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppReducer from './slices/AppSetting'
import MetamaskReducer from "./slices/Metamask";
import UserReducer from './slices/User'

const rootReducer = combineReducers({
    METAMASK: MetamaskReducer,
    APP_SETTING: AppReducer,
    USER: UserReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store