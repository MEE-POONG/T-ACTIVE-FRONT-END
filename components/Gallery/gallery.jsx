import React from "react";
import Head from "next/head";
import { BsLine, BsFacebook } from "react-icons/bs";
import useAxios from "axios-hooks";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import {EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Gallery() {

  const [{ data: galleryData, loading, error }, getContact] = useAxios({ url: "/api/gallery",});

  return (
    <>
    <div className="mt-20 py-28 container justify-items-center px-6 mx-auto" >
      
        
            <Swiper 
            // breakpoints={{
            //   480: { slidesPerView: 1 ,spaceBetween: 30 },
            //   1024:{ slidesPerView: 3 ,spaceBetween: 30 },
            // }}
            // loop={true}
            // loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            //  effect={"coverflow"}
            //  slidesPerView={"auto"}
            //  coverflowEffect={{
            //    rotate: 50,
            //    stretch: 0,
            //    depth: 100,
            //    modifier: 1,
            //    slideShadows: true,
            //  }}
            //  navigation={true} 
            //  modules={[EffectCoverflow, Pagination,Navigation]}
            //  className="mySwiper"

            >

            {galleryData?.map((gallery, index) => (
            <SwiperSlide className="overflow-hidden" key={index}><img className="block hover:scale-110 transition duration-200 ease-linear object-cover rounded-lg" src={gallery.image} /></SwiperSlide>
            ))}

            </Swiper>
        
         
         </div>
    </>
  );
}

/*grid justify-items-center  */
