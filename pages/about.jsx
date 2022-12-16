import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";


export default function AboutPages() {

  const [{data: AboutData, loading, error}, getAbout] = useAxios({url: '/api/about'})

  return (
    <>


         <h1 className=" mt-20 py-28 font-font01 animate-charcter font-semibold text-center text-5xl ">ABOUT </h1>
  
          {AboutData?.map((about, index) => (
          <div className="" key={index}>
   
           <div className=" font-font01  text-center ">


          <div className=" mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
          <div className="my-auto ml-14 ">
          <img src={about.imagea1} width="80%" height="100%"/>
          </div>
 
          <div className=" mt-5 mr-10  font-font01  text-center ">
          <h1 className="animate-charcter font-semibold text-center text-4xl ">{about.title1}</h1>
          <div className=" py-3 font-font02 subtitles text-center text-[18px]"> {about.subtitle1}
           </div>
            <div
                className=" font-font02 subtitles text-center text-xl md:text-[18px]"
                dangerouslySetInnerHTML={{ __html: about?.detail1}}
              />
          </div>
        </div>
       </div>


        {/* <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" /> */}
        <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2  rounded-xl">
          <div className=" w-auto  md:hidden  my-auto">
          </div>

          <div className=" mt-28 ml-20 font-font01  text-center ">
          <h1 className=" animate-charcter font-semibold  text-center md:text-4xl ">{about.title2}</h1>
            <div className="py-3 font-font02 subtitles text-center md:text-[18px]"> {about.subtitle2}
              </div>

            <div
                className=" font-font02 subtitles text-center text-xl md:text-[18px]"
                dangerouslySetInnerHTML={{ __html: about?.detail2 }}
              />
          </div>

          <div className=" mt-14 my-auto ">
          <img className="mx-auto" src={about.imagea2} width="80%" height="100%" />
          </div>
        </div>

        {/* <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" /> */}

        <div className="  mt-10 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
          <div className="my-auto ml-14 ">
          <img src={about.imagea3} width="80%" height="100%"/>
          </div>
 
          <div className=" mt-20 font-font01  text-center ">
          <h1 className="animate-charcter font-semibold text-center text-4xl ">{about.title3}</h1>
          <div className=" py-3 font-font02 subtitles text-center text-[18px]"> {about.subtitle3}
           </div>
            <div
                className=" font-font02 subtitles text-center text-xl md: text-[18px]"
                dangerouslySetInnerHTML={{ __html: about?.detail3}}
              />
          </div>

        </div>

        <div className=" mt-20 grid gap-x-0 gap-y-0 grid-cols-3 w-full relative overflow-hidden bg-no-repeat bg-cover">

          <div className=" overflow-hidden ">
            <img className=" aspect-square hover:scale-110 transition duration-200 ease-linear" src="/images/A_16.jpg" />
          </div>
          
          <div className=" overflow-hidden ">
            <img className=" aspect-square hover:scale-110 transition duration-200  ease-linear" src="/images/A_18.jpg" />
          </div>
          <div className=" overflow-hidden ">
            <img className=" aspect-square hover:scale-110 transition duration-200  ease-linear" src="/images/A_19.jpg"  />
          </div>

          <div className=" overflow-hidden ">
            <img className=" aspect-square hover:scale-110 transition duration-200  ease-linear" src="/images/A_17.jpg"  />
          </div>

          <div className=" overflow-hidden ">
            <img className=" aspect-square hover:scale-110 transition duration-200  ease-linear" src="/images/A_19.jpg" />
          </div>

          <div className=" overflow-hidden ">
            <img className=" aspect-square hover:scale-110 transition duration-200  ease-linear" src="/images/img01.jpg"  />
          </div>

          </div>
      </div>
        ))}
    </>
  );
}
