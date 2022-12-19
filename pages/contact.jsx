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
        
                  <div className=" mt-10 py-3 font-font02 subtitles text-center text-md">
                  <p className="py-2"> Adress : {contact.address} </p>
                  <p className="py-2">Tel : {contact.tel} </p>
                  <p className="py-2">E-mail : {contact.email} </p>
                  <p className="py-2">Facebook : {contact.facebook} </p>
                  <p className="py-2">Line : {contact.line} </p>
  
                  <br />  <br />  <br /> 
                </div>
              </div>
            </div>
        
         ))}
    </>
  );
}

/*grid justify-items-center  */
