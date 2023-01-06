import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function Products() {
  const [{ data: ProductsData }, getProducts] = useAxios({
    url: "/api/products",
  });
  const [{ data: headproductData }, getHeadProduct] = useAxios({
    url: "/api/headproduct",
  });

  return (
    <>
    <div className="mt-10 py-2 px-20">
       {headproductData?.map((HeadProduct, index) => (
        <div key={index} className="font-fontEn">
          <h1 className="animate-charcter mt-10 py-14 font-semibold text-center text-[30px] md:text-[45px] ">
            {HeadProduct.header}{" "}
          </h1>
          <div className="subtitles py-3  grid grid-cols-6 gap-4 text-md md:text-xl ">
            <div className=" mx-5 py-5 col-start-2 col-span-4">
              <div className="text-center">
                <p>{HeadProduct.subheader}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {ProductsData?.map((products, index) =>
        index % 2 === 0 ? (
          <div className=" mt-10 mx-5 py-5 md:grid md:grid-cols-2 " key={index}>
            <div className="my-auto">
              <img
                className=" mx-auto "
                src={products.image}
                width="15%"
                height="15%"
              />
            </div>

            <div className=" mt-5  font-fontEn  text-center md:text-left md:my-auto">
              <hr className=" border-yellow-600 hidden md:block md:my-2 " />

              <h1 className="animate-charcter  font-semibold  text-[30px] md:text-[45px]">
                {products.title}
              </h1>
              <h2 className="subtitles py-2  text-[20px] md:text-[25px] ">
                {products.subtitle}
              </h2>
              <h2 className="subtitles  text-2xl md:text-[18px] ">
                {products.detail}
              </h2>
              <div className=" text-center py-10">
                <a
                 
                  href="https://www.facebook.com/TActiveSteviaSyrup"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-black "
                  data-rounded="rounded-xl"
              >

                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br  from-white via-yellow-100 to-yellow-200"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative animate-font font-semibold">BUY NOW</span>
              
                </a>
              </div>
            </div>

            <hr className=" border-yellow-600 block md:hidden md:my-2 " />
          </div>
        ) : (
          <div className="ml-10 mt-4 mx-5 py-5 md:grid md:grid-cols-2 " key={index}>
            <div className=" w-auto my-auto block md:hidden ">
              <img
                className=" mx-auto "
                src={products.image}
                width="15%"
                height="15%"
              />
            </div>
            
              <div className=" mt-5  font-fontEn text-center md:text-right  md:my-auto ">
                <hr className=" border-yellow-600 hidden md:block md:my-2 " />

                <h1 className="animate-charcter font-semibold text-[30px] md:text-[45px]">
                  {products.title}
                </h1>
                <h2 className="subtitles py-2 text-[20px] md:text-[25px] ">
                  {products.subtitle}
                </h2>
                <h2 className="subtitles text-2xl md:text-[18px] ">
                  {products.detail}
                </h2>
                <div className=" text-center py-10 ">
                <a
                  
                  href="https://www.facebook.com/TActiveSteviaSyrup"
                  className="relative  inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-black "
                  data-rounded="rounded-xl"
               >

                    <span className=" absolute  inset-0 w-full h-full bg-gradient-to-br  from-white via-yellow-100 to-yellow-200"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative animate-font font-semibold">BUY NOW</span>
                  
                 
                </a>
              </div>
              </div>

              <div className=" my-auto w-auto hidden md:block ">
                <img
                  className=" mx-auto "
                  src={products.image}
                  width="15%"
                  height="15%"
                />
              </div>

            <hr className=" border-yellow-600 block md:hidden md:my-2 " />
          </div>
        )
      )}
    </div>
     
    </>
  );
}
