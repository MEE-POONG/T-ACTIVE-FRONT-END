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

        <div className=" bg-[#FCFAF1] mx-1 py-1 md:grid md:grid-cols-2 rounded-xl ">

          <div className="my-auto">
            <img className="mx-auto" src="/images/1.png" width="50%" />
          </div>

          <div className=" font-helvethaica  py-3 md:flex md:flex-col md:justify-center text-yellow-500 text-center ">

            <h1 className="  text-2xl md:text-4xl lg:text-5xl ">STEVIA</h1>

            <p className=" text-base  md:text-2xl lg:text-4xl ">
              All varieties of stevia, Sugavia, are meticulously grown,
              harvested, and packed by a team of specialists and professionals.
              from many branches, guaranteeing the customer safety of Sugavia
              products.doesn't have any harmful effects on the body
            </p>
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className="  mx-5 py-5 grid lg:grid-cols-2">
          <div className="bg-[#FCFAF1] mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
            <div className="my-auto">
              <img className="mx-auto rounded-xl" src="/images/img01.jpg" width="70%" />
            </div>

            <div className=" font-helvethaica py-3 text-center  md:flex md:flex-col md:justify-center text-yellow-500 ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl  ">
                Product Features 
              </h1>
              <p className=" text-base  md:text-1xl lg:text-2xl">
                Stevia herbs help increase vitality. Allows more blood to feed
                the brain Help in the treatment of patients with diabetes. blood
                sugar levels are Suitable for those who want to control blood
                sugar levels and help reduce high blood fat. Reduces the risk of
                heart disease high blood pressure and obesity, nourishes the
                liver, and heals both internal and external wounds
              </p>
            </div>
          </div>

          <div className=" bg-[#FCFAF1] mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
            <div className="w-auto  md:hidden  my-auto">
              <img className="mx-auto rounded-xl" src="/images/7.png" width="70%" />
            </div>

            <div className=" font-helvethaica py-3 text-center  md:flex md:flex-col md:justify-center  text-yellow-500 ">
              <h1 className="py-3 text-3xl md:text-5xl ">
                bottling factory
              </h1>
              <p className=" py-3 text-2xl  md:text-3xl ">
                our packaging Make use of clean equipment. which we have kept in
                high security Contains stevia extract in a bottle, handy, as
                well as easy to use
                FDA certification, GMP, notification receipt number 30-1-6300020597
              </p>
            </div>

            <div className="w-0 md:w-auto  my-auto">
              <img className="mx-auto rounded-xl" src="/images/7.png" width="70%" />
            </div>
          </div>
        </div>

        <div>
        </div>
      </div>
    </>
  );
}
