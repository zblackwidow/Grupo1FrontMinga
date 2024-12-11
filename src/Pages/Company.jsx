import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getMangas,
  getMangasByAuthor,
  getMangasByCategory,
} from "../Store/actions/mangaActions";
import { getCategories } from "../Store/actions/categoryActions";

export default function Company() {
  /*const user = JSON.parse(localStorage.getItem("userManga"));
  const role = user.user.role;
  const token = user.token;
  const author = user.user.author.id;
  console.log(author);

  const dispatch = useDispatch();
  const { mangas } = useSelector((state) => state.manga);
  const { categories, loading } = useSelector((state) => state.category);
  const [mangaByAuthor, setMangaByAuthor] = useState([]);

  useEffect(() => {
    if (role === 1) {
      dispatch(getMangas());
      let mangasByAuthor = mangas.filter(
        (manga) => manga.author_id._id === author
      );
      setMangaByAuthor(mangasByAuthor);
    } else if (role === 2) {
      dispatch(getMangasByCategory({ token }));
    }
    dispatch(getCategories());
  }, [dispatch, role, author, token]); // Asegúrate de incluir dependencias relevantes

  useEffect(() => {
    console.log("Mangas state updated:", mangas);
  }, [mangas]);

  console.log("Mangas by author:", mangaByAuthor);
  console.log("Categories:", categories);
  console.log(categories[0]);*/

  return (
    <>
      <div className="z-1">
        <img
          className="w-full h-[70vh] object-cover brightness-50"
          src="https://s3-alpha-sig.figma.com/img/6fbb/1740/a9480f18c06165fca03fd747dbab2cfe?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lU72pnNByYu1Zg0dlYtQSRHBlOPi-i5ESs5e55zj0a4TUI3tYshxNghwxCcgOWee4p1JE2WGn6zRZ8Fbv4-Tuc8zV2zNOSDckcEqvDoHjHbzwN9xdcDeF1WWzmbjNA3MMK6jnpBi10ZWRpL6Q-YTXCasMq5nvgBfeam82QWUPBgoHvVXz2v7kV3AgKrvlqJaLI2MSVwHEgThxauQGcoPCM9hX5tC3tEejJlMoYRnQw3DpaTGni451x5Q~3XLLVBxHQnokwyhskVQ6NCIAuuFJeIpgqJepDB9om38A9ekEcirEftjd7zXz8lEWC857Tnr3A2g1txqFMHfwHrLM4LAtw__"
          alt=""
        />
        <div className="absolute top-[32%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="font-roboto text-[64px] font-bold text-white">
            Companie
          </h1>
        </div>
      </div>
      <div className="flex h-full justify-center -mt-[60px] z-0">
        <div className="flex h-full flex-col justify-around items-center bg-white w-[97%] rounded-lg p-10">
          <div className="w-full my-4 flex justify-center items-center">
            <div className="w-[500px]  mx-16">
              <div className="flex gap-4  my-4">
                {categories &&
                  categories.map((category) => (
                    <button
                      key={category._id}
                      className="rounded-full p-2 font-semibold text-black"
                      style={{ backgroundColor: category.color }} // Usa el color dinámicamente
                    >
                      {category.name}
                    </button>
                  ))}
              </div>
            </div>
            <div className="w-[500px]  mx-16"> </div>
          </div>
          <div className="w-full flex justify-center items-center p-4">
            <div className="w-[500px]  bg-slate-100 mx-16 flex shadow-lg rounded-lg border-2">
              <div className="w-[50%] flex flex-col justify-between">
                <div className="flex gap-2 p-4 pl-6">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className=" h-[150px] absolute mt-8 flex flex-col justify-center border-l-[6px] pl-4 pb-4 border-black">
                  <h2 className="leading-6 text-[24px] font-roboto ">
                    Superman Comic
                  </h2>
                  <h3>Type</h3>
                </div>
                <div className="flex  -bottom-8 ml-3 p-4 gap-2">
                  <button className="rounded-full text-[12px] font-semibold bg-[#E0DBFF] p-3 text-[#8883F0] ">
                    Editar
                  </button>
                  <button className="rounded-full text-[12px] font-semibold bg-[#FFE0DF] p-3 text-[#EF8481] ">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className="rounded-l-[100px] rounded-r-lg"
                  src="/23df9c394ce60d455dc954325d648410 3@2x.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[500px]  bg-slate-100 mx-16 flex shadow-lg rounded-lg border-2">
              <div className="w-[50%] flex flex-col justify-between">
                <div className="flex gap-2 p-4 pl-6">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className=" h-[150px] absolute mt-8 flex flex-col justify-center border-l-[6px] pl-4 pb-4 border-black">
                  <h2 className="leading-6 text-[24px] font-roboto ">
                    Superman Comic
                  </h2>
                  <h3>Type</h3>
                </div>
                <div className="flex  -bottom-8 ml-3 p-4 gap-2">
                  <button className="rounded-full text-[12px] font-semibold bg-[#E0DBFF] p-3 text-[#8883F0] ">
                    Editar
                  </button>
                  <button className="rounded-full text-[12px] font-semibold bg-[#FFE0DF] p-3 text-[#EF8481] ">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className="rounded-l-[100px] rounded-r-lg"
                  src="/23df9c394ce60d455dc954325d648410 3@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center p-4">
            <div className="w-[500px]  bg-slate-100 mx-16 flex shadow-lg rounded-lg border-2">
              <div className="w-[50%] flex flex-col justify-between">
                <div className="flex gap-2 p-4 pl-6">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className=" h-[150px] absolute mt-8 flex flex-col justify-center border-l-[6px] pl-4 pb-4 border-black">
                  <h2 className="leading-6 text-[24px] font-roboto ">
                    Superman Comic
                  </h2>
                  <h3>Type</h3>
                </div>
                <div className="flex  -bottom-8 ml-3 p-4 gap-2">
                  <button className="rounded-full text-[12px] font-semibold bg-[#E0DBFF] p-3 text-[#8883F0] ">
                    Editar
                  </button>
                  <button className="rounded-full text-[12px] font-semibold bg-[#FFE0DF] p-3 text-[#EF8481] ">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className="rounded-l-[100px] rounded-r-lg"
                  src="/23df9c394ce60d455dc954325d648410 3@2x.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[500px]  bg-slate-100 mx-16 flex shadow-lg rounded-lg border-2">
              <div className="w-[50%] flex flex-col justify-between">
                <div className="flex gap-2 p-4 pl-6">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className=" h-[150px] absolute mt-8 flex flex-col justify-center border-l-[6px] pl-4 pb-4 border-black">
                  <h2 className="leading-6 text-[24px] font-roboto ">
                    Superman Comic
                  </h2>
                  <h3>Type</h3>
                </div>
                <div className="flex  -bottom-8 ml-3 p-4 gap-2">
                  <button className="rounded-full text-[12px] font-semibold bg-[#E0DBFF] p-3 text-[#8883F0] ">
                    Editar
                  </button>
                  <button className="rounded-full text-[12px] font-semibold bg-[#FFE0DF] p-3 text-[#EF8481] ">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className="rounded-l-[100px] rounded-r-lg"
                  src="/23df9c394ce60d455dc954325d648410 3@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center p-4">
            <div className="w-[500px]  bg-slate-100 mx-16 flex shadow-lg rounded-lg border-2">
              <div className="w-[50%] flex flex-col justify-between">
                <div className="flex gap-2 p-4 pl-6">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className=" h-[150px] absolute mt-8 flex flex-col justify-center border-l-[6px] pl-4 pb-4 border-black">
                  <h2 className="leading-6 text-[24px] font-roboto ">
                    Superman Comic
                  </h2>
                  <h3>Type</h3>
                </div>
                <div className="flex  -bottom-8 ml-3 p-4 gap-2">
                  <button className="rounded-full text-[12px] font-semibold bg-[#E0DBFF] p-3 text-[#8883F0] ">
                    Editar
                  </button>
                  <button className="rounded-full text-[12px] font-semibold bg-[#FFE0DF] p-3 text-[#EF8481] ">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className="rounded-l-[100px] rounded-r-lg"
                  src="/23df9c394ce60d455dc954325d648410 3@2x.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[500px]  bg-slate-100 mx-16 flex shadow-lg rounded-lg border-2">
              <div className="w-[50%] flex flex-col justify-between">
                <div className="flex gap-2 p-4 pl-6">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className=" h-[150px] absolute mt-8 flex flex-col justify-center border-l-[6px] pl-4 pb-4 border-black">
                  <h2 className="leading-6 text-[24px] font-roboto ">
                    Superman Comic
                  </h2>
                  <h3>Type</h3>
                </div>
                <div className="flex  -bottom-8 ml-3 p-4 gap-2">
                  <button className="rounded-full text-[12px] font-semibold bg-[#E0DBFF] p-3 text-[#8883F0] ">
                    Editar
                  </button>
                  <button className="rounded-full text-[12px] font-semibold bg-[#FFE0DF] p-3 text-[#EF8481] ">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="w-[50%] ">
                <img
                  className="rounded-l-[100px] rounded-r-lg"
                  src="/23df9c394ce60d455dc954325d648410 3@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
