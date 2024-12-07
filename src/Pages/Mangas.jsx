import React from "react";
import HeroManga from "../Components/Manga/HeroManga";
import MangaCards from "../Components/Manga/MangaCards";

export default function Mangas() {
  return (
    <div className="min-h-full w-full">
    
    <div className="flex flex-col flex-grow">
        <HeroManga></HeroManga>
      
      <MangaCards></MangaCards>
      </div>
    </div>
  );
}
