import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppReducer from './slices/AppSetting'
import UserReducer from './slices/User'

const rootReducer = combineReducers({
    APP_SETTING: AppReducer,
    USER: UserReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store