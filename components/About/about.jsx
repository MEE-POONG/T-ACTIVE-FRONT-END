import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";
import GalleryAbout from "../GalleryAbout/galleryAbout";


export default function About() {
  const [{ data: AboutData, loading, error }, getAbout] = useAxios({
    url: "/api/about",
  });

  const [{data: videoData, loading: videoLoading, error: videoError}, getVideolink] =  useAxios({url : '/api/videopresent'})

  if (loading || videoLoading) return <p>Loading....</p>
  if (error || videoError) return <p>Error!!</p>


  return (
    <> 
      <h1 className="mt-16 py-24 font-fontEn animate-charcter font-semibold text-center text-[33px] md:text-[45px] " >
        ABOUT{" "}
      </h1>

      <div className=" px-10 md:px-20">

      <div className="inline-flex items-center justify-center w-full">
      <hr className=" w-3/4  h-1 md:my-1 items-center justify-center border-yellow-600 hidden md:block" />
      {/* <span class="absolute px-3 font-medium font-font02 animate-charcter -translate-x-1/2 bg-gray-800 left-1/2 ">Video</span> */}
      </div>
    
      {videoData?.map((videopresent, index) =>(
        <iframe key={index}  height="100%" className=" mx-auto lg:py-5 w-[90%]  rounded-lg aspect-video" src={videopresent.linkvideo} type="video/mp4"> </iframe>
      ))}
      
      <div className="inline-flex items-center justify-center w-full">
      <hr className="  w-3/4 h-1 md:my-1 items-center justify-center border-yellow-600  hidden md:block" />
     
      </div>
      <div className=" font-fontEn  text-center ">
      {AboutData?.map((about, index) => 
        index % 2 === 0 ? (
           
            <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2 " key={index}>
              <div className="my-auto ">
                <img
                  className="mx-auto drop-shadow-lg  rounded-lg w-[100%] md:w-[80%] h-[100%]"
                  src={about.image}
                />
              </div>

              <div className=" mt-5 md:m-auto font-fontEn  text-center ">
                <h1 className="animate-charcter font-semibold text-center text-2xl md:text-4xl ">
                  {about.title}
                </h1>
                <div className=" py-3 font-fontEn subtitles text-center text-[18px] md:text-[24px]">
                  {about.subtitle}
                </div>
                <div
                  className="md:mr-10 font-fontEn subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: about?.detail}}
                />
              </div>
            </div>
        ) : (
            
                    <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2 " key={index}>
                      <div className="  w-auto my-auto block md:hidden  ">
                        <img
                          className="mx-auto drop-shadow-lg rounded-lg w-[100%] md:w-[80%] h-[100%]"
                          src={about.image}
                          width="80%"
                          height="100%"
                        />
                      </div>

                      <div className=" mt-5 md:m-auto font-fontEn  text-center ">
                        <h1 className=" animate-charcter font-semibold text-center text-2xl md:text-4xl ">
                          {about.title}
                        </h1>
                        <div className="py-3 font-fontEn subtitles text-center text-[18px] md:text-[24px]">
                          {" "}
                          {about.subtitle}
                        </div>

                        <div
                          className=" md:ml-10 font-fontEn subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
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
          <GalleryAbout/>
          
    </>
  );
}
