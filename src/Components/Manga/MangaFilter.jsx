import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";

export default function FilterManga(){
        return(
                <div className="relative w-4/5 sm:w-2/3 lg:w-1/2">
                <div className="absolute inset-y-0 left-0 flex items-center mt-10 pl-1 text-gray-500">
                  <FiSearch size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Find your manga here"
                  className="w-full pl-8 mt-10 pr-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
        )
}
