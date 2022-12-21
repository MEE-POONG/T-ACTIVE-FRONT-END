import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function ProductsPages() {
  
  const [{data: ProductsData, loading, error}, getProducts] = useAxios({url: '/api/products'})

  return (
    <>
 
        <h1 className="animate-charcter mt-20 py-20 font-font01  font-semibold text-center text-5xl ">PRODUCTS </h1>

        <div className="container px-auto mx-auto ">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

         
        {ProductsData?.map((products, index) => (
          
          <div className="mx-1 my-1" key={index}>

          <div className="px-16 md:container md:mx-auto grid grid-cols-2" >

          <img className=" mx-auto py-10 px-10 w-auto h-auto" src={products.imagep} />
          <div className=" md:px-6">
            <h1 className="py-2 font-font01 animate-charcter font-semibold text-center text-3xl md:text-3xl "> {products.title} </h1>
            <p className=" py-1 font-font01 subtitles text-center text-1xl md:text-2xl">  {products.subtitle} </p>
            <p className=" font-font01 subtitles text-center text-xl md:text-1xl">  {products.detail} </p>

          <div className=" text-center py-5">
            <a href="https://www.facebook.com/TActiveSteviaSyrup">  <button className=" font-font01 animate-charcter font-semibold w-20 h-10 mx-5 my-5 border-double border-4 border-yellow-300/100 rounded-xl"> BUY </button> </a>  
          </div>

          </div>
       
        </div>
          </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
