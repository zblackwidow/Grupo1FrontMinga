import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Store/actions/categoryActions";

export default function CategoryManga({ onCategorySelect }) {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories({}));
  }, [dispatch]);

  const handleViewAll = () => {
    onCategorySelect(null); // Selecciona "todas las categorías"
  };

  const handleViewMore = (category) => {
    onCategorySelect(category._id); // Selecciona una categoría específica
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 m-4 p-4">
    <button
      className="mt-2 bg-gray-300 text-black rounded-3xl hover:bg-gray-400 px-2 sm:px-4 py-1 sm:py-2 font-bold text-xs sm:text-sm md:text-base"
      onClick={handleViewAll}
    >
      All
    </button>
    {categories.map((cat, index) => (
      <button
        key={index}
        className="rounded-3xl px-2 sm:px-4 py-1 sm:py-2 font-bold transition-opacity duration-300 hover:opacity-100 text-xs sm:text-sm md:text-base"
        style={{
          backgroundColor: cat.color || "#cccccc",
          color: cat.hover || "#000000",
        }}
        onClick={() => handleViewMore(cat)}
      >
        {cat.name}
      </button>
    ))}
  </div>
  
  
  );
}
