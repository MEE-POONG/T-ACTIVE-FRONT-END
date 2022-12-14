import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";


export default function AboutPages() {

  const [{data: AboutData, loading, error}, getAbout] = useAxios({url: '/api/about'})

  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
{/* 

      <div className=" my-auto ">
            <img className="mx-auto" src="/images/A_1.png" width="30%" />
          </div> */}

      
          {AboutData?.map((about, index) => (
         <div className="" key={index}>
           
         <div className="">
           <div className=" h-screen ">
             <img className=" z-0 object-cover bg-cover  opacity-100 w-full h-full absolute top-0 block" src={"/images/A_5.jpg"} />
             <div className=" z-10 bg-black bg-opacity-70 object-cover bg-cover  opacity-100 w-full h-full absolute top-0 block "></div>
           <h1 className=" z-20 font-font01 animate-charcter font-semibold text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">  About Us </h1>
           </div>

         
           <div className=" mt-32 font-font01  text-center ">
          {/* <h1 className="animate-charcter font-semibold text-center text-4xl "> Our </h1> */}
          <div className=" py-3 font-font02 subtitles text-center text-2xl flex justify-around "> 
       
          <div > <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0 CALORLE </div>
          <div > <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0 SUGAR </div>
          <div > <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0 SODIUM </div>
          </div>
          </div>


          <div className="  mt-10 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
          <div className="my-auto">
          <img className=" ml-48 " src={about.imagea1} width="100px" height="100%"/>
          </div>
 
          <div className=" mt-32 font-font01  text-center ">
          <h1 className="animate-charcter font-semibold text-center text-4xl ">{about.title1}</h1>
          <div className=" py-3 font-font02 subtitles text-center text-2xl"> {about.subtitle1}
           </div>
            <div
                className=" font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: about?.detail1}}
              />
          </div>
        </div>
       </div>


        {/* <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" /> */}
        <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2  rounded-xl">
          <div className=" w-auto  md:hidden  my-auto">
          </div>

          <div className=" mt-28 font-font01  text-center ">
          <h1 className=" animate-charcter font-semibold  text-center text-4xl ">{about.title2}</h1>
            <div className="py-3 font-font02 subtitles text-center text-2xl"> {about.subtitle2}
              </div>

            <div
                className=" font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: about?.detail2 }}
              />
          </div>

          <div className="w-0 md:w-auto  my-auto">
          <img className="mx-auto" src={about.imagea2} width="100px" />
          </div>
        </div>

        {/* <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" /> */}

        <div className="  mt-10 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
          <div className="my-auto">
          <img className=" ml-40" src={about.imagea3} width="50%" height="100%"/>
          </div>
 
          <div className=" mt-32 font-font01  text-center ">
          <h1 className="animate-charcter font-semibold text-center text-4xl ">{about.title3}</h1>
          <div className=" py-3 font-font02 subtitles text-center text-2xl"> {about.subtitle3}
           </div>
            <div
                className=" font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: about?.detail3}}
              />
          </div>

        </div>

        <div class=" mt-20 grid gap-x-0 gap-y-0 grid-cols-3 w-full relative overflow-hidden bg-no-repeat bg-cover">
            <img class=" aspect-square hover:scale-110 transition duration-300 ease-in-out" src="/images/A_16.jpg" />
            <img class=" aspect-square hover:scale-110 transition duration-300 ease-in-out" src="/images/A_18.jpg" />
            <img class=" aspect-square hover:scale-110 transition duration-300 ease-in-out" src="/images/A_19.jpg"  />
            <img class=" aspect-square hover:scale-110 transition duration-300 ease-in-out" src="/images/A_17.jpg"  />
            <img class=" aspect-square hover:scale-110 transition duration-300 ease-in-out" src="/images/A_19.jpg" />
            <img class=" aspect-square hover:scale-110 transition duration-300 ease-in-out" src="/images/img01.jpg"  />
  
          
          </div>
      </div>
        ))}
    </>
  );
}
