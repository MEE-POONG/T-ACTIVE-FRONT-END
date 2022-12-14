import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function ProductsPages() {
  
  const [{data: ProductsData, loading, error}, getProducts] = useAxios({url: '/api/products'})

  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className=" h-screen ">
              <img className=" z-0  object-cover bg-cover brightness-50 w-full h-full absolute top-0 block" src={"/images/product/product00.jpg"} />
              <h1 className=" z-20 font-font01 animate-charcter font-semibold text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> 
               PRODUCTS
               </h1>
            </div>
    
      j
        <div className="mt-48 container px-auto py-12 mx-auto ">

        <div className=" justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
         
        {ProductsData?.map((products, index) => (
          <div className="mx-1 my-1">
          <div className=" box1 px-16 w-96 md:container md:mx-auto" key={index}>
          <img className=" mx-auto py-10 px-10 w-auto h-72" src={products.imagep} />
          <div className=" md:px-6">
            <h1 className="py-4 font-font01 animate-charcter font-semibold text-center text-3xl md:text-3xl "> {products.title} </h1>
            <p className=" py-1 font-font01 subtitles text-center text-1xl md:text-2xl">  {products.subtitle} </p>
            <p className=" font-font01 subtitles text-center text-xl md:text-1xl">  {products.detail} </p>
          </div>
          <div className=" text-center py-5">
          <a href="https://www.facebook.com/TActiveSteviaSyrup">  <button className=" font-font01 animate-charcter font-semibold w-20 h-10 mx-5 my-5 border-double border-4 border-yellow-300/100 rounded-xl"> BUY </button> </a>  
          </div>
        </div>

          </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
