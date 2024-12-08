import React from 'react'
import FilterManga from './MangaFilter'

export default function HeroManga() {
    return (
        <div className="w-full  bg-heroManga h-[70vh] bg-center bg-cover  flex flex-col justify-center items-center">
            <div className="w-full  bg-black/50 h-[70vh] bg-center bg-cover  flex flex-col justify-center items-center">            <div className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-bold text-white pb-24 mt-20">
                <h1>Mangas</h1>
            </div>
            <FilterManga></FilterManga>
            </div>

        </div>
    )
}
