import React from 'react'
import HeroManga from '../Components/Manga/HeroManga'
import MangaCards from '../Components/Manga/MangaCards'

export default function Mangas() {
    return (
        <div className="">
            <HeroManga></HeroManga>
            <div className="-mt-[100px]">
                <MangaCards></MangaCards>
            </div>
        </div>
    )
}
