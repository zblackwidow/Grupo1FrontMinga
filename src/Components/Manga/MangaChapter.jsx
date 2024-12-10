import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

const MangaChapter = ({ images = [], chapters = [] }) => {
  console.log("Props recibidas en MangaChapter:", { images, chapters });
  const [showComments, setShowComments] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showChapterList, setShowChapterList] = useState(false);

  const Navigate=useNavigate();


  const processedChapters = chapters || []; // Garantiza que siempre sea un array


console.log("Processed Chapters:", processedChapters);

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === images.length - 1;

  const goToNextPage = () => {
    if (currentPage < images.length - 1) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (!isFirstPage) setCurrentPage(currentPage - 1);
  };

  const handleChapterSelect = (chapterId) => {
    Navigate(`/chapters/${chapterId}`);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-4">
      <header className="w-full flex justify-center top-8 py-8 mb-4 ">
        <h1 className="text-2xl font-bold">Capítulo de Manga</h1>
        <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
          Volver al inicio
        </button>
      </header>

      {/* Contenedor del visor */}
      <div className="relative w-full max-w-3xl bg-black border border-gray-700 rounded overflow-hidden">
        {images.length > 0 ? (
          <>
            <img
              src={images[currentPage]}
              alt={`Página ${currentPage + 1}`}
              className="w-full h-auto"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
              <button
                onClick={goToPreviousPage}
                disabled={isFirstPage}
                className={`px-4 py-2 bg-transparent rounded ${
                  isFirstPage ? "opacity-50 cursor-not-allowed" : "hover:bg-[#f97316]"
                }`}

              >
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7485 9C13.3008 9 13.7485 8.55228 13.7485 8C13.7485 7.44772 13.3008 7 12.7485 7V9ZM0.292794 7.29289C-0.0977306 7.68342 -0.0977306 8.31658 0.292794 8.70711L6.65675 15.0711C7.04728 15.4616 7.68044 15.4616 8.07097 15.0711C8.46149 14.6805 8.46149 14.0474 8.07097 13.6569L2.41411 8L8.07097 2.34315C8.46149 1.95262 8.46149 1.31946 8.07097 0.928932C7.68044 0.538408 7.04728 0.538408 6.65675 0.928932L0.292794 7.29289ZM12.7485 7L0.999901 7V9L12.7485 9V7Z" fill="#424242"/>
                </svg>

              </button>
              <button
                onClick={goToNextPage}
                disabled={isLastPage}
                className={`px-4 py-2 bg-transparent rounded ${
                  isLastPage ? "opacity-50 cursor-not-allowed" : "hover:bg-[#f97316]"
                }`}
              >
                {/* Flecha hacia adelante */}
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25146 9C0.69918 9 0.251465 8.55228 0.251465 8C0.251465 7.44772 0.69918 7 1.25146 7V9ZM13.7072 7.29289C14.0977 7.68342 14.0977 8.31658 13.7072 8.70711L7.34325 15.0711C6.95272 15.4616 6.31956 15.4616 5.92903 15.0711C5.53851 14.6805 5.53851 14.0474 5.92903 13.6569L11.5859 8L5.92903 2.34315C5.53851 1.95262 5.53851 1.31946 5.92903 0.928932C6.31956 0.538408 6.95272 0.538408 7.34325 0.928932L13.7072 7.29289ZM1.25146 7L13.0001 7V9L1.25146 9V7Z" fill="#424242"/>
                </svg>

              </button>
            </div>
          </>
        ) : (
          <p className="text-center p-4">No hay imágenes disponibles</p>
        )}
      </div>

      <div className="min-h-0 text-white flex items-center p-4">
        {/* Botón para mostrar comentarios */}
        <div className="w-auto flex">
          <button
            onClick={handleCommentClick}
            className="flex items-center justify-center px-4 py-2 my-8 rounded-full hover:bg-gray-400 bg-gray-200 text-black"
          >
            <FaRegCommentDots className="text-2xl" />
          </button>
          {/* Botón para mostrar capítulos */}
          <div className="relative flex items-center px-4">
            <button
              onClick={() => setShowChapterList(!showChapterList)}
              className="flex items-center justify-center px-4 py-2 rounded-full hover:bg-gray-400 bg-gray-200 text-black"
            >
              Chapters
            </button>
            {showChapterList && (
              <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded shadow-lg p-2 w-40 max-h-64 overflow-y-auto text-black">
                {processedChapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => handleChapterSelect(chapter.id)}
                    className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                  >
                    Chapter {chapter.chapterNumber}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contenedor de comentarios */}
        <div
          className={`fixed top-0 left-0 transition-transform duration-300 ${
            showComments ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } bg-white w-full h-full z-50 overflow-auto`}
        >
          <div className="p-4">
            {/* Botón para cerrar comentarios */}
            <button
              onClick={() => setShowComments(false)}
              className="text-white bg-[#f97316] hover:bg-red-600 px-4 py-2 rounded absolute top-4 right-4"
            >
              Cerrar
            </button>

            <div className="mt-8">
              <Comment />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Comentarios</h3>
          <textarea
            className="w-full h-24 p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Escribe un comentario..."
          ></textarea>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => onComment("Comentario enviado")}
          >
            Enviar comentario
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangaChapter;

// Ejemplo de uso
// Asegúrate de pasar un array válido de imágenes.
const images = [
  "ruta-de-tu-imagen-1.png",
  "ruta-de-tu-imagen-2.png",
  "ruta-de-tu-imagen-3.png",
];

<MangaChapter
  images={images}
  onReaction={(reaction) => console.log(`Reacción: ${reaction}`)}
  onComment={(comment) => console.log(`Comentario: ${comment}`)}
/>;
