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

      {AboutData?.map((about, index) => (
        <div className=" px-10 md:px-20" key={index}>
          <div className=" font-font01  text-center ">
            {/* BOX1 */}
            <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className="my-auto ">
                <img
                  className="mx-auto drop-shadow-lg  rounded-lg "
                  src={about.imagea1}
                  width="80%"
                  height="100%"
                />
              </div>

              <div className=" mt-5 md:m-auto font-font01  text-center ">
                <h1 className="animate-charcter font-semibold text-center text-2xl md:text-4xl ">
                  {about.title1}
                </h1>
                <div className=" py-3 font-font01 subtitles text-center text-[18px] md:text-[24px]">
                  {about.subtitle1}
                </div>
                <div
                  className="md:mr-10 font-font01 subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: about?.detail1 }}
                />
              </div>
            </div>

            {/* <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" /> */}

            {/* BOX2 */}
            <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className=" w-auto md:hidden  my-auto ">
                <img
                  className="mx-auto drop-shadow-lg rounded-lg"
                  src={about.imagea2}
                  width="80%"
                  height="100%"
                />
              </div>

              <div className=" mt-5 md:m-auto font-font01  text-center ">
                <h1 className=" animate-charcter font-semibold text-center text-2xl md:text-4xl ">
                  {about.title2}
                </h1>
                <div className="py-3 font-font01 subtitles text-center text-[18px] md:text-[24px]">
                  {" "}
                  {about.subtitle2}
                </div>

                <div
                  className=" md:ml-10 font-font01 subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: about?.detail2 }}
                />
              </div>

              <div className=" w-0 md:w-auto  my-auto">
                <img
                  className="mx-auto drop-shadow-lg rounded-lg"
                  src={about.imagea2}
                  width="80%"
                  height="100%"
                />
              </div>
            </div>

            {/* <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" /> */}

            {/* BOX3 */}

            <div className="  mt-4 mx-5 py-5 md:grid md:grid-cols-2 ">
              <div className="my-auto ">
                <img
                  className="mx-auto drop-shadow-lg rounded-lg"
                  src={about.imagea3}
                  width="80%"
                  height="100%"
                />
              </div>

              <div className=" mt-5 md:m-auto font-font01  text-center ">
                <h1 className="animate-charcter font-semibold text-center text-2xl md:text-4xl">
                  {about.title3}
                </h1>
                <div className=" py-3 font-font01 subtitles text-center text-[18px] md:text-[24px]">
                  {" "}
                  {about.subtitle3}
                </div>
                <div
                  className=" md:mr-10 font-font01 subtitles indent-12 whitespace-normal text-justify text-sm md:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: about?.detail3 }}
                />
              </div>
            </div>
          </div>

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

          {/* <div className=" mt-20 grid gap-x-0 gap-y-0 grid-cols-2  md:grid-cols-3 w-full relative overflow-hidden bg-no-repeat bg-cover">
            <div className=" overflow-hidden ">
              <img
                className="aspect-square hover:scale-110 transition duration-200 ease-linear"
                src="/images/A_16.png"
              />
            </div>

            <div className=" overflow-hidden ">
              <img
                className=" aspect-square hover:scale-110 transition duration-200  ease-linear"
                src="/images/A_18.png"
              />
            </div>
            <div className=" overflow-hidden ">
              <img
                className=" aspect-square hover:scale-110 transition duration-200  ease-linear"
                src="/images/A_19.png"
              />
            </div>

            <div className=" overflow-hidden ">
              <img
                className=" aspect-square hover:scale-110 transition duration-200  ease-linear"
                src="/images/A_17.png"
              />
            </div>

            <div className=" overflow-hidden ">
              <img
                className=" aspect-square hover:scale-110 transition duration-200  ease-linear"
                src="/images/A_19.png"
              />
            </div>

            <div className=" overflow-hidden ">
              <img
                className=" aspect-square hover:scale-110 transition duration-200  ease-linear"
                src="/images/img01.png"
              />
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
}
