import { createReducer } from "@reduxjs/toolkit";
import { getComments, getCommentById, createComment, updateComment, deleteComment } from "../actions/commentActions";

const initialState = {
    comments: [],
    comment: null,
    error: null,
    loading: false,
};

const commentReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getComments.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        })
        .addCase(getComments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getCommentById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCommentById.fulfilled, (state, action) => {
            state.loading = false;
            state.comment = action.payload;
        })
        .addCase(getCommentById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comment = action.payload;
        })
        .addCase(createComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        })
        .addCase(updateComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comment = action.payload;
        })
        .addCase(updateComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comment = action.payload;
        })
        .addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
});

export default commentReducer;