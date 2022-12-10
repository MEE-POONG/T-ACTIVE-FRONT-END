import React from "react";

export default function Navbar() {
  return (
    <>
<div className=" sticky top-0 bg-black bg-opacity-80 py-2 mx-auto ">

  <nav>

  <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">

    <div className="font-font01 font-semibold text-yellow-500 flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
      <a href="/" className=" block py-2 pl-3 pr-4 ">Home</a>
      <a href="/about" className="block py-2 pl-3 pr-4">About</a>
    </div>

    <a href="/" className="flex items-center">
        <img src="/images/logo.png" className="h-16  m-auto sm:h-20" alt="T-ACTIVE Logo" />
    </a>

    <div className=" font-font01 font-semibold text-yellow-500  flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
      <a href="/products" className="block py-2 pl-3 pr-4 ">Product</a>
      <a href="/contact" className="block py-2 pl-3 pr-4 ">Contact</a>
    </div>

    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className=" hidden text-[#ffffff] flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 ">Home</a>
        </li>
        <li>
          <a href="/about" className="block py-2 pl-3 pr-4">About</a>
        </li> 
        <li>
          <a href="/product" className="block py-2 pl-3 pr-4 ">Product</a>
        </li>
        <li>
          <a href="/contact" className="block py-2 pl-3 pr-4 ">Contact</a>
        </li>
      </ul>
    </div> */} 
  </div>
</nav>

</div>
  
    </>
  );
}
