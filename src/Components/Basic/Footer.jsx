import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white relative w-full pt-1 pb-6">
      {/* Fondo curvo */}
      <div >
        <img className="w-full" src="/image-footer.svg" alt="" />
      </div>

      {/* Contenedor  principal */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Navegación */}
          <nav className="flex space-x-8 text-lg font-medium text-gray-600">
            <a href="" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#mangas" className="hover:text-orange-500 transition">
              Mangas
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center space-x-2 text-orange-500 text-xl font-bold">
            <span>Minga</span>
            <span className="text-gray-500">雪</span>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4 text-gray-600">
            <a
              href="#"
              className="hover:text-orange-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition"
              aria-label="Vimeo"
            >
              <FaVimeoV size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>

          {/* Botón Donate */}
          <button className="flex items-center space-x-2 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
            <span>Donate</span>
            <span className="text-xl">❤️</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
