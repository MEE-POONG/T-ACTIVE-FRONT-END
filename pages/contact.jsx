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

                <div className="font-charmonman ">
                  <h1 className=" py-3 text-5xl  text-yellow-400  text-center">
                    ช่องทางติดต่อ
                  </h1>
                    {/* <hr className="my-6 border-yellow-200 md:my-8 "/> */}
                  <p className="grid justify-items-center py-1 text-3xl  text-yellow-400  "> 
                    ที่ตั้ง: บรืษัท ซูกาเวีย จำกัด 299 หมู่ 8 ต.หนองสาหร่าย อ.ปากช่อง จ.นครราชสีมา 30130 <br />  
                    โทรศัพท์: 089-999-9999 <br />
                    อีเมล์: Stevia_Sysup@gmail.com <br />
                    facebook: T-Active Stevia Sysup <br />
                    Line: @T_Active
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
