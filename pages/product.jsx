import React from "react";
import Head from "next/head";

export default function ProductPages() {
  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div>
        <div className=" mx-5 py-5 grid grid-cols-2 ">
          <div className="items-center">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>

          <div className="font-charmonman ">
            <h1 className=" py-3 text-5xl  text-yellow-400  text-center">
              น้ำหญ้าหวานกลิ่นมะลิ
            </h1>
            <p className=" py-3 text-3xl  text-yellow-400 text-center">
              หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถีพิถันทุกขั้นตอน ปลูก สกัด บรรจุ
              โดยทีมบุคคลกรคุณภาพและผู้เชี่ยวชาญ ปลอดภัยสำหรับผู้บริโภค
              ไม่ก่อให้เกิดพิษใดๆต่อร่างกาย จากหลากสาขาจึงมั่นใจว่า
              ผลิตภัณฑ์ซูกาเวีย
            </p>
          </div>
        </div>

        <div className=" mx-5 py-8 grid grid-cols-2 ">
          <div className=" font-charmonman ">
            <h1 className=" py-3 text-5xl  text-yellow-400  text-center">
              น้ำหญ้าหวานกลิ่น Originals
            </h1>
            <p className=" py-3 text-3xl  text-yellow-400 text-center">
              หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถ๊พิถันทุกขั้นตอน
            </p>
          </div>
          <div className="">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>
        </div>

        <div className=" mx-5 py-8 grid grid-cols-2 ">
          <div className="">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>

          <div className=" font-charmonman ">
            <p className=" py-3 text-3xl  text-yellow-400 text-center">
              หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถ๊พิถันทุกขั้นตอน
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
