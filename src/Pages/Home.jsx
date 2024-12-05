import React from 'react'
import homeImg from '../assets/home-img.png'

export default function Home() {

    return (
        <>
            <div className="w-full">
                <img src={homeImg} alt="" className="w-full" />
                <div className="absolute top-[234px] left-[107.63px]">
                    <h1 className="text-4xl font-bold text-white">
                    For the love of manga                    </h1>
                </div>
            </div>
        </>
    )
}
