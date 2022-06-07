import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    address: null,
    chainInfo: null,
}

const metamaskSlice = createSlice({
    name: 'METAMASK',
    initialState,
    reducers: {
        addChain(state, action){
            state.chainInfo = action.payload
        },
        addAddress(state, action) {
            state.address = action.payload
        }
    }
})

const { actions, reducer } = metamaskSlice
export const { addAddress, addChain } = actions
export default reducer