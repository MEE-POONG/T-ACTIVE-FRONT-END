import React from "react";
import Head from "next/head";

export default function ContactPages() {
  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div>
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-1">
            <div className="sm:col-span-2">
              <div className=" mx-5 py-5 grid ">
                <div className="items-center">
                  {/* <img className="mx-auto" src="/images/1.png" width="40%" /> */}
                </div>

                <div className="font-trajan ">
                  <h1 className=" py-3 text-3xl text-yellow-400  text-center">
                    My Contact
                  </h1>
                    {/* <hr className="my-6 border-yellow-200 md:my-8 "/>     */}
                  <p className="text-yellow-400 text-center space-y-2 ">   
                    Address : 299 Moo 8, Nong Sarai Subdistrict, Pak Chong District <br />  
                    Nakhon Ratchasima Province 30130 Sugavia Co., Ltd. <br />  
                    Phone : 089-999-9999 <br />
                    E-mail : Stevia_Sysup@gmail.com <br />
                    facebook : T-Active Stevia Sysup <br />
                    Line : @T_Active
                  </p>


                  <br /> <br /> <br /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 /*grid justify-items-center  */