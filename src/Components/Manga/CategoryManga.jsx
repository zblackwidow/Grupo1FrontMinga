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
    <div className="flex h-full w-full justify-center items-center m-4 p-4 ">
      <button
        className="mt-2 bg-gray-300 text-black rounded-3xl hover:bg-gray-400 p-3 font-bold"
        onClick={handleViewAll}
      >
        All
      </button>
      {categories.map((cat, index) => (
        <button
          key={index}
          className="m-2  rounded-3xl px-4 py-2 font-bold transition-opacity duration-300 hover:opacity-100"
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
