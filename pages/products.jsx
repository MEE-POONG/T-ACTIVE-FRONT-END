import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function ProductsPages() {
  
  const [{data: ProductsData, loading, error}, getProducts] = useAxios({url: '/api/products'})

  return (
    <>
        
        
          {ProductsData?.map((products, index) => (
        <div className="" key={index}>

           <h1 className="mt-32 py-14 font-font01 animate-charcter font-semibold text-center text-5xl ">
         {products.header} </h1>
        <div className=" py-3 font-font02 subtitles grid grid-cols-6 gap-4 text-md md:text-xl ">
          
         <div className=" mx-5 py-5 col-start-2 col-span-4">
          <div className="text-center">
           <p>{products.subheader}</p>
        </div>
      </div>
      
        </div>

        <div className=" ml-48 mt-5 md:max-w-6xl relative  p-3 rounded-lg shadow-lg shadow-yellow-600/60 overflow-hidden">
                <div className="absolute -top-6 -left-10 w-72 h-72 bg-yellow-900/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 -right-4 w-56 h-56 bg-yellow-700/75 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 -left-5 w-60 h-60 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              
      
      
          <div className=" font-font01  text-left ">
            {/* BOX1 */}
            <div className=" mt-10 mx-5 py-5 md:grid md:grid-cols-2 ">
              
              <div className="my-auto ">
                <img
                  className="mx-auto"
                  src={products.imagep1}
                  width="80px"
                  height="100px"
                />
              </div>
       
              <div className=" mt-5 md:m-auto font-font01  text-left">
              <hr className=" border-yellow-500 md:my-2 dark:border-yellow-600" />
                <h1 className="font-font01 animate-charcter font-semibold text-left md:text-[24px]">
                  {products.title1}   </h1>
                  <h4 className="py-2 font-font01 subtitles text-left text-2xl md:text-[18px] ">
                  {products.subtitle1} </h4>
                  <h4 className=" font-font01 subtitles text-left text-2xl md:text-[18px] ">{products.detail1}</h4> 

                  <div className=" mt-5 md:m-auto font-font01  text-left"> 
                   {/* <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" /> */}
                     </div> 
              </div>
            </div>



            {/* BOX2 */}
            <div className=" font-font01  text-right ">
            <div className="ml-10 mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className=" mt-5 md:m-auto font-font01  text-right ">
              <hr className=" border-yellow-500 md:my-2 dark:border-yellow-600" />
                <h1 className="font-font01 animate-charcter font-semibold text-right md:text-[24px]">
                  {products.title2}  </h1>
                  <h4 className="py-2 font-font01 subtitles text-right text-2xl md:text-[18px] ">
                  {products.subtitle2}</h4>
                  <h4 className=" font-font01 subtitles text-right text-2xl md:text-[18px] ">{products.detail2}</h4> 
                  {/* <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" /> */}
                  </div>
              <div className="my-auto ">
                <img
                  className=" mx-auto "
                  src={products.imagep2}
                  width="80px"
                  height="100px"
                /> 
              </div>
              </div>
              </div>
   

            {/* BOX3 */}
            <div className=" font-font01  text-left ">
            <div className=" mt-10 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className="my-auto ">
                <img
                  className=" mx-auto"
                  src={products.imagep3}
                  width="90px"
                  height="100px"
                />
              </div>
       
              <div className=" mt-5 md:m-auto font-font01  text-left">
              <hr className=" border-yellow-500 md:my-2 dark:border-yellow-600" />
                <h1 className="font-font01 animate-charcter font-semibold text-left md:text-[24px]">
                  {products.title3}   </h1>
                  <h4 className="py-2 font-font01 subtitles text-left text-2xl md:text-[18px] ">
                  {products.subtitle3}</h4>
                  <h4 className="font-font01 subtitles text-left text-2xl md:text-[18px] ">{products.detail3}</h4> 
          
                  <div className=" mt-5 md:m-auto font-font01  text-left"> 
                   {/* <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" /> */}
                     </div> 
            </div>
           </div>
              
          <div className=" text-center py-10">
                    <a target="_blank" href="https://www.facebook.com/TActiveSteviaSyrup" className="relative inline-block text-lg group">
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-400 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black ">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-black"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-400 group-hover:-rotate-180 ease"></span>
                      <span className="relative">BUY</span>
                      </span>
                      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-400 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
          </div>
          </div>

          </div>
          </div>
          </div>


      ))}
     
    </>
  );
}
