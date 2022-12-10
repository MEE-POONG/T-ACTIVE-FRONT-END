import React from "react";
import Head from "next/head";
import { BsLine, BsFacebook } from "react-icons/bs";
import useAxios from "axios-hooks";

export default function ContactPages() {

  const [{ data: contactData, loading, error }, getContact] = useAxios({ url: "/api/contact",});

  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {contactData?.map((contact, index) => (
        <div className="container px-6 py-12 mx-auto" key={index}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-1">
            <div className="sm:col-span-2">
              <div className=" mx-5 py-5 grid ">
                <div className="items-center">
                  {/* <img className="mx-auto" src="/images/1.png" width="40%" /> */}
                </div>

               
                  <h1 className="font-font01 animate-charcter font-semibold text-center text-5xl ">{contact.title} </h1>

                  <div className="  py-3 font-font02 subtitles text-center text-2xl">
                  <p className="py-2"> Adress : {contact.address} </p>
                  <p className="py-2">Tel : {contact.tel} </p>
                  <p className="py-2">E-mail : {contact.email} </p>
                  <p className="py-2">Facebook : {contact.facebook} </p>
                  <p className="py-2">Line : {contact.line} </p>
                  
                  {/* <h1 className="animate-charcter font-helvethaica text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
                    Tailwind CSS
                  </h1> */}

                  <br />  <br />  <br /> 
                </div>
              </div>
            </div>
          </div>
        </div>
         ))}
    </>
  );
}

/*grid justify-items-center  */
