import React, { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Importamos dispatch y useSelector
import Comment from "./Comment";
import { getChapterById } from "../../Store/actions/chapterActions"; // Asegúrate de importar la acción
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import CommenModal from "./CommenModal";

const MangaChapter = ({ chapters = [] }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [showComments, setShowComments] = useState(null);
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
  const handleCloseModal = () => {
    setShowComments(null);
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <header className="w-auto flex justify-center items-center top-8 py-8 mb-4 px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold w-full text-center truncate">
          {pagesChapter?.title}
        </h1>
      </header>

      <div className="relative w-full max-w-3xl bg-black border border-gray-700 rounded overflow-hidden py-0 sm:py-4">
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
          <div className="flex items-center justify-center pointer-events-auto px-4 w-24 h-64">
            <button
              onClick={goToPreviousPage}
              disabled={isFirstPage}
              className={`px-4 py-2 bg-transparent opacity-50 rounded w-24 h-64 ${
                isFirstPage
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-transparent  sm:hover:bg-[#f97316]"
              }`}
            >
              <SlArrowLeft />
            </button>
          </div>

          {/* Flecha derecha */}
          <div className="flex items-center justify-center pointer-events-auto px-4 w-24 h-64">
            <button
              onClick={goToNextPage}
              disabled={isLastPage}
              className={`px-4 py-2 bg-transparent opacity-50 w-24 h-64 rounded ${
                isLastPage
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-transparent sm:hover:bg-[#f97316]"
              }`}
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-0 text-white flex px-4">
      <button
            onClick={handleCommentClick}
            className="flex items-center justify-center px-4 py-2 my-8 rounded-full hover:bg-gray-400 bg-gray-200 text-black"
          >
            <FaRegCommentDots className="text-2xl" />
          </button>
      <div className="w-auto flex relative px-4 ">
     

  <button
    onClick={() => setShowChapterList(!showChapterList)}
    className="flex items-center justify-center px-4 py-2 my-8 rounded-full hover:bg-gray-400 bg-gray-200 text-black"
  >
    {currentPage + 1} - {pagesChapter?.pages?.length || 0}
  </button>

  {/* Galería interactiva de capítulos */}
  {showChapterList && (
    <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded shadow-lg p-2 w-60 max-h-64 overflow-y-auto text-black">
      {pagesChapter?.pages && pagesChapter.pages.length > 0 ? (
        pagesChapter.pages.map((page, i) => (
          <div
            key={i}
            onClick={() => {
              setCurrentPage(i);
              setShowChapterList(false);
            }}
            className={`group cursor-pointer p-1 ${
              i === currentPage ? "bg-gray-200 font-bold" : ""
            }`}
          >
              {/* Número de página */}
          <div className="text-center text-sm font-bold text-gray-700 mb-1">
            {i + 1}
          </div>

            {/* Miniatura con animación hover */}
           
            <img
              src={page} // URL de la página
              alt={`Página ${i + 1}`}
              className="w-full h-auto rounded hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No pages available</p>
      )}
    </div>
  )}
</div>

        <div
          className={`fixed top-0 left-0 transition-transform duration-300 ${
            showComments
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } bg-white w-full h-full z-50 overflow-auto`}
        >
          <div className="p-4">
            
           

            <div className="mt-8">
              <CommenModal
              isOpen={showComments}
              onClose={handleCloseModal}
              comments={id} />
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
