import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Web3Services from "../../../Services/Web3"

const initialState = {
    user: null,
    loading: 'idle'
}

export const loginMetamask = createAsyncThunk(
    'user/signMessage',
    async () => {
        const response = await axios({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET'
        })
        const message = response.data.body
        const data = await Web3Services.signMetamask(message)
        const userData = { sig: data.sig, address: data.address }
        return userData
    }
)

const UserSlice = createSlice({
    name: 'USER',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginMetamask.pending, (state, action) => {
                state.loading = 'pending'
            })
            .addCase(loginMetamask.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = 'success'
            })
            .addCase(loginMetamask.rejected, (state, action) => {
                state.loading = 'failed'
            })
    }
})

const { actions, reducer } = UserSlice
export default reducer