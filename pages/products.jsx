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
    
      
        <div className="container px-6 py-12 mx-auto">

        <div className="  mt-4 ml-20 py-5 md:grid md:grid-cols-3 rounded-xl">
         
        {ProductsData?.map((products, index) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-black border-4 border-yellow-300/100" key={index}>
          <img className="mx-auto" src={products.imagep} width="50%" />
          <div class="px-6 py-4 font-helvethaica">
            <h1 className="animate-charcter text-center text-6xl "> {products.title} </h1>
            <p class="subtitles text-center text-3xl">  {products.subtitle} </p>
            <p class="subtitles text-center text-3xl">  {products.detail} </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
))}
        </div>
      </div>
      
    </>
  );
}
