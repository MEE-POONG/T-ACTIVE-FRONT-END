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
          <a href="https://www.facebook.com/TActiveSteviaSyrup">  <button type="button" class="animate-charcter font-font01 font-semibold w-28 h-12 mx-5 my-5 border-4 border-yellow-300/100 rounded-xl"> BUY </button> </a>  
          </div>

          </div>
        </div>
      </div>

      ))}
    </>
  );
}
