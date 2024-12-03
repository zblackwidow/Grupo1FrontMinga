import { createReducer } from "@reduxjs/toolkit";
import { login, validateToken, setUser } from "../actions/authActions";

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(validateToken.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(validateToken.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(validateToken.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
    })

    export default authReducer