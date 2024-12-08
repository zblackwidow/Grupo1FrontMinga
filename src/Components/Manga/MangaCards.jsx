import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMangas } from "../../Store/actions/mangaActions";
import CategoryManga from "./CategoryManga";

const MangaCards = () => {
  const { mangas } = useSelector((state) => state.manga);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMangas({}));
  }, [dispatch]);

  const handleViewMore = (mg) => {
    navigate(`/chapters`, { state: mg._id });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-3xl bg-white w-[95%] min-h-screen flex flex-wrap justify-center gap-5">
        
        <CategoryManga></CategoryManga>
        {mangas.map((mg) => {
          // Validar si category_id y su propiedad color existen
          const borderColor = mg.category_id?.color || "gray-300"; // Color predeterminado si no existe.

          
          return (
            <div
              key={mg._id}
              className="flex flex-row w-full  sm:w-1/2 lg:w-1/3 m-2 transform transition duration-500 hover:scale-105"
            >
              <div
                className={`flex items-center rounded-2xl w-full sm:w-[80%] m-4 lg:w-[70%] overflow-hidden shadow-lg border-l-[10px]`}
                style={{
                  borderLeftColor: borderColor, // Aplicar el color dinámico desde la propiedad `color`.
                }}
              >
                <div className="flex flex-col justify-center p-2 w-[70%] h-[70%]">
                  <div className="flex h-full items-center justify-center w-full">
                    <p className="text-black text-center">{mg.title}</p>
                  </div>
                  <div className="flex items-end justify-self-start h-full w-full">
                    <button
                      className="mt-2 bg-emerald-300 text-white rounded-3xl hover:bg-slate-500 h-[45%] w-[35%]"
                      onClick={() => handleViewMore(mg)}
                    >
                      Read
                    </button>
                  </div>
                </div>

                <img
                  src={mg.cover_photo}
                  alt={mg.title}
                  className="w-[45%] h-[20vh] object-cover rounded-l-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MangaCards;
