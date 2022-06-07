import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Web3Services from "../../../Services/Web3"

const initialState = {
    user: null,
    loading: 'idle'
}

export const loginMetamask = createAsyncThunk(
    'user/signMessage',
    async (address) => {
        const getMessageResponse = await axios({
            url: `https://api-twon.herokuapp.com/users/getMessageHash/${address}`,
            method: 'GET'
        })
        const message = getMessageResponse.data.message
        const sig = await Web3Services.signMetamask(message)
        const signInBody = {
            signature: sig
        }
        const signInWithSigResponse = await axios({
            url: `https://api-twon.herokuapp.com/auth/sign-in-with-signature`,
            method: 'POST',
            data: signInBody
        })
        console.log(signInWithSigResponse.data)
        return { sig }
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