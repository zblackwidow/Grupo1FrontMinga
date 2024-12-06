import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCompanies = createAsyncThunk("GET_COMPANIES", async (token) => {
    try {
        const response = await axios.get(
            "http://localhost:8080/api/company/all", {
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

const getCompanyById = createAsyncThunk("GET_COMPANY_BY_ID", async (id, token) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/company/id/${id}`, {
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

const createCompany = createAsyncThunk("CREATE_COMPANY", async (company, token) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/company/create", company, {
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

const updateCompany = createAsyncThunk("UPDATE_COMPANY", async (company, token) => {
    try {
        const response = await axios.put(
            `http://localhost:8080/api/company/update/${company.id}`, company, {
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

const deleteCompany = createAsyncThunk("DELETE_COMPANY", async (id, token) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/company/delete/${id}`, {
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

export { getCompanies, getCompanyById, createCompany, updateCompany, deleteCompany }