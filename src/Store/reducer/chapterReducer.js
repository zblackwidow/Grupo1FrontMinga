import { createReducer } from "@reduxjs/toolkit";
import { getChapters, getChapterById, createChapter, updateChapter, deleteChapter } from "../actions/chapterActions";

const initialState = {
  chapters: [],
  chapter: null,
  error: null,
  loading: false,
};

const chapterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getChapters.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getChapters.fulfilled, (state, action) => {
      state.loading = false;
      state.chapters = action.payload;
    })
    .addCase(getChapters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(getChapterById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getChapterById.fulfilled, (state, action) => {
      state.loading = false;
      state.chapter = action.payload;
    })
    .addCase(getChapterById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(createChapter.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createChapter.fulfilled, (state, action) => {
      state.loading = false;
      state.chapter = action.payload;
    })
    .addCase(createChapter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateChapter.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateChapter.fulfilled, (state, action) => {
      state.loading = false;
      state.chapter = action.payload;
    })
    .addCase(updateChapter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteChapter.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteChapter.fulfilled, (state, action) => {
      state.loading = false;
      state.chapter = action.payload;
    })
    .addCase(deleteChapter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default chapterReducer;
