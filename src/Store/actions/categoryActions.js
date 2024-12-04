import { createAsyncThunk } from "@reduxjs/toolkit";

const getCategories = createAsyncThunk("GET_CATEGORIES", async (token) => {
    try {
        const response = await axios.get(
            "http://localhost:8080/api/category/all", {
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

const getCategoryById = createAsyncThunk("GET_CATEGORY_BY_ID", async (id, token) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/category/id/${id}`, {
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

const createCategory = createAsyncThunk("CREATE_CATEGORY", async (category, token) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/category/create", category, {
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

const updateCategory = createAsyncThunk("UPDATE_CATEGORY", async (category, token) => {
    try {
        const response = await axios.put(
            "http://localhost:8080/api/category/update", category, {
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

const deleteCategory = createAsyncThunk("DELETE_CATEGORY", async (id, token) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/category/delete`, id, {
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

export { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory }