import { createReducer } from "@reduxjs/toolkit";
import { getMangas, getMangaById, createManga, updateManga, deleteMangaById } from "../actions/mangaActions";

const initialState = {
    mangas: [],
    manga: null,
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
        .addCase(getMangaById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getMangaById.fulfilled, (state, action) => {
            state.loading = false;
            state.manga = action.payload;
        })
        .addCase(getMangaById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createManga.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createManga.fulfilled, (state, action) => {
            state.loading = false;
            state.manga = action.payload;
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