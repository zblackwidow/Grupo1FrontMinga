import React, { useState } from "react";

const MangaChapter = ({ images = [], onReaction, onComment }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!images.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">
          No hay páginas disponibles para mostrar.
        </h1>
      </div>
    );
  }

  // Funciones de navegación
  const goToNextPage = () => {
    if (currentPage < images.length - 1) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Capítulo de Manga</h1>
        <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
          Volver al inicio
        </button>
      </header>

      {/* Contenedor del visor */}
      <div className="relative w-full max-w-3xl bg-black border border-gray-700 rounded overflow-hidden">
        <img
          src={images[currentPage]}
          alt={`Página ${currentPage + 1}`}
          className="w-full h-auto"
        />
        {/* Controles de navegación */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button
            className={`px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 ${
              currentPage === 0 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
          <button
            className={`px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 ${
              currentPage === images.length - 1 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={goToNextPage}
            disabled={currentPage === images.length - 1}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Controles de reacciones */}
      <div className="mt-4 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-2">Reacciones</h2>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            onClick={() => onReaction("like")}
          >
            Me gusta
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
            onClick={() => onReaction("favorite")}
          >
            Favorito
          </button>
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
