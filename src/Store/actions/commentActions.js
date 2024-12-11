import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getComments = createAsyncThunk("GET_COMMENTS", async (token) => {
    try {
        const response = await axios.get(
            "http://localhost:8080/api/comment/all", {
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

const getCommentById = createAsyncThunk("GET_COMMENT_BY_ID", async (id, token) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/comment/id/${id}`, {
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

const getCommentsByChapterId = createAsyncThunk("GET_COMMENTS_BY_CHAPTER_ID", async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/comment/commentByChapterId/${id}`
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "Token validation failed"
        
    }
    
})

const createComment = createAsyncThunk("CREATE_COMMENT", async (comment) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/comment/create", comment, {
                
            }
        )
        return response.data
    } catch (error) {
        console.log(error);
        
        return error.response?.data?.message || "Token validation failed"
        
    }
})

const updateComment = createAsyncThunk("UPDATE_COMMENT", async (comment, token) => {
    try {
        const response = await axios.put(
            "http://localhost:8080/api/comment/update", comment, {
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

const deleteComment = createAsyncThunk("DELETE_COMMENT", async (id) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/comment/destroy/${id}`, {
                
            }
        )
        return response.data
    } catch (error) {
        console.log(error.response.data);
        
        return error.response?.data?.message || "Token validation failed"
        
    }
})

export { getComments, getCommentById, createComment, updateComment, deleteComment, getCommentsByChapterId }