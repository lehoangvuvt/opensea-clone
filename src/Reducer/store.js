import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppReducer from './slices/AppSetting'

const rootReducer = combineReducers({
    APP_SETTING: AppReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store