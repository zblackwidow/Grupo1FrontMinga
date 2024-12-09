import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChapterByMangaId } from "../Store/actions/chapterActions"; // Acción para obtener el capítulo
import MangaChapter from "../Components/Manga/MangaChapter"; // El componente donde muestras las imágenes

const MangaChapterPage = () => {
    const { id } = useParams(); // Obtener el ID del capítulo desde la URL
    const dispatch = useDispatch();
    
  
    const { chapter, loading, error } = useSelector((state) => state.chapter); 
  
    console.log("Chapter:", chapter);
    
 
  
    
   const dataUser = JSON.parse(localStorage.getItem("userManga"));
   const token = dataUser.token;
    console.log(token)
    useEffect(() => {
      if (id && token) {
        console.log("Despatching action to get chapter:", id);
        dispatch(getChapterByMangaId({ id, token }));
      }
    }, [dispatch, id, token]); // Asegúrate de que estos valores sean los correctos
  
    if (loading) {
      return <div className="text-xl">Cargando capítulo...</div>;
    }
  
    if (error) {
      return <div className="text-red-500">Error: {error}</div>;
    }
  
   
    return (
      <MangaChapter
        images={chapter.pages}
        onReaction={(reaction) => console.log(`Reacción: ${reaction}`)}
        onComment={(comment) => console.log(`Comentario: ${comment}`)}
      />
    );
  };
  
  export default MangaChapterPage;
  
