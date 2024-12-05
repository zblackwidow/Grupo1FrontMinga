import { createAsyncThunk } from "@reduxjs/toolkit";

const getChapters = createAsyncThunk("GET_CHAPTERS", async (token) => {
    try {
        const response = await axios.get(
            "http://localhost:8080/api/chapter/all", {
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

const getChapterById = createAsyncThunk("GET_CHAPTER_BY_ID", async (id, token) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/chapter/id/${id}`, {
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

const createChapter = createAsyncThunk("CREATE_CHAPTER", async (chapter, token) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/chapter", chapter, {
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

const updateChapter = createAsyncThunk("UPDATE_CHAPTER", async (chapter, token) => {
    try {
        const response = await axios.put(
            "http://localhost:8080/api/chapter/update", chapter, {
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

const deleteChapter = createAsyncThunk("DELETE_CHAPTER", async (id, token) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/chapter/delete`, id, {
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


export { getChapters, getChapterById, createChapter, updateChapter, deleteChapter }