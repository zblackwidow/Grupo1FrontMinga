    import { Link } from "react-router-dom";


    function NewRole() {

        return (
            <>
                {/* Contenedor principal */}
                <main className="w-full h-screen flex items-center justify-center">
                    {/* contenedor optiones */}

                    <div className="w-full mx-3 md:mx-0  xl:w-1/2 flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-xl text-orange-500">Change role</h1>
                            <div className="flex my-2">
                                <h2 className="text-orange-500 text-3xl">Minga</h2>
                                <h2 className="ml-1 text-3xl">雪</h2>
                            </div>
                            {/* primer contenedor */}
                            <Link to="/newAuthor">
                                <div className="w-full sm:w-[60vw] my-5 xl:w-[30vw] h-[15vh] md:h-[10vh] border-2 border-gray-300 hover:border-orange-500 rounded-lg flex ">
                                    {/* contenedor de Join autor */}
                                    <div className="flex items-center justify-center  md:w-1/3 w-2/4 m-3 ">
                                    
                                        {/* contenedor de imagenes */}
                                        <div className=" flex items-center my-4">
                                            <img className=" rounded-full w-12 h-12 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/939f/d722/70ffd81364346efa0b542910aed37b59?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYVRtVJBzvULAFrkfDcZ78GJoXT6m4oOkd1BtAxMlvpy40ZNdHyt9dvxhI~-viIbGjj6aElH1xTReKyWTjQCxkb-OvV~cxbAUELbRCdzs6bNjJ8OgpeR3tnhL~szSLAhf1ClhJXEazce1pfDtfCdvv40IBz~z22Sw6cUM-wGsg9jFWmtsCiLqcyj1pIJrXml2ttJ7qTBZtZVYXlE6ufi0e95e26kQ03uh2GMfUMWqVZsN5mUy72k2DTNfJgKQMrlqEJxWpIqQTET~1g~NCTnXhCSjjQniaeXYDw66sMb8rhrHW1G3Wu1exrByupKnQmEE9M2EIzHH9nwPLemDi4Z9A__" alt="chico" />
                                            <img className="absolute m-7 rounded-full w-14 h-14 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/8492/a785/4211a986cf32f5be6f5259d5d00d18e2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W99~IjyXbkAQ3Ej9NL3z-u~TVB~ujW3PvBNbwVxsA4GAeq1MCCYBII8ad7YxYptq9axQHZF3vu~8xXagETDzstI1LCTim6EBjvqomaMGEnOPxPFcMD1d0CZgVJTjoywcls3tR0l~A3em-qr6sncW8auANdbhbJpCGc1SGoBTZTtVY~Au4Z3mOt8e3J28LStV~GF38AtKWxHtowpm-4~2vEmjv2~VVbpIbhTZD2oEV3aeSlxSP5OGoS3yAgudjpOACt7g-khHqMHY4KH6qza6oXffuDnlGgrQJPV6X9W98uZzP27AaqVgl6QL8RfTY8meLlwnCoqeT2qvKb6dgO1xwA__" alt="chica1" />
                                            <img className="ml-5 rounded-full w-12 h-12 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/c70b/1f1f/5b8a77a3dfac79635990f660c87df46a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kp9GpVBSjwEVNf9GnYBKmTtZmhbYRtiLv0EU-nyJ2jjXYUUUsxrGW4wOgJE5tBogDBG4NT0heg68hfXiSujnLouXnNoLIhXzOV3~k4VqS8Zs9Mltef6ZGITSjw-DEndDuItYEwWNEHzsUSy1hoqW4R3rUaPs3Rth~R5ujXOsSXwkaN2Nrc1FwUqBGTd2E9v5c0sIg7yVAWVLJX4aiv~7i0SIbSxivDxyyvAU72zf-wZgTp5anIKfspBn8LzwScVebq6M4CDajgLOKYncQpCjpgoAbPXmGdpvuUEku0kD9MyroTO7FURHaf88K1GOyAANCC2VUDbvNuPa1mU~XSxbHg__" alt="chica2" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center flex-col w-2/3 text-orange-500">
                                    {/* <input type="checkbox" name="author" id="author" className="bg-orange-500 w-5 h-5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500" /> */}
                                        <h2 className="font-semibold">Join as an Author!</h2>
                                        <p>I'm a reader writting a manga</p>
                                    </div>
                                </div>
                            </Link>
                            {/* segundo contenedor */}
                            <Link to="/newCompany">
                            <div className="w-full sm:w-[60vw] xl:w-[30vw] h-[15vh] md:h-[10vh] border-2 border-gray-300 hover:border-orange-500 rounded-lg flex ">
                                {/* contenedor de Company autor */}
                                <div className="flex items-center justify-center  md:w-1/3 w-2/4 m-3 ">
                                
                                    {/* contenedor de imagenes */}
                                    <div className="flex items-center my-4">
                                        <img className=" rounded-full w-12 h-12 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/516f/e00b/4d3d3381b40bd5112cecfac12caaa17f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5PoQLZI6R6sk7bQQJs8lDft5UBS-djK1ZFn9VhOhHXLbrMB3txNTP1S9pyPuq7-iZdTom23g7wqjTIcijJjSXUOxXByy152e9Qr1oIVKVS7uYnkU8ShQ29kmglahUmqIj4Wj9G~r0iX7bg9J9IDW7En26pBI2qvxQdRneuFcbsokzvIi3xPuPi8~P2Mb6r4wBdGM4EqMjLzVj48rUZ09jM4hqgE7p-tNCtPPKrsop5fWZbh9wiBgTOAaU~PFh10tCZG9qdeBjO9mHs2Kd6BwqRGpH77rLdh7X0ta7J8Zkr9Ev9N4j3EDEptBaobVt4c2d~Sju~HpcmknvCt6qpcKg__" alt="chico" />
                                        <img className="absolute m-8 rounded-full w-14 h-14 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/31b7/a54b/25b805dd5e0f7e37c9610bb3af8c23bf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLKeG7URjp8Ukteo855F0aL1xvMPAKytxeDsSHQBjWgIxaSFWzclkaNkIPJsKtpMHR5KvYDYt3~gC~0HOZPawN5DHeCg7d1kbWSzhZBuN1tlbpSOjHOIhy3Zkx8LOKi4MKlyBScURk0rNb075AHYUxG7RY4l3jl~g2c6Q06XuZpKhwZ4kJrtCY-tfo0LbqAwi8aM3~ct~g39FDJ33CD13A45fS92rOeoGp6A17YnKotePxatdMNSJArtksVTBSXnr0R3mHbNA1-dKHM1Cy~~i9YwtjXTs39d7jt4bWGM60uBGWfUR~EOrriRf5g942E4zHVWIJCj6iZKPENXl71LXg__" alt="chica1" />
                                        <img className="ml-6 rounded-full w-12 h-12 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/7d82/da9a/0a833b99b9f313f1c42d8c294587e974?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9rXaDfOOozS8iY1AMrZfSVsQ41Hej8Ze2DZYzqbQxZ8FuS3ArNFRLvX2h32GL8cMSJPJOGR4QBYj7~MiH2XW5TD2iVYX~01Q0OAbSdnsBH1VRsDGj0T4yg2u5RxenOR3WSyI4kTc3NE0xhBI3rlY2bUXlJW9eVcDE8usZzJm46krsCfczbLIzYmXRWS7g-pm7Ab8e5ajFXqoDKUeEDklqYswFdYcJiTY7FpjNLPf-qH8SmcwYBIfTd~ED-csHG9WGeT6V-SgNmBpkuyNo~aJNndUvOiQbRKF-kfhrCtZ-DraseM~wterHKi~BFqxX~9SJouhxmgdFoQKDgnvHIOSg__" alt="chica2" />
                                    </div>
                                </div>
                                <div className="flex justify-center flex-col w-2/3 text-orange-500">
                                {/* <input type="checkbox" name="author" id="author" className="bg-orange-500 w-5 h-5 rounded-full border-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500" /> */}
                                    <h2 className="font-semibold">Join as a Company!</h2>
                                    <p>I'm a reader writting a manga</p>
                                    
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <img className="w-full h-[100vh] object-cover" src="https://s3-alpha-sig.figma.com/img/b8b4/c1ca/d91c01d1ff2a1a1341ce3c24609e0349?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqOlUaZrihLOcb8a3YFZ7Ab9cCdJgSozuary8Lfwzg~Qm2qbvbDU7onI-m8Wdue-ZUDzDAUmJ9BbtX6RUVGlUJLA-AZz~32HVTU7TcptrojKmmyc~IA~TEPcBiJP8gUvBfi1bctlKNkVBGklXo4n0gmdvoQwdmOARzm52LnXUUZQ0aXouvrCPWcePVswxYiZGXb36tHY0HccbIPF~SyUNto3ev7kZ1I2SZ4PtmrV2wvPGljVAdz-oGf4F-v0Stw68W2D9j2ycWUCLrwR06bmfID5lbvsWHvMYp7BULmbAqHLjBigaQdqyjOE-TRopZYkpOCjB0bYBsgHHqGxlaA1cg__" alt="" />
                    </div>
                </main>
            </>
        )
    }

    export default NewRole;