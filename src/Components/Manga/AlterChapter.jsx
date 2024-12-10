import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChapterByMangaId } from "../Store/actions/chapterActions";
import MangaChapter from "../Components/Manga/MangaChapter";

const MangaChapterPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const chapter = useSelector((state) => state.chapter.chapter);
    const loading = useSelector((state) => state.chapter.loading);
    const error = useSelector((state) => state.chapter.error);

    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("userManga");
        if (savedUser) {
            const userObject = JSON.parse(savedUser);
            setToken(userObject.token);
        }
    }, []);

    useEffect(() => {
        if (id && token) {
            dispatch(getChapterByMangaId({ id, token }));
        }
    }, [dispatch, id, token]);

    useEffect(() => {
        console.log("Estado del capítulo en Redux:", chapter);
        console.log("Datos de chapter.response:", chapter?.response);
    }, [chapter]);

    if (loading) {
        return <div className="text-white">Cargando capítulo...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    const pages = chapter?.response?.[0]?.pages || [];
    const chapters = Array.isArray(chapter?.response)
        ? chapter.response
            .filter((c) => c.order && c._id)
            .map((c) => ({
                chapterNumber: c.order,
                id: c._id,
            }))
        : [];

    console.log("Chapters procesados:", chapters);

    return (
      <MangaChapter
      images={pages}
      chapters={(chapter?.response || []).map((c) => ({
        chapterNumber: c.order,
        id: c._id,
      }))}
    />)
};

export default MangaChapterPage;