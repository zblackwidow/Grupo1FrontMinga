import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, updateCompany } from "../Store/actions/companyActions";
import { getAuthors, updateAuthor } from "../Store/actions/authorActions";

const Panel = () => {
  const [view, setView] = useState("companies");
  const [localCompanies, setLocalCompanies] = useState([]);
  const [localAuthors, setLocalAuthors] = useState([]);
  const { companies } = useSelector((state) => state.company);
  const { authors } = useSelector((state) => state.author);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphdmllcjJAZ21haWwuY29tIiwiaWF0IjoxNzMzNTIxNDMyLCJleHAiOjE3MzM1MjUwMzJ9.NiKGr64k8GYEIhrpOtzB1CbZY1_m0Hs0GF7jpLj9cs8";
  const dispatch = useDispatch();

  // Cargar datos iniciales
  useEffect(() => {
    dispatch(getCompanies(token));
    dispatch(getAuthors(token));
  }, [dispatch]);

  // Sincronizar el estado local con las compañías desde el store
  useEffect(() => {
    if (companies) {
      setLocalCompanies(companies);
    }
  }, [companies]);

useEffect(() => {
  if (Array.isArray(authors)) {
    setLocalAuthors(authors);
  }
}, [authors]);

  // Manejar el cambio de estado de 'active' al interactuar con el checkbox
  const handleToggleActive = (company) => {
    const updatedCompany = { ...company, active: !company.active };

    // Actualizar en el backend
    dispatch(
      updateCompany({ _id: company._id, active: updatedCompany.active }, token)
    );

    // Actualizar en el estado local
    setLocalCompanies((prevCompanies) =>
      prevCompanies.map((comp) =>
        comp._id === company._id ? updatedCompany : comp
      )
    );
  };

  const handleToggleActiveAuthor = (author) => {
    const updatedAuthor = { ...author, active: !author.active };

    

    // Enviar actualización al backend
    dispatch(updateAuthor({ author: { _id: author._id, active: updatedAuthor.active }, token }));
    
    // Actualizar el estado local de forma segura
    setLocalAuthors((prevAuthors) =>
      prevAuthors.map((auth) =>
        auth._id === author._id ? updatedAuthor : auth
      )
    );
  };

  return (
    <div className="">
      <div className="w-full h-min-screen bg-[length:w-full_721px] bg-no-repeat bg-panel px-10">
        <h1 className="flex justify-center items-center text-[64px] text-white pt-[260px] h-[500px]">
          Panel
        </h1>
        <div className="bg-[#FFFFFF] rounded-lg min-h-[500px] flex-col items-center w-full justify-center p-20">
          <div className="w-full text-center flex justify-center">
            <h1 className="text-[#FF5722] text-[32px] w-fit  font-semibold border-b-[5px] border-[#FF5722] mb-8">
              Entities
            </h1>
          </div>
      <div className="px-20">
        
          <section className="grid grid-cols-2 border-solid border-t-2 border-r-2 border-l-2 rounded-t-lg border-gray-300 ">
            <button
              onClick={() => setView("companies")}
              className={`text-[24px] py-3 font-semibold ${
                view === "companies"
                  ? " text-[#ffffff] bg-[#FF5722] rounded-tl-lg "
                  : "border-b-[3px] text-[#FF5722] rounded-tl-lg bg-[#F9F9FC] border-[#FF5722]"
              }`}
            >
              Companies
            </button>
            <button
              onClick={() => setView("authors")}
              className={`text-[24px] font-semibold ${
                view === "authors"
                  ? "text-[#ffffff] bg-[#FF5722] rounded-tr-lg"
                  : "border-b-[3px] text-[#FF5722] rounded-tr-lg bg-[#F9F9FC] border-[#FF5722]"
              }`}
            >
              Authors
            </button>
          </section>
          <table className="w-full border-collapse border border-gray-300">
            {view === "companies" ? (
              <tbody>
                {localCompanies.map((company) => (
                  <tr key={company._id} className="bg-[#F9F9FC]">
                    <td className="border border-gray-300 border-r-transparent p-2">
                      {company.name}
                    </td>
                    <td className="border border-gray-300 border-r-transparent p-2">
                      {company.website}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <img
                        src={company.photo}
                        alt={company.name}
                        className="w-8 h-8 rounded-full"
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          class="sr-only peer"
                          checked={company.active}
                          onChange={() => handleToggleActive(company)}
                        />
                        <div class="group peer bg-gray-200 rounded-full duration-300 w-10 h-5 ring-2 ring-gray-200 after:duration-300 after:bg-white peer-checked:bg-[#FF5722] peer-checked:ring-[#FF5722] after:rounded-full after:absolute after:h-4 after:w-4 after:top-[2px] after:left-[2px] after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95"></div>

                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {localAuthors.map((auth) => (
                  <tr key={auth._id} className="bg-[#F9F9FC]">
                    <td className="border border-gray-300 border-r-transparent p-2">
                      {auth.name + " " + auth.lastName}
                    </td>
                    <td className="border border-gray-300 border-r-transparent p-2">{new Date(auth.date).toLocaleDateString()}</td>
                    <td className="border border-gray-300 border-r-transparent p-2">{auth.city}</td>
                    <td className="border border-gray-300 p-2">
                      <img src={auth.photo} alt={auth.name} className="w-8 h-8 rounded-full border-r-transparent mx-auto" />
                    </td>
                    <td className="border border-gray-300 p-2">
                    <div className="flex justify-center items-center">

                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          class="sr-only peer"
                          checked={auth.active}
                          onChange={() => handleToggleActiveAuthor(auth)}
                        />
                        <div class="group peer bg-gray-200 rounded-full duration-300 w-10 h-5 ring-2 ring-gray-200 after:duration-300 after:bg-white peer-checked:bg-[#FF5722] peer-checked:ring-[#FF5722] after:rounded-full after:absolute after:h-4 after:w-4 after:top-[2px] after:left-[2px] after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95"></div>

                      </label>
                    </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Panel;
