import React  from "react";
import { BsLine, BsFacebook } from "react-icons/bs";
import {Link} from 'react-scroll';

export default function Footer() {
  return (
    <>
      <footer className="font-fontEns">
        <div className="container  px-10 py-1 text-sm mx-auto  ">

          <hr className="my-6 border-yellow-200 md:my-8 " />

          <div className=" grid gap-5 grid-cols-2 lg:grid-cols-6 m-auto">
            <div className="col-span-2 text-center ">

              <h1 className=" animate-charcter  py-1 text-sm font-semibold tracking-tight text-yellow-400">
                Subscribe our newsletter to get update.
              </h1>

              <div className=" flex flex-col items-center mx-auto mt-2 space-y-3 md:space-y-0  ">
                
              
                <input className=" placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm" 
                placeholder="Email" 
                type="text" 
                name="Email"/>

                <div className=" text-center py-10">
                <a
                 
                  href="https://www.facebook.com/TActiveSteviaSyrup"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-black "
                  data-rounded="rounded-xl"
              >

                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br  from-white via-yellow-100 to-yellow-200"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative animate-font font-semibold">Subscribe</span>
              
                </a>
              </div>

              </div>
            </div>

            <div className="col-span-2">
              <div className="flex flex-col items-center ">
                <img
                  src="/images/logo.png"
                  className="h-20"
                  alt="T-ACTIVE Logo"
                />
              </div>
            </div>

            <div className=" text-center" >
              <p className="animate-charcter  text-sm font-semibold text-yellow-400">
                Quick Link
              </p>
              <div className=" text-base  flex flex-col mt-0 py-2 items-center">
                <Link
                  to="Home" spy={true} smooth={true} offset={0} duration={700}
                  className=" text-yellow-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                   to="About" spy={true} smooth={true} offset={0} duration={700}
                  className="text-yellow-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  About
                </Link>
                <Link
                  to="Product" spy={true} smooth={true} offset={0} duration={700}
                  className="text-yellow-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Product
                </Link>
                <Link
                  to="Contact" spy={true} smooth={true} offset={0} duration={700}
                  className="text-yellow-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="animate-charcter text-center">

              <p className="text-sm font-semibold text-yellow-400">
                Contacts
              </p>

              <div className=" text-base  flex flex-col mt-0 py-1 items-center">

                <a
                  href="#"
                  className=" my-2 transition-colors duration-300  hover:text-blue-500 "
                  aria-label="Facebook"
                >
                  <BsLine />
                </a>
                <a
                  href="https://www.facebook.com/TActiveSteviaSyrup"
                  className=" my-2 transition-colors duration-300  hover:text-blue-500 "
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
