import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import mangaReducer from "./reducer/mangaReducer";
import userReducer from "./reducer/userReducer";
import authorReducer from "./reducer/authorReducer";
import categoryReducer from "./reducer/categoryReducer";
import chapterReducer from "./reducer/chapterReducer";
import companyReducer from "./reducer/companyReducer";
import reactionReducer from "./reducer/reactionReducer";
import commentReducer from "./reducer/commentReducer";

const addMangas = configureStore({
    reducer: {
        auth: authReducer,
        manga: mangaReducer,
        user: userReducer,
        author: authorReducer,
        category: categoryReducer,
        chapter: chapterReducer,
        company: companyReducer,
        reaction: reactionReducer,
        comment: commentReducer
    },
})

export default addMangas