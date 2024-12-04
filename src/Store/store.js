import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./recuder/authReducer";
import mangaReducer from "./recuder/mangaReducer";
import userReducer from "./recuder/userReducer";
import authorReducer from "./recuder/authorReducer";
import categoryReducer from "./recuder/categoryReducer";

const mangas = configureStore({
    reducer: {
        auth: authReducer,
        manga: mangaReducer,
        user: userReducer,
        author: authorReducer,
        category: categoryReducer
    },
})

export default mangas