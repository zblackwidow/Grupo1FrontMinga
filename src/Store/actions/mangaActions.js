import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setSearch = createAction("SET_SEARCH");
export const getMangas = createAsyncThunk("GET_MANGAS", async (search) => {
    const response = await axios.get(
        `http://localhost:8080/api/manga/all?search=${search}`
    )
    return response.data.response
    
})

export const getMangaById = createAction("GET_MANGA_BY_ID")
export const getManga = createAsyncThunk("GET_MANGA", async (id, token, thunkAPI) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/manga/id/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem("userManga")
    }
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed")
    }
})

export const getMangasByAuthor = createAsyncThunk(
    "GET_MANGAS_BY_AUTHOR",
    async ({ author_id, token }, thunkAPI) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/manga/mangasByAuthor?author=${author_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
         
          }
        );
        return response.data.response;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "No mangas found"
        );
      }
    }
  );
  

export const getMangasByCategory = createAsyncThunk("GET_MANGAS_BY_CATEGORY", async (id, token, thunkAPI) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/manga/mangasByCategory`, id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data.response
    } catch (error) {
       console.log(error);
       
    return thunkAPI.rejectWithValue(error.response?.data?.message || "No mangas found")
    }
})

export const createManga = createAsyncThunk("CREATE_MANGA", async (manga, token, thunkAPI) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/manga`, manga, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem("userManga")
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed")
    } else {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Manga creation failed")
    }
    }
})

export const updateManga = createAsyncThunk("UPDATE_MANGA", async (manga, token, thunkAPI) => {
    try {
        const response = await axios.put(
            `http://localhost:8080/api/manga/update`, manga, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem("userManga")
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed")
    } else {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Manga update failed")
    }
    }
})

export const deleteMangaById = createAsyncThunk(
  "DELETE_MANGA_BY_ID",
  async ( mangaId, token,  thunkAPI) => {
    try {
      const url = `http://localhost:8080/api/manga/delete`;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.delete(url, {
        data:  mangaId ,
        headers,
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("userManga");
        return thunkAPI.rejectWithValue({
          error: "Token de autorización inválido",
          message: error.response?.data?.message,
        });
      } else {
        return thunkAPI.rejectWithValue({
          error: "Error al eliminar el manga",
          message: error.response?.data?.message,
        });
      }
    }
  }
);

