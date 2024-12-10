import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="bg-white relative w-full pt-1 pb-6 mt-10">
            <div>
                <img
                    className="w-full h-auto"
                    src="/c8a658b7a0fe27a19ab7b649e6e62b30-1.png"
                    alt=""
                />
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <nav className="flex space-x-8 text-lg font-medium text-gray-600">
                        <a href="" className="hover:text-orange-500 transition">
                            Home
                        </a>
                        <a href="/mangas" className="hover:text-orange-500 transition">
                            Mangas
                        </a>
                    </nav>
                    <div className="flex items-center space-x-2 text-orange-500 text-xl font-bold">
                        <span>Minga</span>
                        <span className="text-gray-500">雪</span>
                    </div>
                    <div>
                        <div className="flex space-x-4 text-gray-600">
                            <a
                                target="_blank"
                                href="https://facebook.com"
                                className="hover:text-orange-500 transition"
                                aria-label="Facebook"
                            >
                                <FaFacebookF size={20} />
                            </a>
                            <a
                            target="_blank"
                                href="https://x.com/?lang=es"
                                className="hover:text-orange-500 transition"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                            target="_blank"
                                href="https://vimeo.com/es/"
                                className="hover:text-orange-500 transition"
                                aria-label="Vimeo"
                            >
                                <FaVimeoV size={20} />
                            </a>
                            <a
                            target="_blank"
                                href="https://youtube.com/"
                                className="hover:text-orange-500 transition"
                                aria-label="YouTube"
                            >
                                <FaYoutube size={20} />
                            </a>
                        </div>

                        <button target="_blank" className="flex items-center mt-4 space-x-2 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
                            <span>Donate</span>
                            <span className="text-xl">❤️</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
