import React from "react";
import Head from "next/head";


export default function AboutPages() {
  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className=" my-auto ">
            <img className="mx-auto" src="/images/A_1.png" width="30%" />
          </div>

      <div className="container px-6 py-12 mx-auto">
        <div className="  mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">

        <div className=" my-auto ">
            <img className="mx-auto" src="/images/1.png" width="30%" />
          </div>


          <div className=" font-helvethaica text-[#FFD700] text-center ">
            <p className=" py-3 text-3xl">
              All varieties of stevia, Sugavia, are meticulously grown,
              harvested, and packed by a team of specialists and professionals.
              from many branches, guaranteeing the customer safety of Sugavia
              products.doesn't have any harmful effects on the body
            </p>
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className="mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">
          <div className="my-auto">
            <img className="mx-auto" src="/images/A_2.jpg" width="55%" />
          </div>

          <div className=" font-helvethaica text-[#FFD700] text-center ">
            <p className="my-auto text-base  md:text-xl lg:text-1xl  ">
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
