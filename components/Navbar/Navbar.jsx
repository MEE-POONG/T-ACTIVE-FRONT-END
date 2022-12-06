import React from "react";

export default function Navbar() {
  return (
    <>

    <div className="container px-6 py-12 mx-auto">
      <div className=" container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg  font-trajan">
      <nav>
        <div className="flex flex-wrap   justify-items-center  md:gap-10 md:flex-nowrap">
          <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
            <a
              className="  px-14 py-6  text-lg font-medium text-yellow-500 dark:text-yellow-500 "
              href="/"
            >
              Home 
            </a>
            <a
              className="px-14 py-6 text-lg font-medium text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"
              href="/product"
            >
              Product
            </a>
          </div>

          <img  src="/images/logo.png" width="15%"/>
          
          <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
            <a
              className="px-14 py-6 text-lg font-medium text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"
              href="/about"
            >
              About
            </a>
            <a
              className="px-14 py-6 text-lg font-medium text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
    </div>

    
    
      
    </>
  );
}
