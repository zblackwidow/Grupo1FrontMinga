import React, { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Importamos dispatch y useSelector
import Comment from "./Comment";
import { getChapterById } from "../../Store/actions/chapterActions"; // Asegúrate de importar la acción

const MangaChapter = ({ chapters = [] }) => {
  const { id } = useParams(); // Obtenemos el ID del capítulo desde la URL
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showChapterList, setShowChapterList] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const dataUser = JSON.parse(localStorage.getItem("userManga"));
  const token = dataUser?.token;
  // Obtenemos el token del localStorage

  // Obtenemos el capítulo por ID desde el estado
  const { chapter, loading, error } = useSelector((state) => state.chapter);

  useEffect(() => {
    if (id && token) {
      dispatch(getChapterById({ id, token }));
    }
  }, [id, token, dispatch]);

  if (loading) return <div>Cargando capítulo...</div>;
  if (error) return <div>Error al cargar el capítulo: {error}</div>;

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const pagesChapter = chapter?.response;
  const chapterList = chapter?.response.pages || []; // Asegúrate de manejar un arreglo por defecto

  const isFirstPage = currentPage === 0;
  const isLastPage =
    pagesChapter?.pages && pagesChapter?.pages?.length > 0
      ? currentPage === pagesChapter?.pages?.length - 1
      : true;

  const handleChapterSelect = (chapterId) => {
    Navigate(`/chapterByID/${chapterId}`);
  };

  // Función para regresar a la página anterior
  const handleGoBack = () => {
    Navigate(-1);
  };

  const triggerAnimation = (animation) => {
    setIsAnimating(true);
    setAnimationClass(animation);
  };

  const resetAnimation = () => {
    setAnimationClass("");
    setIsAnimating(false);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      triggerAnimation("translate-x-full");
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        resetAnimation();
      }, 300); // Duración de la animación
    }
  };

  const goToNextPage = () => {
    if (currentPage < pagesChapter.pages.length - 1) {
      triggerAnimation("-translate-x-full");
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        resetAnimation();
      }, 300); // Duración de la animación
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <header className="w-auto flex justify-center items-center top-8 py-8 mb-4 px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-full text-center truncate">
          {pagesChapter.title}
        </h1>
      </header>

      <div className="relative w-full max-w-3xl bg-gray-400 border border-gray-700 rounded overflow-hidden">
        <div className="w-auto flex justify-center">
          {pagesChapter && pagesChapter.pages && pagesChapter.pages.length > 0 ? (
            <div className="relative">
              <img
                src={pagesChapter.pages[currentPage]}
                alt={`Página ${currentPage + 1}`}
                className={`w-full h-auto transform transition-transform duration-300 ${animationClass}`}
              />
            </div>
          ) : (
            <p className="text-center p-4">No manga available</p>
          )}
        </div>

        {/* Contenedor de las flechas */}
        <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          {/* Flecha izquierda */}
          <div className="flex items-center justify-center pointer-events-auto">
            <button
              onClick={goToPreviousPage}
              disabled={isFirstPage}
              className={`px-4 py-2 bg-transparent opacity-50 rounded ${
                isFirstPage
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-transparent sm:hover:bg-[#f97316]"
              }`}
            >
              <svg
                width="28"
                height="32"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7485 9C13.3008 9 13.7485 8.55228 13.7485 8C13.7485 7.44772 13.3008 7 12.7485 7V9ZM0.292794 7.29289C-0.0977306 7.68342 -0.0977306 8.31658 0.292794 8.70711L6.65675 15.0711C7.04728 15.4616 7.68044 15.4616 8.07097 15.0711C8.46149 14.6805 8.46149 14.0474 8.07097 13.6569L2.41411 8L8.07097 2.34315C8.46149 1.95262 8.46149 1.31946 8.07097 0.928932C7.68044 0.538408 7.04728 0.538408 6.65675 0.928932L0.292794 7.29289ZM12.7485 7L0.999901 7V9L12.7485 9V7Z"
                  fill="#424242"
                />
              </svg>
            </button>
          </div>

          {/* Flecha derecha */}
          <div className="flex items-center justify-center pointer-events-auto">
            <button
              onClick={goToNextPage}
              disabled={isLastPage}
              className={`px-4 py-2 bg-transparent opacity-50 rounded ${
                isLastPage
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-transparent sm:hover:bg-[#f97316]"
              }`}
            >
              <svg
                width="28"
                height="32"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25146 9C0.69918 9 0.251465 8.55228 0.251465 8C0.251465 7.44772 0.69918 7 1.25146 7V9ZM13.7072 7.29289C14.0977 7.68342 14.0977 8.31658 13.7072 8.70711L7.34325 15.0711C6.95272 15.4616 6.31956 15.4616 5.92903 15.0711C5.53851 14.6805 5.53851 14.0474 5.92903 13.6569L11.5859 8L5.92903 2.34315C5.53851 1.95262 5.53851 1.31946 5.92903 0.928932C6.31956 0.538408 6.95272 0.538408 7.34325 0.928932L13.7072 7.29289ZM1.25146 7L13.0001 7V9L1.25146 9V7Z"
                  fill="#424242"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-0 text-white flex items-center p-4">
        <div className="w-auto flex">
          <button
            onClick={handleCommentClick}
            className="flex items-center justify-center px-4 py-2 my-8 rounded-full hover:bg-gray-400 bg-gray-200 text-black"
          >
            <FaRegCommentDots className="text-2xl" />
          </button>
          <div className="relative flex items-center px-4">
            <button
              onClick={() => setShowChapterList(!showChapterList)}
              className="flex items-center justify-center px-4 py-2 rounded-full hover:bg-gray-400 bg-gray-200 text-black"
            >
              {currentPage + 1} de {pagesChapter?.pages?.length || 0}
            </button>
            {showChapterList && (
              <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded shadow-lg p-2 w-40 max-h-64 overflow-y-auto text-black">
                {pagesChapter?.pages && pagesChapter.pages.length > 0 ? (
                  pagesChapter.pages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentPage(i);
                        setShowChapterList(false);
                      }}
                      className={`block w-full text-left px-2 py-1 hover:bg-gray-100 ${
                        i === currentPage ? "bg-gray-200 font-bold" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">No pages available</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 transition-transform duration-300 ${
            showComments
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } bg-white w-full h-full z-50 overflow-auto`}
        >
          <div className="p-4">
            <button
              onClick={() => setShowComments(false)}
              className="text-white bg-[#f97316] hover:bg-red-600 px-4 py-2 rounded absolute top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mt-8">
              <Comment />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-2 my-8 rounded-full hover:bg-gray-400 bg-gray-200 text-black">
          <button onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default MangaChapter;
