import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function ProductsPages() {
  const [{ data: ProductsData }, getProducts] = useAxios({
    url: "/api/products",
  });
  const [{ data: headproductData }, getHeadProduct] = useAxios({
    url: "/api/headproduct",
  });

  return (
    <>
      {headproductData?.map((HeadProduct, index) => (
        <div key={index}>
          <h1 className="mt-32 py-14 font-font01 animate-charcter font-semibold text-center text-5xl ">
            {HeadProduct.header}{" "}
          </h1>
          <div className=" py-3 font-font02 subtitles grid grid-cols-6 gap-4 text-md md:text-xl ">
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
          <div className=" mt-10 mx-5 py-5 md:grid md:grid-cols-2 ">
            <div className="my-auto">
              <img
                className=" mx-auto "
                src={products.image}
                width="15%"
                height="15%"
              />
            </div>

            <div className=" mt-5  font-font01  text-center md:text-left md:my-auto">
              <hr className=" border-yellow-600 hidden md:block md:my-2 " />

              <h1 className="animate-charcter  font-semibold md:text-[24px]">
                {products.title}
              </h1>
              <h2 className="subtitles py-2 text-2xl md:text-[18px] ">
                {products.subtitle}
              </h2>
              <h2 className="subtitles  text-2xl md:text-[18px] ">
                {products.detail}
              </h2>
              <div className=" text-center py-10">
                <a
                  target="_blank"
                  href="https://www.facebook.com/TActiveSteviaSyrup"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-400 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-black"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-400 group-hover:-rotate-180 ease"></span>
                    <span className="relative">BUY</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-400 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>

            <hr className=" border-yellow-600 block md:hidden md:my-2 " />
          </div>
        ) : (
          <div className="ml-10 mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
            <div className=" w-auto my-auto block md:hidden ">
              <img
                className=" mx-auto "
                src={products.image}
                width="15%"
                height="15%"
              />
            </div>
            
              <div className=" mt-5  font-font01 text-center md:text-right  md:my-auto ">
                <hr className=" border-yellow-600 hidden md:block md:my-2 " />

                <h1 className="animate-charcter  md:text-[24px]">
                  {products.title}
                </h1>
                <h2 className="subtitles py-2  text-2xl md:text-[18px] ">
                  {products.subtitle}
                </h2>
                <h2 className="subtitles text-2xl md:text-[18px] ">
                  {products.detail}
                </h2>
                <div className=" text-center py-10">
                <a
                  target="_blank"
                  href="https://www.facebook.com/TActiveSteviaSyrup"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-400 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-black"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-400 group-hover:-rotate-180 ease"></span>
                    <span className="relative">BUY</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-400 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
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
    </>
  );
}
