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
    <div className="flex flex-wrap justify-center items-center gap-5 m-4 p-4">
    <button
      className="mt-2 bg-gray-300 text-black rounded-3xl hover:bg-gray-400 active:scale-x-110 hover:shadow-lg px-2 sm:px-4 py-1 sm:py-2 font-bold text-xs sm:text-sm md:text-base transition-all duration-300 hover:opacity-80 hover:text-opacity-100 text-opacity-80"
      onClick={handleViewAll}
    >
      All
    </button>
    {categories.map((cat, index) => (
      <button
        key={index}
        className="rounded-3xl px-2 sm:px-4 py-1 sm:py-2 font-bold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-x-110 active:scale-95 hover:shadow-2xl hover:opacity-100 hover:text-opacity- text-opacity-100"
        style={{
          backgroundColor: cat.hover || "#cccccc",
          color: cat.color || "#000000",
        }}
        onClick={() => handleViewMore(cat)}
      >
        {cat.name.charAt(0).toUpperCase()+cat.name.slice(1)}
      </button>
    ))}
  </div>
  
  
  
  );
}
