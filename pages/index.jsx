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
        <div className=" mx-5 py-5 md:grid md:grid-cols-2 ">
          <div className="my-auto">
            <img className="mx-auto" src="/images/1.png" width="50%" />
          </div>

          <div className=" font-trajan  py-3 md:flex md:flex-col md:justify-center text-yellow-500 text-center ">
            <h1 className="  text-2xl md:text-4xl lg:text-5xl  ">
              STEVIA
            </h1>
            <p className=" text-base  md:text-xl lg:text-1xl ">
              All varieties of stevia, Sugavia, are meticulously grown,
              harvested, and packed by a team of specialists and professionals.
              from many branches, guaranteeing the customer safety of Sugavia
              products.
            </p>
            <p className=" text-xl">doesn't have any harmful effects on the body</p>
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className=" mx-5 py-5 grid lg:grid-cols-2">
          <div className=" mx-5 py-5 md:grid md:grid-cols-2 ">
            <div className="items-center">
              <img className="mx-auto" src="/images/img01.jpg" width="100%" />
            </div>

            <div className="py-3 md:flex md:flex-col md:justify-center text-yellow-500 ">
              <h1 className="font-trajan text-3xl md:text-5xl text-center ">
                คุณสมบัติของสินค้า
              </h1>
              <p className="   text-2xl  md:text-3xl  ">
                หญ้าหวานทุกรูปแบบ ซูกาเวีย พิถีพิถันทุกขั้นตอน ปลูก สกัด บรรจุ
                โดยทีมบุคคลกรคุณภาพและผู้เชี่ยวชาญ ปลอดภัยสำหรับผู้บริโภค
                ไม่ก่อให้เกิดพิษใดๆต่อร่างกาย จากหลากสาขาจึงมั่นใจว่า
                ผลิตภัณฑ์ซูกาเวีย
              </p>
            </div>
          </div>

          <div className=" mx-5 py-5 md:grid md:grid-cols-2 ">
            <div className="py-3 md:flex md:flex-col md:justify-center text-yellow-500 ">
              <h1 className="py-3 text-3xl md:text-5xl text-center ">
                โรงงานบรรจุขวด
              </h1>
              <p className="  py-3 text-2xl  md:text-3xl ">
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
          <div></div>

          <div></div>
        </div>
      </div>
    </>
  );
}
