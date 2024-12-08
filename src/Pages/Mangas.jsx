import React, { useState } from "react";
import HeroManga from "../Components/Manga/HeroManga";
import MangaCards from "../Components/Manga/MangaCards";
import CategoryManga from "../Components/Manga/CategoryManga";

export default function Mangas() {
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

  const handleCategorySelection = (categoryId) => {
    setSelectedCategory(categoryId); // Actualiza la categoría seleccionada
  };

  return (
    <>
      <HeroManga />
      <div className=" flex flex-col justify-center items-center mx-auto -mt-[80px]  w-[90%] p-4 bg-white rounded-t-3xl">
      <CategoryManga onCategorySelect={handleCategorySelection} /> {/* Pasar la función de selección */}
        <MangaCards selectedCategory={selectedCategory} /> {/* Pasar la categoría seleccionada */}
      </div>
    </>
  );
}
