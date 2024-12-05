import React from 'react'
import homeImg from '../../assets/home-img.png'

export default function Banner() {
    return (
        <>
            <div className="w-full h-full">
                <img src={homeImg} alt="" className="w-full" />
                <div className="absolute sm:hidden md:block top-[50%] translate-y-[-50%] left-[107.63px]">
                    <div className="py-2">
                        <h1 className="text-[64px] font-bold	leading-[60.92px]	 font-poppins text-white">
                            For the love of manga{' '}
                        </h1>
                    </div>
                    <div className="py-2">
                        <h1 className="text-[24px] font-normal font-poppins leading-[22.84px] text-white">
                            Explore our varieties{' '}
                        </h1>
                    </div>
                    <div className="py-2">
                        <h1 className="text-[16px] font-semibold	 font-poppins  text-white">
                            #MingaLove<strong className="text-[#ff5722]">❤</strong>{' '}
                        </h1>
                    </div>
                    <div className="py-2">
                        <button className="bg-[#ffffff] text-[#ff5722] rounded-md w-[240px] h-[55px] text-[24px] font-medium  font-poppins">
                            Sign In!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
