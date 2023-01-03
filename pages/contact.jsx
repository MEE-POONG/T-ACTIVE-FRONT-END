import React from "react";
import Head from "next/head";
import { BsLine, BsFacebook } from "react-icons/bs";
import useAxios from "axios-hooks";

export default function ContactPages() {

  const [{ data: contactData, loading, error }, getContact] = useAxios({ url: "/api/contact",});

  return (
    <>

      {contactData?.map((contact, index) => (
        <div className="mt-20 py-28 container justify-items-center px-6 mx-auto" key={index}>
        
              <div className=" mx-5 py-5 grid ">
                <div className="items-center">
                  {/* <img className="mx-auto" src="/images/1.png" width="40%" /> */}
                </div>

               
                  <h1 className="font-font01 animate-charcter font-semibold text-center text-5xl ">{contact.title} </h1>
        
                  <div className=" mt-10 py-3 font-font01 subtitles text-center text-md md:text-xl ">
                  <p className="py-2"> Adress : {contact.address} </p>
                  <p className="py-2">Tel : {contact.tel} </p>
                  <p className="py-2">E-mail : {contact.email} </p>
                  <p className="py-2">Facebook : {contact.facebook} </p>
                  <p className="py-2">Line : {contact.line} </p>

                  <br />
                  <iframe src={contact.linkmap}
                      width="100%" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow-lg shadow-yellow-600/60 ">
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
