import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="container px-6 py-12 mx-auto">
        <div className=" mx-5 py-5 grid grid-cols-2 ">
          <div className="items-center">
            <img className="mx-auto" src="/images/1.png" width="40%" />
          </div>

          <div className="">
            <h1 className=" font-trajan  py-3 text-5xl  text-yellow-400  text-center">
              STEVIA
            </h1>
            <p className=" font-charmonman py-3 text-3xl  text-yellow-400 text-center">
              หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถีพิถันทุกขั้นตอน ปลูก สกัด บรรจุ
              โดยทีมบุคคลกรคุณภาพและผู้เชี่ยวชาญ ปลอดภัยสำหรับผู้บริโภค
              ไม่ก่อให้เกิดพิษใดๆต่อร่างกาย จากหลากสาขาจึงมั่นใจว่า
              ผลิตภัณฑ์ซูกาเวีย
            </p>
          </div>
        </div>
        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700"/>

        <div className=" mx-5 py-5 grid grid-cols-2 ">

        <div className=" mx-5 py-5 grid grid-cols-2 ">
          <div className="items-center">
            <img className="mx-auto" src="/images/img01.jpg" width="100%" />
          </div>

          <div className="font-charmonman">
            <h1 className="py-3 text-5xl  text-yellow-400  text-center">
              คุณสมบัติของสินค้า
            </h1>
            <p className="  py-3 text-3xl  text-yellow-400 text-center">
              หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถีพิถันทุกขั้นตอน ปลูก สกัด บรรจุ
              โดยทีมบุคคลกรคุณภาพและผู้เชี่ยวชาญ ปลอดภัยสำหรับผู้บริโภค
              ไม่ก่อให้เกิดพิษใดๆต่อร่างกาย จากหลากสาขาจึงมั่นใจว่า
              ผลิตภัณฑ์ซูกาเวีย
            </p>
          </div>
        </div>

        <div className=" mx-5 py-5 grid grid-cols-2 ">
        

          <div className="font-charmonman">
            <h1 className="py-3 text-5xl  text-yellow-400  text-center">
              โรงงานบรรจุขวด
            </h1>
            <p className="  py-3 text-3xl  text-yellow-400 text-center">
              หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถีพิถันทุกขั้นตอน ปลูก สกัด บรรจุ
              โดยทีมบุคคลกรคุณภาพและผู้เชี่ยวชาญ ปลอดภัยสำหรับผู้บริโภค
              ไม่ก่อให้เกิดพิษใดๆต่อร่างกาย จากหลากสาขาจึงมั่นใจว่า
              ผลิตภัณฑ์ซูกาเวีย
            </p>
          </div>

            <div className="items-center">
            <img className="mx-auto" src="/images/7.png" width="100%" />
          </div>
        </div>

        </div>

        <div>
          <div>

          </div>

          <div>

          </div>  
        </div>





      </div>
    </>
  );
}
