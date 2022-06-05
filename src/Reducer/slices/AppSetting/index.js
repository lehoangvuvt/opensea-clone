import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAppSetting = createAsyncThunk(
    "appSetting/fetchSetting",
    async () => {
        const delayTime = 1000
        const response = await axios({
            url: `https://deelay.me/${delayTime}/jsonplaceholder.typicode.com/todos/1`,
            method: "GET"
        })
        return response.data.completed
    }
)

const initialState = {
    darkMode: false,
    loading: 'idle'
}

const AppSettingSlice = createSlice({
    name: 'APP_SETTING',
    initialState,
    reducers: {
        switchMode(state, action) {
            state.darkMode = !state.darkMode
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAppSetting.pending, (state, action) => {
            state.loading = 'pending'
        })
        .addCase(fetchAppSetting.fulfilled, (state, action) => {
            state.darkMode = action.payload
            state.loading = 'success'
        })
        .addCase(fetchAppSetting.rejected, (state, action) => {
            state.loading = 'failed'
        })
    }
})

const { actions, reducer } = AppSettingSlice
export const { switchMode } = actions
export default reducer