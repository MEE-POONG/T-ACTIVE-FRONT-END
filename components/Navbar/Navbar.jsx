import React, { useState } from "react";
import { FiAlignJustify,FiMinus } from "react-icons/fi";
export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  return (
    <>
<div className=" z-10">

<nav>

<div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
  <div className=" z-10 absolute ">
      <a href="/" className=" md:flex items-center">
      <img src="/images/logo.png" className="  py-5 px-5 h-10  m-auto md:h-44 " alt="T-ACTIVE Logo" />
  </a>
  </div>


  <div className=" z-10 absolute right-0 mt-5 bg-black bg-opacity-80 rounded-3xl font-font01 px-10 py-5 text-yellow-500  flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:order-none">
    <a href="/" className=" block py-2 pl-3 pr-4 ">Home</a>
    <a href="/about" className="block py-2 pl-3 pr-4">About</a>
    <a href="/products" className="block py-2 pl-3 pr-4 ">Product</a>
    <a href="/contact" className="block py-2 pl-3 pr-4 ">Contact</a>
  </div>



  <button  id="btn" type="button" className="inline-flex items-center p-2 mr-5 text-sm text-yellow-500  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-yellow-200 " onClick={() => setNavbar(!navbar)} >

    {navbar ? (
                                  <FiMinus/>
                              ) : (
                                  <FiAlignJustify/>
                              )}
  </button>

  <div className={`w-full md:hidden ${ navbar ? "block" : "hidden" }`}>
    <ul className=" static right-0  mt-2 font-font01 md:hidden text-right text-yellow-500 ">
      <li>
        <a href="/" className="block py-2 pl-3 pr-4">Home</a>
      </li>
      <li>
        <a href="/about" className="block py-2 pl-3 pr-4">About</a>
      </li> 
      <li>
        <a href="/products" className="block py-2 pl-3 pr-4 ">Product</a>
      </li>
      <li>
        <a href="/contact" className="block py-2 pl-3 pr-4 ">Contact</a>
      </li>
    </ul>
  </div> 
</div>
</nav>

</div>
  
    </>
  );
}
