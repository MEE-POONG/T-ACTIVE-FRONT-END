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

      <div className=" my-auto ">
            <img className="mx-auto" src="/images/A_1.png" width="30%" />
          </div>

      
          {AboutData?.map((about, index) => (
        <div className="container px-6 py-12 mx-auto" key={index}>
        <div className="  mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">

        <div className=" my-auto ">
        <img className="mx-auto" src={about.imagea1} width="50%" />
          </div>

          <div className=" font-helvethaica text-[#FFD700] text-center ">
            <h1 className=" animate-charcter text-center text-6xl ">{about.title1}</h1>
            <p className=" subtitles text-center text-3xl "> {about.subtitle1} </p>
            <p className=" subtitles text-center text-3xl"> {about.detail1} </p>
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2  rounded-xl">
          <div className=" w-auto  md:hidden  my-auto">
          </div>

          <div className="font-helvethaica text-[#FFD700] text-center ">
          <h1 className=" animate-charcter text-center text-6xl ">{about.title2}</h1>
            <p className=" subtitles text-center text-3xl"> {about.subtitle2} </p>
            <p className=" subtitles text-center text-3xl"> {about.detail2} </p>
          </div>

          <div className="w-0 md:w-auto  my-auto">
          <img className="mx-auto" src={about.imagea2} width="50%" />
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className="mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">
          <div className="my-auto">
          <img className="mx-auto" src={about.imagea3} width="50%" />
          </div>

          <div className=" font-helvethaica text-[#FFD700] text-center ">
          <h1 className="animate-charcter text-center text-6xl ">{about.title3}</h1>
            <p className=" subtitles text-center text-3xl "> {about.subtitle3} </p>
            <p className=" subtitles text-center text-3xl "> {about.detail3} </p>
          </div>

        </div>
      </div>
        ))}
    </>
  );
}
