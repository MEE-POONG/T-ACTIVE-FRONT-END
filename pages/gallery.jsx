import React from "react";
import Head from "next/head";
import { BsLine, BsFacebook } from "react-icons/bs";
import useAxios from "axios-hooks";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function GalleryPages() {

  const [{ data: galleryData, loading, error }, getContact] = useAxios({ url: "/api/gallery",});

  return (
    <>
    <div className="mt-20 py-28 container justify-items-center px-6 mx-auto" >
      
        
            <Swiper 
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
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
