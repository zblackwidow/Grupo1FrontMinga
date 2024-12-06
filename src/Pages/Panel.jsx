import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../Store/actions/companyActions";
import { getAuthors } from "../Store/actions/authorActions";

const Panel = () => {
  const [view, setView] = useState("companies"); // Estado para alternar entre "companies" y "authors"
  const { companies } = useSelector((state) => state.company);
  const { author } = useSelector((state) => state.author);
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphdmllcjJAZ21haWwuY29tIiwiaWF0IjoxNzMzNDUxMjU1LCJleHAiOjE3MzM0NTQ4NTV9.T2KLrYVQAOzzTFf-hc38mHS6aDuEB4qXHqZfNCD3VlU"
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies(token))
    dispatch(getAuthors(token));
  }, [dispatch]);

  console.log(companies);
  console.log(author);
  
  

  // Simulando datos para Companies y Authors
  const companiess = [
    { name: "Blue Team", url: "www.blueteam.com" },
    { name: "Red Team", url: "www.redteam.com" },
    { name: "Orange Team", url: "www.orangeteam.com" },
    { name: "Purple Team", url: "www.purpleteam.com" },
  ];

  const authorss = [
    { name: "Author 1", profile: "Profile 1" },
    { name: "Author 2", profile: "Profile 2" },
    { name: "Author 3", profile: "Profile 3" },
    { name: "Author 4", profile: "Profile 4" },
  ];

  return (
    <div>
      {/* Header con imagen de fondo */}
      <div className="w-full h-screen bg-cover bg-center bg-panel px-10">
        <h1 className="flex justify-center items-center text-[64px] text-white pt-[260px] h-[500px]">
          Panel
        </h1>
        <div className="bg-[#FFFFFF] rounded-lg min-h-[500px] flex-col items-center w-full justify-center p-20">
          <div className="w-full text-center flex justify-center">
            <h1 className="text-[#FF5722] text-[32px] w-fit  font-semibold border-b-[5px] border-[#FF5722] mb-8">
              Entities
            </h1>
          </div>

          {/* Sección de botones */}
          <section className="grid  grid-cols-2 border-solid  border-t-2 border-r-2 border-l-2 rounded-t-lg border-gray-300 ">
            <button
              onClick={() => setView("companies")}
              className={`text-[24px] font-semibold ${
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
                  : "border-b-[3px] text-[#FF5722] rounded-tr-lg bg-[#F9F9FC]  border-[#FF5722]"
              }`}
            >
              Authors
            </button>
          </section>

          {/* Tabla dinámica */}
          <table className="w-full border-collapse border border-gray-300">
            {view === "companies" ? (
              <>
                <thead className="w-full">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">
                      Companies
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {companiess.map((company, index) => (
                    <tr key={index} className="w-full">
                      <td className="border border-gray-300 p-2">
                        {company.name}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {company.url}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            ) : (
              <>
                <thead className="w-full">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">
                      Authors
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Profile
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {authorss.map((author, index) => (
                    <tr key={index} className="w-full">
                      <td className="border border-gray-300 p-2">
                        {author.name}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {author.profile}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Panel;
