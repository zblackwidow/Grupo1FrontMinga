import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Obtener todos los capítulos
const getChapters = createAsyncThunk("GET_CHAPTERS", async ({ token }, thunkAPI) => { // Cambiado para recibir un objeto
    try {
        const response = await axios.get(
            "http://localhost:8080/api/chapter/all", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed");
    }
});

// Obtener un capítulo por ID
const getChapterById = createAsyncThunk("GET_CHAPTER_BY_ID_", async ({ id, token }, thunkAPI) => { // Cambiado para recibir un objeto
    try {
        const response = await axios.get(
            `http://localhost:8080/api/chapter/id/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("Respuesta del servidor:", response.data);  // Verifica qué datos te está devolviendo el servidor
        return response.data;
    } catch (error) {
        console.error("Error en la solicitud:", error.response?.status, error.response?.data);
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed");
    }
});


// Obtener un capítulo por IDManga
const getChapterByMangaId = createAsyncThunk("GET_CHAPTER_BY_MANGA_ID", async ({ id, token }, thunkAPI) => { // Cambiado para recibir un objeto
    try {
        const response = await axios.get(
            `http://localhost:8080/api/chapter/idManga/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("Respuesta del servidor:", response.data);  // Verifica qué datos te está devolviendo el servidor
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed");
    }
});

// Crear un capítulo
const createChapter = createAsyncThunk("CREATE_CHAPTER", async ({ chapter, token }, thunkAPI) => { // Cambiado para recibir un objeto
    try {
        const response = await axios.post(
            "http://localhost:8080/api/chapter", chapter, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed");
    }
});

// Actualizar un capítulo
const updateChapter = createAsyncThunk("UPDATE_CHAPTER", async ({ chapter, token }, thunkAPI) => { // Cambiado para recibir un objeto
    try {
        const response = await axios.put(
            "http://localhost:8080/api/chapter/update", chapter, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed");
    }
});

// Eliminar un capítulo
const deleteChapter = createAsyncThunk("DELETE_CHAPTER", async ({ id, token }, thunkAPI) => { // Cambiado para recibir un objeto
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/chapter/delete`, { data: { id } }, { // Cambié la forma en que envías el id
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Token validation failed");
    }
});

export { getChapters, getChapterById, getChapterByMangaId, createChapter, updateChapter, deleteChapter };
