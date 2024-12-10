import { createReducer } from "@reduxjs/toolkit";
import { getReactions, getReactionById, createReaction, updateReaction, deleteReaction } from "../actions/reactionActions";

const initialState = {
    reactions: [],
    reaction: null,
    error: null,
    loading: false,
};

const reactionReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getReactions.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getReactions.fulfilled, (state, action) => {
            state.loading = false;
            state.reactions = action.payload;
        })
        .addCase(getReactions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getReactionById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getReactionById.fulfilled, (state, action) => {
            state.loading = false;
            state.reaction = action.payload;
        })
        .addCase(getReactionById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createReaction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createReaction.fulfilled, (state, action) => {
            state.loading = false;
            state.reaction = action.payload;
            state.reactions.push(action.payload);
        })
        .addCase(createReaction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateReaction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateReaction.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.reactions.findIndex(
              (reaction) => reaction.id === action.payload.id
            );
            if (index !== -1) {
              state.reactions[index] = action.payload; // Actualizar la reacción existente
            }
          })
        .addCase(updateReaction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteReaction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteReaction.fulfilled, (state, action) => {
            state.loading = false;
            state.reaction = action.payload;
        })
        .addCase(deleteReaction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default reactionReducer;