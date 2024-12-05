import { createReducer } from "@reduxjs/toolkit";
import { getCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from "../actions/companyActions";

const initialState = {
    companies: [],
    company: null,
    error: null,
    loading: false,
};

const companyReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCompanies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCompanies.fulfilled, (state, action) => {
            state.loading = false;
            state.companies = action.payload;
        })
        .addCase(getCompanies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getCompanyById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCompanyById.fulfilled, (state, action) => {
            state.loading = false;
            state.company = action.payload;
        })
        .addCase(getCompanyById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createCompany.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.company = action.payload;
        })
        .addCase(createCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.company = action.payload;
        })
        .addCase(updateCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteCompany.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.company = action.payload;
        })
        .addCase(deleteCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default companyReducer;