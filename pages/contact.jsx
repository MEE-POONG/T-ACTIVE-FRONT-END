import React from "react";
import Head from "next/head";
import { BsLine, BsFacebook } from "react-icons/bs";
import useAxios from "axios-hooks";

export default function ContactPages() {

  const [{ data: contactData, loading, error }, getContact] = useAxios({ url: "/api/contact",});

  return (
    <>

      {contactData?.map((contact, index) => (
        <div className="mt-10 py-28 container justify-items-center px-6 mx-auto" key={index}>
        
              <div className=" mx-5 py-5 grid ">
                <div className="items-center">
                  {/* <img className="mx-auto" src="/images/1.png" width="40%" /> */}
                </div>

               
                  <h1 className="font-fontEn animate-charcter font-semibold text-center text-[33px] md:text-[45px] ">{contact.title} </h1>
        
                  <div className=" mt-10 py-3 font-fontEn subtitles text-center text-md md:text-xl ">
                  <p className="py-2"> Adress : {contact.address} </p>
                  <p className="py-2">Tel : {contact.tel} </p>
                  <p className="py-2">E-mail : {contact.email} </p>
                  <p className="py-2">Facebook : {contact.facebook} </p>
                  <p className="py-2">Line : {contact.line} </p>

                  <br />
                  <iframe src={contact.linkmap}
                      width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                      className=" mx-auto md:w-3/4 rounded-lg shadow-lg shadow-yellow-600/60 ">
                  </iframe>

  
                  <br />  <br />  <br /> 
                </div>
              </div>
            </div>
        
         ))}
    </>
  );
}

/*grid justify-items-center  */
