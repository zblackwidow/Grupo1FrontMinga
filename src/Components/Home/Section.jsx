import React from 'react'

export default function Section() {
    return (
        <>
            <div className="flex justify-center items-center p-20">
                <div className="w-full h-[300px] bg-[#f97316] rounded-lg">
                    <div className="flex justify-between items-center w-full h-[300px] px-10 z-1">
                        <div className="bg-[#FACDB0] rounded-full p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                />
                            </svg>
                        </div>
                        <div className="z-2 flex justify-evenly w-full">
                            <div className="h-[400px] z-3">
                                <img
                                    className="h-[350px] object-cover z-4"
                                    src="https://s3-alpha-sig.figma.com/img/8856/dd5e/290b26e8ccd3b394d453600dc140c09b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9E~eoAgkKKBP8zT7kIg5AvK9QEyzAcSweRoJPM1OUZ8lbw6MTk-o7KWQn65ss3ruEkkNF~706FPLM5b2fixKxo1K14fFObHYmFJA5EJLZb1LNr13oAynHtbpSwhT8hCI7eY6k85a2bdvCjOCD7jjExdBo8NQTHIPh46XHB0IE-oKnOmbT-VnR1HvpHcSYuugNwss5YPAXxt9X8WqMmo9aSxwBODmnyzH3-IkEbnMMsTmW2uPLcPa0h5eYt9Vv2ojKUroE8s1stGHLtaNxa3yqgBeDk1OgMwM1oeLaLS9qEH2ETDribK5g6kj1V~NF9tCgBHaAT3Z6Ta2NKb2Bbiyg__"
                                    alt=""
                                />
                            </div>
                            <div className="h-[400px] z-3">
                                <img
                                    className="h-[320px] object-cover rounded-lg z-4"
                                    src="https://s3-alpha-sig.figma.com/img/b3fe/fdeb/7c848fa5944ce73c1e0b7c954bf88cad?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UowBsYUK7SsOsvJJtRLI3abuhQjlNEK7aLHaT~47pwGHwtSQRr9TbUtFXDWTLybN8OY2dySLMelvlT1QsKm3W9nSB6lv19kABnXhzY8v9GViukQcQRFipfiukFpRmVQvdP9nENEHxx7NPaoHbu-pGBoZbm~fQcA5JUdAhvON~L40iQRRID1nbV2CMW6JlbbdZ704vuXTVHLoQvC~s5H6FyDelv-V6xFKS6Lr4TIW2K~hpU-mInFVjsS1dSVoC-2og7wq7R~0xYl40IKK1CMVl0LH51zSseH59no0ntzrz~2-0ide4vu-DjuHa9T476Eeav6XukYrmqhlAPOyYs9n4g__"
                                    alt=""
                                />
                            </div>
                            <div className="w-[400px]  z-3 flex justify-start items-center">
                                <div className="">
                                    <h2 className="text-[24px] font-medium text-white">Shonen</h2>
                                    <p className="text-[14px] font-normal text-white">
                                        Is the manga that is aimed at adolescent boys. They are
                                        series with large amounts of action, in which humorous
                                        situations often occur. The camaraderie between members of a
                                        collective or a combat team stands out.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FACDB0] rounded-full p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
