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
  <div className="flex flex-col items-start mx-auto -mt-20 w-full  lg:w-[95%] p-2 bg-white sm:rounded-t-3xl rounded-t-[60px]">
    <div className="flex lg:ml-52 ">
      <CategoryManga onCategorySelect={handleCategorySelection} />
    </div>
    <div className="w-full">
      <MangaCards selectedCategory={selectedCategory} />
    </div>
  </div>
</>

  );
}
