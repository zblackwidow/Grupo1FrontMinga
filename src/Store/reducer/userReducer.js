import { createReducer } from "@reduxjs/toolkit";
import { getUser, getUserById, updateUser, deleteUser, createUser, setUser } from "../actions/userActions";

const initialState = {
    user: [],
    token: null,
    error: null,
    loading: false,
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getUserById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(getUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
});

export default userReducer;