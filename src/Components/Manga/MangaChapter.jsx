import React, { useState } from "react";

const MangaChapter = ({ images = [], onReaction }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === images.length - 1;

  const goToNextPage = () => {
    if (!isLastPage) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (!isFirstPage) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Capítulo de Manga</h1>
      </header>

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
                className={`px-4 py-2 bg-gray-700 rounded ${
                  isFirstPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
                }`}
              >
                Anterior
              </button>
              <button
                onClick={goToNextPage}
                disabled={isLastPage}
                className={`px-4 py-2 bg-gray-700 rounded ${
                  isLastPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
                }`}
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <p className="text-center p-4">No hay imágenes disponibles</p>
        )}
      </div>

      <div className="mt-4 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-2">Reacciones</h2>
        <div className="flex gap-4">
          <button
            onClick={() => onReaction("like")}
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
          >
            Me gusta
          </button>
          <button
            onClick={() => onReaction("favorite")}
            className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Favorito
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangaChapter;
