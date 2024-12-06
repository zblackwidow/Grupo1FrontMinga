import { createReducer } from "@reduxjs/toolkit";
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from "../actions/authorActions";

const initialState = {
    authors: [],
    token: null,
    error: null,
    loading: false,
};

const authorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getAuthors.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAuthors.fulfilled, (state, action) => {
            state.loading = false;
            state.authors = action.payload;
        })
        .addCase(getAuthors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getAuthorById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAuthorById.fulfilled, (state, action) => {
            state.loading = false;
            state.authors = action.payload;
        })
        .addCase(getAuthorById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createAuthor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createAuthor.fulfilled, (state, action) => {
            state.loading = false;
            state.authors = action.payload;
        })
        .addCase(createAuthor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateAuthor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateAuthor.fulfilled, (state, action) => {
            state.loading = false;
            state.authors = action.payload;
        })
        .addCase(updateAuthor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteAuthor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteAuthor.fulfilled, (state, action) => {
            state.loading = false;
            state.authors = action.payload;
        })
        .addCase(deleteAuthor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
});

export default authorReducer;