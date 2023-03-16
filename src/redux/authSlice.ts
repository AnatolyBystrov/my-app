import { createSlice } from "@reduxjs/toolkit";
const initialState: { authUser: string } = {
    authUser: ''
}
const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
reducers: {
    login: (state, data) => {
        state.authUser = data.payload;
    },
    logout: (state) => {
        state.authUser = ''
    }
}
})
export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer
