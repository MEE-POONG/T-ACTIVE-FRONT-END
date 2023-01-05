import React from "react";
import Head from "next/head";
import useAxios from "axios-hooks";

export default function GalleryAboutPages() {
  const [{ data: galleryAboutData, loading, error }, getAbout] = useAxios({
    url: "/api/galleryabout",
  });

  return (
    <>
      {/* gallery */}
      <div className="m-5">
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className=" grid  md:grid-cols-2 justify-items-center -m-1 md:-m-2">
              <div className="flex flex-wrap">
                {galleryAboutData?.map((galleryAbout, index) =>
                  index === 0 ? (
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img
                        className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg"
                        src={galleryAbout.image}
                      />
                    </div>
                  ) : index == 1 ? (
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img
                        className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg"
                        src={galleryAbout.image}
                      />
                    </div>
                  ) : index == 2 ? (
                    <div className="w-full p-1 md:p-2 overflow-hidden rounded-lg">
                      <img
                        className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg"
                        src={galleryAbout.image}
                      />
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </div>
              <div className="flex flex-wrap ">
                {galleryAboutData?.map((galleryAbout, index) =>
                  index === 3 ? (
                    <div className="w-full p-1 md:p-2 overflow-hidden rounded-lg">
                      <img
                        className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg"
                        src={galleryAbout.image}
                      />
                    </div>
                  ) : index == 4 ? (
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img
                        className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg"
                        src={galleryAbout.image}
                      />
                    </div>
                  ) : index == 5 ? (
                    <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
                      <img
                        className="block hover:scale-110 transition duration-200 ease-linear object-cover object-center w-full h-full rounded-lg"
                        src={galleryAbout.image}
                      />
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
