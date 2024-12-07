import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Store/actions/categoryActions";

export default function CategoryManga() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories({}));
  }, [dispatch]);

  const handleViewMore = (category) => {
    console.log("Viewing more for:", category);
  };

  const handleViewAll = () => {
    console.log("Viewing all categories");
  };

  return (
    <div className="w-full flex  justify-start">
      {/* Botón "All" */}
      <div className="flex items-center mb-4 h-auto w-full m-4 ">
        <button
          className="mt-2 bg-gray-300 text-black rounded-3xl hover:bg-gray-400 p-3 flex justify-center items-center font-bold"
          onClick={handleViewAll}
        >
          All
        </button>
      </div>

      {/* Botones dinámicos generados a partir de categories */}
      {categories.map((cat, index) => (
        <div key={index} className="flex items-center w-full h-auto ">
          <button
            className={` rounded-3xl h-auto p-2 w-auto flex justify-center items-center font-bold bg-opacity-80 hover:bg-opacity-100`}
            style={{
              backgroundColor: cat.color, // Fondo dinámico con opacidad
              color: cat.hover, // Color del texto dinámico sin opacidad
            }}
            onClick={() => handleViewMore(cat)}
          >
            {cat.name}
          </button>
        </div>
      ))}
    </div>
  );
}


