import React from "react";
import { BsLine, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className=" font-helvethaica ">
        <div className="container  px-14 py-1 text-sm mx-auto  ">
          <hr className="my-6 border-yellow-200 md:my-8 " />
          <div className="grid gap-5 lg:grid-cols-6">
            <div className=" sm:col-span-2 ">
              <h1 className=" ml-12 py-1 text-2xl font-semibold tracking-tight text-yellow-400">
                Subscribe our newsletter to get update.
              </h1>

              <div className=" flex flex-col mx-auto mt-2 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className=" ml-12  px-3 py-2.5 text-xl text-yellow-700 bg-white border rounded-md dark:bg-dark-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className=" text-xl w-full px-6 py-2.5 text-sm font-medium tracking-wider text-yellow bg-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none  rounded-lg hover:bg-yellow-700 focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>
       
            <div className="sm:col-span-2">
              <p className="font-semibold text-yellow-400"> </p>
              <div className="flex flex-col items-start mt-5 ml-20">
             <img
                    src="/images/logo.png"
                    className="h-20  ml-20"
                    alt="T-ACTIVE Logo"
                  />
              </div>
            </div>
         
            <div>
              <p className=" ml-8 text-2xl  font-semibold text-yellow-400">Quick Link</p>
              <div className="ml-8 text-base  flex flex-col items-start mt-0 space-y-2">
                <a
                  href="/"
                  className=" text-yellow-400 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About
                </a>
                <a
                  href="/product"
                  className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Product
                </a>
                <a
                  href="/contact"
                  className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className=" ml-10 text-2xl font-semibold text-yellow-400 ">Contacts</p>

              <div className=" ml-10  text-base flex flex-col items-start mt-5 space-y-3">
                <a href="#"
                  className=" mx-7 h-9 text-yellow-600 transition-colors duration-300 dark:text-yellow-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"><BsLine /> 
                 <a href="#"
                  className=" mx-2 text-yellow-600 transition-colors duration-300 dark:text-yellow-300 hover:text-blue-500 dark:hover:text-blue-400"
                 aria-label="Facebook" ><BsFacebook /></a></a>
               
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
