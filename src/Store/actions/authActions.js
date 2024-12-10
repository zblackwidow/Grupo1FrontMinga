import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

const logout = createAction('logout')

const login = createAsyncThunk('login', async ({ email, password }) => {
    console.log('Entramos al Login')
    const credentials = {
        email: email,
        password: password,
    }
    const response = await axios.post('http://localhost:8080/api/auth/signIn', credentials)
    console.log(response)
    console.log('Se proceso la solicitud')
    console.log('Response', response.data)
    console.log('Superamos la solicitud de Login')
    if (response.data.success) {
        localStorage.setItem('userManga', JSON.stringify(response.data))
    }
    localStorage.setItem('token', response.data.token)
    return response.data
})

const validateToken = createAsyncThunk('auth/validateToken', async (token, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:8080/api/auth/validateToken', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data
    } catch (error) {
        console.log(error)

        if (error.status === 401) {
            localStorage.removeItem('userManga')
        }
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Token validation failed')
    }
})

export { login, validateToken, logout }
