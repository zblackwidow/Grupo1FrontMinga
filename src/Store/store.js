import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./recuder/authReducer";

const mangas = configureStore({
    reducer: {
        auth: authReducer,
    },
})

export default mangas