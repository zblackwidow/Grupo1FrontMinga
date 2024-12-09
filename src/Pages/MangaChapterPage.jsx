import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChapterByMangaId } from "../Store/actions/chapterActions"; // Acción para obtener el capítulo
import MangaChapter from "../Components/Manga/MangaChapter"; // El componente donde muestras las imágenes

const MangaChapterPage = () => {
    const { id } = useParams(); // Obtener el ID del capítulo desde la URL
    const dispatch = useDispatch();
    
  
    const chapter = useSelector((state) => state.chapter.chapter); // Acceder al capítulo desde el estado
    const loading = useSelector((state) => state.chapter.loading);
    const error = useSelector((state) => state.chapter.error);
  
    console.log("Chapter:", chapter);
    
    const [token, setToken] = useState(null); // Inicializar con null
  
    // Recuperar el token del localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem("userManga");
        if (savedUser) {
          const userObject = JSON.parse(savedUser);  // Convierte el objeto guardado a un objeto JavaScript
          const token = userObject.token;  // Accede solo al token
          setToken(token);  // Establece el token en el estado local
          console.log("Token recuperado:", token);  // Verifica si el token se recupera correctamente
        }
      }, []); // Solo se ejecuta cuando el componente se monta
    useEffect(() => {
      if (id && token) {
        console.log("Despatching action to get chapter:", id);
        dispatch(getChapterByMangaId({ id, token }));
      }
    }, [dispatch, id, token]); // Asegúrate de que estos valores sean los correctos
  
    if (loading) {
      return <div className="text-white">Cargando capítulo...</div>;
    }
  
    if (error) {
      return <div className="text-red-500">Error: {error}</div>;
    }
  
    if (!chapter || !chapter.pages || chapter.pages.length === 0) {
      return <div className="text-white">Este capítulo no tiene páginas disponibles.</div>;
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
  
