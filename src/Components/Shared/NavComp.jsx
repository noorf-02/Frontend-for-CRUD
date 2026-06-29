import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavComp() {
  const [ btn,setBtn ] = useState();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-100 p-2 shadow-[0_4px_14px_0_rgba(0,0,0,0.25)]">
      <div className="wrapper my-3 flex justify-between">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={()=>navigate('/')}>CRUD</h1>
        <div className="nav-list list-none flex gap-2">
          <li className="text-white bg-[#151515] px-3 py-1 rounded-full hover:bg-[#202020] cursor-pointer " onClick={()=>navigate('/products')} >
            Products
          </li>
          <li className="text-white bg-[#151515] px-3 py-1 rounded-full hover:bg-[#202020] cursor-pointer ">
            Form
          </li>
        </div>
        <div className={`btn-theme bg-[#151515] h-7 w-12 rounded-full flex items-center p-1`} onClick={()=>setBtn(!btn)}>
          <div className={`ball-theme h-5 w-5 rounded-full bg-white ${btn? 'translate-x-5' : 'translate-0'} transition-all duration-200`}></div>
        </div>
      </div>
    </nav>
  );
}

export default NavComp;
