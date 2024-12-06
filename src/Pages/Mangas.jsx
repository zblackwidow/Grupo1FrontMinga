import React from "react";
import HeroManga from "../Components/Manga/HeroManga";
import MangaCards from "../Components/Manga/MangaCards";

export default function Mangas() {
  return (
    <div className="min-h-[70vh] w-full">
      <div>
        <HeroManga></HeroManga>
      </div>
      <MangaCards></MangaCards>
    </div>
  );
}
