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
        <div className=" mx-5 py-5 grid ">
          <div className="items-center">
            {/* <img className="mx-auto" src="/images/1.png" width="40%" /> */}
          </div>

          <div className="font-charmonman ">
            <h1 className=" py-3 text-5xl  text-yellow-400  text-center">
              ช่องทางติดต่อ
            </h1>
            <p className=" py-3 text-3xl  text-yellow-400 text-left">
               ที่ตั้ง: บรืษัท ซูกาเวีย จำกัด 299 หมู่ 8 ต.หนองสาหร่าย อ.ปากช่อง จ.นครราชสีมา 30130 <br/>
               โทรศัพท์: 089-999-9999 <br/>
               อีเมล์: Stevia_Sysup@gmail.com <br/>
               facebook: T-Active Stevia Sysup <br/>
               Line: @T_Active
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
