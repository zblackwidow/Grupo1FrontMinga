import { createReducer } from "@reduxjs/toolkit";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../actions/categoryActions";

const initialState = {
    categories: [],
    category: null,
    error: null,
    loading: false,
};

const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getCategoryById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCategoryById.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;
        })
        .addCase(getCategoryById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;
        })
        .addCase(createCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;
        })
        .addCase(updateCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;
        })
        .addCase(deleteCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    })

export default categoryReducer;