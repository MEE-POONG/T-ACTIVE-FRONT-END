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
    
      j
        <div className="container px-auto py-12 mx-auto ">

        <div className=" justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
         
        {ProductsData?.map((products, index) => (
          <div className="mx-1 my-1">
          <div class=" box1 px-16 w-72 h-auto" key={index}>
          <img className="mx-auto py-10 px-10  w-auto h-72" src={products.imagep} />
          <div class=" py-4 md:px-6">
            <h1 className=" font-font01 animate-charcter text-center text-3xl md:text-4xl "> {products.title} </h1>
            <p class=" font-font01 subtitles text-center text-1xl md:text-2xl">  {products.subtitle} </p>
            <p class=" font-font02 subtitles text-center text-xl md:text-1xl">  {products.detail} </p>
          </div>
          <div class=" text-center">
              <button className="w-20 h-10 mx-5 my-5 bg-white border-double border-4 border-yellow-300/100 rounded-xl"> BUY </button>
          </div>
        </div>

          </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
