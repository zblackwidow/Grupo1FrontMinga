import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUser = createAction("SET_USER", (data) => {
    return {
      payload: data,
    };
  });

  const getUser = createAsyncThunk("GET_USER", async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/user/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.response?.data?.message || "Token validation failed";
    }
  });   

  const getUserById = createAsyncThunk("GET_USER_BY_ID", async (id, token) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/id/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.response?.data?.message || "Token validation failed";
    }
  });

  const createUser = createAsyncThunk("CREATE_USER", async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/create",
        user
      );
      return response.data;
    } catch (error) {
      return error.response?.data?.message || "User creation failed";
    }
  });

  const updateUser = createAsyncThunk("UPDATE_USER", async (user, token) => {
    try {
        const response = await axios.put(
            "http://localhost:8080/api/user/update",user,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "User update failed"
        
    }
  })

  const deleteUser = createAsyncThunk("DELETE_USER", async (id, token) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/user/destroy`,id,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        return error.response?.data?.message || "User delete failed"
        
    }
  })

  export {setUser, getUser, getUserById, createUser, updateUser, deleteUser}