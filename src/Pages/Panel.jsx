import React from "react";
import panel from "../assets/panel.png";

const Panel = () => {
  return(

    <div>
       
        <div className=" w-full h-screen bg-cover bg-panel">
        <h1 className=" flex justify-center items-center text-[64px] text-white pt[260px] h-[500px]">Panel</h1>
            <div className="bg-[#FFFFFF] w-full h-min-[500px] flex justify-center p-20 md:mx-8" >
                <h1 className="text-[#FF5722] text-[32px] font-semibold border-b-[5px] border-[#FF5722]">Entities</h1>
               
            </div>
        </div>
    </div>

  )
 
  
};

export default Panel;
