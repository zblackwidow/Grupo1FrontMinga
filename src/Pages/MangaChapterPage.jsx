import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChapterByMangaId } from "../Store/actions/chapterActions";
import MangaChapter from "../Components/Manga/MangaChapter";
import CommentSection from "../Components/Manga/Comment";

const MangaChapterPage = () => {
    const { id } = useParams(); // Obtener el ID del capítulo desde la URL
    const dispatch = useDispatch();


    
  
    const { chapter, loading, error } = useSelector((state) => state.chapter); 
  
    console.log("Chapter:", chapter);
    
 
  
    
   const dataUser = JSON.parse(localStorage.getItem("userManga"));
   const token = dataUser.token;
    console.log(token)
    useEffect(() => {
        // Despachar la acción para obtener el capítulo cuando se tenga el token e ID
        if (id && token) {
            dispatch(getChapterByMangaId({ id, token }));
        }
    }, [dispatch, id, token]);

    useEffect(() => {
        // Log para depurar el estado del capítulo
        console.log("Estado del capítulo en Redux:", chapter);
    }, [chapter]);

    if (loading) {
     
      return <div className="text-xl">Cargando capítulo...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    // Validación ajustada para manejar la estructura de los datos
    const pages = chapter?.response?.[0]?.pages || [];

    if (!Array.isArray(pages) || pages.length === 0) {
        console.warn("No hay páginas disponibles para este capítulo.");
        return <div className="text-white">Este capítulo no tiene páginas disponibles.</div>;
    }

  
   
    return (
      <div>
          <MangaChapter
            images={pages}
            onReaction={(reaction) => console.log(`Reacción: ${reaction}`)}
        />
        <CommentSection />
      </div>
      
        
    );
};

export default MangaChapterPage;
