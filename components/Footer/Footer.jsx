import React from "react";
import { BsLine, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className=" font-font01 animate-charcter">
        <div className="container  px-10 py-1 text-sm mx-auto  ">
          <hr className="my-6 border-yellow-200 md:my-8 " />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6 m-auto">
            <div className=" col-span-1 md:col-span-2 ">
              <h1 className=" ml-10 py-1 text-sm font-semibold tracking-tight text-yellow-400">
                Subscribe our newsletter to get update.
              </h1>

              <div className=" flex flex-col mx-auto mt-2 space-y-3 md:space-y-0 md:flex-row ">
                <input
                  id="email"
                  type="text"
                  className=" ml-10  px-3 py-2.5 text-sm text-yellow-500 bg-white border-yellow-300 border rounded-md dark:bg-dark-900 dark:text-gray-300 yellow:border-yellow-300 focus:border-yellow-300 dark:focus:border-yellows-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-yellow-300"
                  placeholder="Email Address"
                />

                <button className=" text-sm w-full px-6 py-2.5  font-medium tracking-wider text-yellow-500 bg-white transition duration-300 ease-in-out  transform md:w-auto md:mx-4 focus:outline-none  rounded-lg hover:bg-yellow-700 focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <p className="font-semibold text-yellow-400"> </p>
              <div className="flex flex-col items-start mt-5 ml-20">
                <img
                  src="/images/logo.png"
                  className="h-20  ml-20"
                  alt="T-ACTIVE Logo"
                />
              </div>
            </div>

            <div >
              <p className=" ml-8 text-sm font-semibold text-yellow-400">
                Quick Link
              </p>
              <div className="ml-8 text-base  flex flex-col items-start mt-0 py-2">
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

            <div className=" ">
              <p className=" ml-10 text-sm font-semibold text-yellow-400">
                Contacts
              </p>

              <div className=" ml-10 mt-5 text-base items-start ">
                <a
                  href="#"
                  className=" py-3 h-9 text-yellow-300 transition-colors duration-300 dark:text-yellow-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <BsLine />
                </a>
                <a
                  href="#"
                  className=" mx-7 h-9 text-yellow-300 transition-colors duration-300 dark:text-yellow-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <BsFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
