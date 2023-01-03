import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function AboutPages() {
  const [{ data: AboutData, loading, error }, getAbout] = useAxios({
    url: "/api/about",
  });

  return (
    <>
      <h1 className="mt-20 py-28 font-font01 animate-charcter font-semibold text-center text-5xl ">
        ABOUT{" "}
      </h1>

      <iframe  class=" mx-auto  w-3/4  rounded-lg aspect-video" src="/video/Final.mp4" type="video/mp4"> </iframe>

      <div className=" px-10 md:px-20">
      <div className=" font-font01  text-center ">
      {AboutData?.map((about, index) => 
        index % 2 === 0 ? (
           
            <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className="my-auto ">
                <img
                  className="mx-auto drop-shadow-lg  rounded-lg w-[100%] md:w-[80%] h-[100%]"
                  src={about.image}
                />
              </div>

              <div className=" mt-5 md:m-auto font-font01  text-center ">
                <h1 className="animate-charcter font-semibold text-center text-2xl md:text-4xl ">
                  {about.title}
                </h1>
                <div className=" py-3 font-font01 subtitles text-center text-[18px] md:text-[24px]">
                  {about.subtitle}
                </div>
                <div
                  className="md:mr-10 font-font01 subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: about?.detail}}
                />
              </div>
            </div>
        ) : (
            
                    <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
                      <div className="  w-auto my-auto block md:hidden  ">
                        <img
                          className="mx-auto drop-shadow-lg rounded-lg w-[100%] md:w-[80%] h-[100%]"
                          src={about.image}
                          width="80%"
                          height="100%"
                        />
                      </div>

                      <div className=" mt-5 md:m-auto font-font01  text-center ">
                        <h1 className=" animate-charcter font-semibold text-center text-2xl md:text-4xl ">
                          {about.title}
                        </h1>
                        <div className="py-3 font-font01 subtitles text-center text-[18px] md:text-[24px]">
                          {" "}
                          {about.subtitle}
                        </div>

                        <div
                          className=" md:ml-10 font-font01 subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
                          dangerouslySetInnerHTML={{ __html: about?.detail }}
                        />
                      </div>

                      <div className="my-auto w-auto hidden md:block">
                        <img
                          className="mx-auto drop-shadow-lg rounded-lg"
                          src={about.image}
                          width="80%"
                          height="100%"
                        />
                      </div>
                    </div>
        )    
    )} 
      </div>
      </div>
      {/* gallery */}
          <div className="m-5">
            <section className="overflow-hidden text-gray-700">
              <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <div className=" grid  md:grid-cols-2 justify-items-center -m-1 md:-m-2">
                  <div className="flex flex-wrap">
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img  className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg" src="/images/A_16.png"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img  className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg" src="/images/A_18.png"/>
                    </div>
                    <div className="w-full p-1 md:p-2 overflow-hidden rounded-lg">
                      <img  className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg" src="/images/A_19.png"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap ">
                    <div className="w-full p-1 md:p-2 overflow-hidden rounded-lg">
                      <img  className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg" src="/images/A_17.png"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img  className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg" src="/images/A_19.png"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img  className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg" src="/images/img01.png"/>
                    </div>
                  </div>
                </div>
              </div>  
            </section>
          </div>
          
    </>
  );
}
