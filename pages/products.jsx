import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function ProductsPages() {
  
  const [{data: ProductsData, loading, error}, getProducts] = useAxios({url: '/api/products'})

  return (
    <>
 
        <h1 className="mt-20 py-14 font-font01 animate-charcter font-semibold text-center text-5xl ">PRODUCTS </h1>
        <h6 className=" font-font01 subtitles text-center text-2xl ">Stevia  </h6>
        <p className="py-5 font-font01 subtitles text-center text-[20px]">
          Stevia may be used in place of table sugar in your favorite foods and beverages. A pinch of stevia 
          powder is equal to about one teaspoon of table sugar.</p>

          {ProductsData?.map((products, index) => (
        <div className="" key={index}>
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
              <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" />
                <h1 className="font-font01 animate-charcter font-semibold text-left md:text-[24px]">
                  {products.title1}   </h1>
                  <h4 className="py-2 font-font01 subtitles text-left text-2xl md:text-[18px] ">
                  {products.subtitle1} {products.detail1} </h4>

                  <div className=" mt-5 md:m-auto font-font01  text-left"> 
                   {/* <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" /> */}
                     </div> 
              </div>
            </div>



            {/* BOX2 */}
            <div className="ml-10 mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className=" mt-5 md:m-auto font-font01  text-right ">
              <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" />
                <h1 className="font-font01 animate-charcter font-semibold text-right md:text-[24px]">
                  {products.title2}  </h1>
                  <h4 className="py-2 font-font01 subtitles text-right text-2xl md:text-[18px] ">
                  {products.subtitle2} {products.detail2}  </h4>
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
   

            {/* BOX3 */}
            <div className=" font-font01  text-left ">
            <div className=" mt-10 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className="my-auto ">
                <img
                  className="mx-auto"
                  src={products.imagep3}
                  width="80px"
                  height="100px"
                />
              </div>
       
              <div className=" mt-5 md:m-auto font-font01  text-left">
              <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" />
                <h1 className="font-font01 animate-charcter font-semibold text-left md:text-[24px]">
                  {products.title3}   </h1>
                  <h4 className="py-2 font-font01 subtitles text-left text-2xl md:text-[18px] ">
                  {products.subtitle3}  {products.detail3}</h4>
          
                  <div className=" mt-5 md:m-auto font-font01  text-left"> 
                   {/* <hr className=" border-yellow-500 md:my-8 dark:border-yellow-600" /> */}
                     </div> 
            </div>
           </div>
              
           <div className=" text-center py-10">
          <a href="https://www.facebook.com/TActiveSteviaSyrup">  <button className=" font-font01 animate-charcter font-semibold w-40 h-12 mx-5 my-5 border-double border-4 border-yellow-300/100 rounded-xl"> BUY </button> </a>  
          </div>

          </div>
        </div>
      </div>
      ))}
    </>
  );
}
