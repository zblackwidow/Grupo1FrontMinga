import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("auth/sagnIn", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/signIn",
      credentials
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Login failed"
    );
  }
});

const validateToken = createAsyncThunk(
  "auth/validateToken",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/auth/validateToken",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
      
      if (error.status === 401) {
        localStorage.removeItem("userManga");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Token validation failed"
      );
    }
  }
);

export { login, validateToken }; 