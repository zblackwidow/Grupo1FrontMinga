import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getReactions = createAsyncThunk("GET_REACTIONS", async (token) => {
    try {
        const response = await axios.get(
            "http://localhost:8080/api/reaction/all", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data.response
    } catch (error) {
        return error.response?.data?.message || "Token validation failed"
        
    }
})

const getReactionById = createAsyncThunk("GET_REACTION_BY_ID", async (id, token) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/reaction/id/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "Token validation failed"
        
    }
})

const createReaction = createAsyncThunk("CREATE_REACTION", async (reaction, token) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/reaction/create", reaction, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "Token validation failed"
        
    }
})

const updateReaction = createAsyncThunk("UPDATE_REACTION", async (reaction, token) => {
    try {
        const response = await axios.put(
            "http://localhost:8080/api/reaction/update", reaction, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "Token validation failed"
        
    }
})

const deleteReaction = createAsyncThunk("DELETE_REACTION", async (id, token) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/reaction/delete`, id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "Token validation failed"
        
    }
})

export { getReactions, getReactionById, createReaction, updateReaction, deleteReaction }