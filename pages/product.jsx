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
      <div className="container px-6 py-12 mx-auto">
        <div className=" mx-5 py-5 md:grid md:grid-cols-2 ">
          <div className=" my-auto">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>

          <div className=" font-helvethaica text-yellow-400 text-center ">
            <h1 className=" py-3 text-5xl  ">น้ำหญ้าหวานกลิ่นมะลิ</h1>
            <p className=" py-3 text-3xl">
              All varieties of stevia, Sugavia, are meticulously grown,
              harvested, and packed by a team of specialists and professionals.
              from many branches, guaranteeing the customer safety of Sugavia
              products.doesn't have any harmful effects on the body
            </p>
          </div>
        </div>

        <div className=" mx-5 py-5 md:grid md:grid-cols-2 ">
          <div className="w-auto  md:hidden  my-auto">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>

          <div className=" font-helvethaica text-yellow-400 text-center ">
            <h1 className=" py-3 text-5xl  ">น้ำหญ้าหวานกลิ่น Originals</h1>
            <p className=" py-3 text-3xl  text-yellow-400 text-center">
              Stevia herbs help increase vitality. Allows more blood to feed the
              brain Help in the treatment of patients with diabetes. blood sugar
              levels are Suitable for those who want to control blood sugar
              levels and help reduce high blood fat. Reduces the risk of heart
              disease high blood pressure and obesity, nourishes the liver, and
              heals both internal and external wounds
            </p>
          </div>

          <div className="w-0 md:w-auto  my-auto">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>
        </div>

        <div className=" mx-5 py-5 md:grid md:grid-cols-2">
          <div className="my-auto">
            <img className="mx-auto" src="/images/5.png" width="10%" />
          </div>

          <div className=" font-helvethaica text-yellow-400 text-center ">
            <p className=" py-3 text-base  md:text-xl lg:text-1xl  ">
              Stevia is a plant that has been used by humans for over 1,500
              years. It was discovered and used for the first time by indigenous
              peoples of South America. Humans have consumed stevia extracts as
              an ingredient in well-brewed tea, as well as in ancient herbal
              medicine. Who bought the original stevia, which Paraguayans call
              kar-he-e or yerGa in Spanish Judle as a "sweet herb," is a herb
              used by the people of Paraguay and Brazil to sweeten food and
              drinks. And has been brewed as a drinking tea called (Mate' for
              over 400 years. It was discovered that Japan was the first country
              in Asia to widely use stevia extract, which is used as a component
              of various foods and beverages) such as pickled vegetables, soy
              sauce, soya bean paste, minced fish meat, and so on.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
