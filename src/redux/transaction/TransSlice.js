import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    trans: [],
    error: {},
    response: {}

}
const transSlice = createSlice({
    name: "trans",
    initialState,
    reducers: {
        requestSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.response = payload;
        },
        requestFailed: (state, { payload }) => {
            state.isLoading = true;
            state.error = payload
        },
        requestPending: (state) => {
            state.isLoading = true
        },
        getTransSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.trans = payload;
        },

    }
})

const { reducer, actions } = transSlice;
export const { requestFailed, requestPending, requestSuccess, getTransSuccess } = actions;
export default reducer;

