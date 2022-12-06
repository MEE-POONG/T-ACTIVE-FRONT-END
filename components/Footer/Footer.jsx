import React from 'react';

export default function Footer(){
    return (
        <>
           
        <footer className=" font-trajan">
    <div className="container  px-14 py-1 text-sm mx-auto  ">
    <hr className="my-6 border-yellow-200 md:my-8 "/>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="py-1 text-xl font-semibold tracking-tight text-yellow-400">Subscribe our newsletter to get update.</h1>

                <div className="flex flex-col mx-auto mt-8 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-yellow-700 bg-white border rounded-md dark:bg-dark-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-yellow bg-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none  rounded-lg hover:bg-yellow-700 focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-yellow-400">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-yellow-400 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="#" className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-yellow-400  ">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                    <a href="#" className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                    <a href="#" className="text-yellow-600 transition-colors duration-300 dark:text-yellow-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
            </div>
        </div>
        
        
        <div className="flex items-center justify-between">
            <a href="#" className="text-sm  font-semibold text-yellow-400font-semibold text-yellow-400 ">Brand</a>

            <div className="flex -sm-2">
             
            <a href="#" className="mx-2 text-yellow-600 transition-colors duration-300 dark:text-yellow-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                {/* <a href="#" className="mx-2 text-yellow-600 transition-colors duration-300 dark:text-yellow-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a> */}

           
            </div>
        </div>
    </div>
</footer>
        </>
    )
}