import { createReducer } from "@reduxjs/toolkit";
import { getMangas, getManga, createManga, updateManga, setSearch, deleteMangaById } from "../actions/mangaActions";

const initialState = {
    mangas: [],
    search: "",
    manga: [],
    error: null,
    loading: false,
};

const mangaReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getMangas.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getMangas.fulfilled, (state, action) => {
            state.loading = false;
            state.mangas = action.payload;
        })
        .addCase(getMangas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(setSearch, (state, action) => {
            state.search = action.payload;
        })
        .addCase(getManga.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getManga.fulfilled, (state, action) => {
            state.loading = false;
            state.manga = action.payload;
        })
        .addCase(getManga.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createManga.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createManga.fulfilled, (state, action) => {
            state.loading = false;
            state.mangas = action.payload;
        })
        .addCase(createManga.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateManga.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateManga.fulfilled, (state, action) => {
            state.loading = false;
            state.manga = action.payload;
        })
        .addCase(updateManga.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteMangaById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteMangaById.fulfilled, (state, action) => {
            state.loading = false;
            state.manga = action.payload;
        })
        .addCase(deleteMangaById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    })

    export default mangaReducer