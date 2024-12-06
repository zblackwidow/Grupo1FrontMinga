function NewRole() {
    return (
        <>

            <div className="w-full md:w-[30vw] h-[10vh] border-2 border-gray-400 rounded-lg flex">
                {/* contenedor de Join autor */}
                <div className="flex items-center bg-orange-500 w-1/3">
                    {/* contenedor de imagenes */}
                        <div className="flex items-center my-4">
                        <img className="mr-4 rounded-full w-12 h-12 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/939f/d722/70ffd81364346efa0b542910aed37b59?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYVRtVJBzvULAFrkfDcZ78GJoXT6m4oOkd1BtAxMlvpy40ZNdHyt9dvxhI~-viIbGjj6aElH1xTReKyWTjQCxkb-OvV~cxbAUELbRCdzs6bNjJ8OgpeR3tnhL~szSLAhf1ClhJXEazce1pfDtfCdvv40IBz~z22Sw6cUM-wGsg9jFWmtsCiLqcyj1pIJrXml2ttJ7qTBZtZVYXlE6ufi0e95e26kQ03uh2GMfUMWqVZsN5mUy72k2DTNfJgKQMrlqEJxWpIqQTET~1g~NCTnXhCSjjQniaeXYDw66sMb8rhrHW1G3Wu1exrByupKnQmEE9M2EIzHH9nwPLemDi4Z9A__" alt="chico" />
                        <img className="absolute m-9 rounded-full w-14 h-14 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/8492/a785/4211a986cf32f5be6f5259d5d00d18e2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W99~IjyXbkAQ3Ej9NL3z-u~TVB~ujW3PvBNbwVxsA4GAeq1MCCYBII8ad7YxYptq9axQHZF3vu~8xXagETDzstI1LCTim6EBjvqomaMGEnOPxPFcMD1d0CZgVJTjoywcls3tR0l~A3em-qr6sncW8auANdbhbJpCGc1SGoBTZTtVY~Au4Z3mOt8e3J28LStV~GF38AtKWxHtowpm-4~2vEmjv2~VVbpIbhTZD2oEV3aeSlxSP5OGoS3yAgudjpOACt7g-khHqMHY4KH6qza6oXffuDnlGgrQJPV6X9W98uZzP27AaqVgl6QL8RfTY8meLlwnCoqeT2qvKb6dgO1xwA__" alt="chica1" />
                        <img className="ml-6 rounded-full w-12 h-12 bg-fixed object-cover" src="https://s3-alpha-sig.figma.com/img/c70b/1f1f/5b8a77a3dfac79635990f660c87df46a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kp9GpVBSjwEVNf9GnYBKmTtZmhbYRtiLv0EU-nyJ2jjXYUUUsxrGW4wOgJE5tBogDBG4NT0heg68hfXiSujnLouXnNoLIhXzOV3~k4VqS8Zs9Mltef6ZGITSjw-DEndDuItYEwWNEHzsUSy1hoqW4R3rUaPs3Rth~R5ujXOsSXwkaN2Nrc1FwUqBGTd2E9v5c0sIg7yVAWVLJX4aiv~7i0SIbSxivDxyyvAU72zf-wZgTp5anIKfspBn8LzwScVebq6M4CDajgLOKYncQpCjpgoAbPXmGdpvuUEku0kD9MyroTO7FURHaf88K1GOyAANCC2VUDbvNuPa1mU~XSxbHg__" alt="chica2" />
                        </div>
                    </div>
                    <div className="flex pl-2 justify-center flex-col place-items-start bg-slate-400 w-2/3">
                    <h2>Join Author</h2>
                    <p>I'm a reader writting a manga</p>
                </div>
                </div>

                
        </>
    )
}

export default NewRole;