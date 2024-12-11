import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAuthors = createAsyncThunk("GET_AUTHORS", async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/author/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.response;
  } catch (error) {
    return error.response?.data?.message || "Token validation failed";
  }
});

const getAuthorById = createAsyncThunk(
  "GET_AUTHOR_BY_ID",
  async ({id, token}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/author/id/${id}`,
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
  }
);

const getAuthorByUserId = createAsyncThunk(
  "GET_AUTHOR_BY_USER_ID",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/author/idUser/${id}`,
       
      );
      return response.data;
    } catch (error) {
      return error.response?.data || "Token validation failed";
    }
  }
);
const createAuthor = createAsyncThunk(
  "CREATE_AUTHOR",
  async (author, token) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/author/create",
        author,
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
  }
);

const updateAuthor = createAsyncThunk(
  "UPDATE_AUTHOR",
  async ({ author, token }) => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/author/update",
        author,
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
  }
);

const deleteAuthor = createAsyncThunk("DELETE_AUTHOR", async (id, token) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/author/delete`,
      id,
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

export { getAuthors, getAuthorById, getAuthorByUserId, createAuthor, updateAuthor, deleteAuthor };
