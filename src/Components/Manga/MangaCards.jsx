import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMangas } from '../../Store/actions/mangaActions'
import { useNavigate } from 'react-router-dom'

const MangaCards = ({ selectedCategory }) => {
  const { mangas } = useSelector((state) => state.manga);
  const { search } = useSelector((state) => state.manga);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMangas({}))
    }, [dispatch])

    // Filtrar mangas según categoría y título
    const filteredMangas = mangas.filter((manga) => {
        const matchesCategory = selectedCategory ? manga.category_id._id === selectedCategory : true // Si no hay categoría seleccionada, no se filtra por categoría

        const matchesTitle = search
            ? manga.title.toLowerCase().includes(search.toLowerCase())
            : true // Si no hay título, no se filtra por título

        return matchesCategory && matchesTitle
    })

 

 
  const handleViewMore = (mg) => {
  
      navigate(`/chapters/${mg}`);
   
  };

  return (
    <div className="w-full flex flex-wrap justify-center gap-5">
      {filteredMangas.length > 0 ? (
        filteredMangas.map((mg) => (
          <div
            key={mg._id}
            className="flex flex-row w-full sm:w-1/2 lg:w-1/3 m-2 transform transition duration-500 hover:scale-105"
          >
            <div
              className={`flex items-center rounded-2xl w-full m-4 overflow-hidden shadow-lg border-l-[10px]`}
              style={{
                borderLeftColor: mg.category_id?.color || "gray-300",
              }}
            >
              <div className="flex flex-col justify-center p-2 w-[70%] h-[70%]">
                <div className="flex flex-col h-full items-start justify-center w-full font-ro">
                  <p className="text-black font-bold text-center">{mg.title}</p>
                  <p
                    className="text-sm font-medium text-center"
                    style={{
                      color: mg.category_id?.color || "#000", // Pintar las letras del color de la categoría
                    }}
                  >
                    {mg.category_id?.name.charAt(0).toUpperCase() +
                      mg.category_id.name.slice(1) || "Unknown"}
                  </p>
                </div>
                <div className="flex items-end justify-self-start h-full w-full">
                  <button
                    className="mt-2 bg-emerald-300 text-white rounded-3xl hover:bg-slate-500 h-[45%] w-[35%]"
                    onClick={() => handleViewMore(mg._id)}
                  >
                    Read
                  </button>
                </div>
              </div>
              <img
                src={mg.cover_photo}
                alt={mg.title}
                className="w-[45%] h-[20vh] object-cover rounded-l-full"
              />
            </div>
          </div>
        ))
      ) : (
        
        <p className="text-orange-500 border-t-2 h-[50vh]  border-black/20 p-3 text-xl text-wrap text-center font-bold m-5 ">
         No results found matching your criteria. Try adjusting the filters!
        </p>

      )}
    </div>
  );
}; 

export default MangaCards
