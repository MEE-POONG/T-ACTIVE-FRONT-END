import useAxios from "axios-hooks";
import Head from "next/head";

export default function Home() {
  const [{ data: homeeData, loading, error }, getHomee] = useAxios({
    url: "/api/homee",
  });

  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {homeeData?.map((homee, index) => (
        <div className="container px-6 py-12 mx-auto " key={index}>
          <div className=" mx-1 py-1 md:grid md:grid-cols-2 rounded-xl ">
            <div className="my-auto">
              <img className="mx-auto" src={homee.imageh} width="50%" />
            </div>

            <div className=" font-helvethaica  py-3 md:flex md:flex-col md:justify-center text-center rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ceaf00] to-[#ffff09]">
              <h1 className="  text-2xl md:text-4xl lg:text-5xl "> {homee.title}</h1>
            </div>
            <p className=" text-base  md:text-2xl lg:text-4xl"> {homee.detail} </p>
          </div>

          <hr class="my-6 border-yellow-500 md:my-8" />

          <div className=" mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
            <div className="my-auto">
              <img className="mx-auto" src={homee.imageh} width="50%" />
            </div>

            <div className=" font-helvethaica py-3 text-center  md:flex md:flex-col md:justify-center  text-transparent bg-clip-text bg-gradient-to-r from-[#ceaf00] to-[#ffff09] ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl  "> {homee.title} </h1>
              <p className=" text-base  md:text-1xl lg:text-2xl">{homee.detail}</p>
            </div>
          </div>

          <div className=" mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
            <div className="w-auto  md:hidden  my-auto">
            <img className="mx-auto" src={homee.imageh} width="50%" />
          
            </div>

            <div className=" font-helvethaica py-3 text-center  md:flex md:flex-col md:justify-center   text-transparent bg-clip-text bg-gradient-to-r from-[#ceaf00] to-[#ffff09] ">
              <h1 className="py-3 text-3xl md:text-5xl ">{homee.title}</h1>
              <p className=" py-3 text-2xl  md:text-3xl ">{homee.detail} </p>
            </div>

            <div className="w-0 md:w-auto  my-auto">
              <img
                className="mx-auto rounded-xl"
                src="/images/7.png"
                width="70%"
              />
            </div>
          </div>

          <hr class="my-6 border-yellow-500 md:my-8" />

          <div>
            <div className=" mx-5 py-5 md:grid md:grid-cols-2 rounded-xl ">
              <div className="w-auto  md:hidden  my-auto">
                <img
                  className="mx-auto rounded-xl"
                  src="/images/7.png"
                  width="70%"
                />
              </div>

              <div className=" font-helvethaica py-3 text-center  md:flex md:flex-col md:justify-center   text-transparent bg-clip-text bg-gradient-to-r from-[#ceaf00] to-[#ffff09] ">
                <h1 className="py-3 text-3xl md:text-5xl ">bottling factory</h1>
                <p className=" py-3 text-2xl  md:text-3xl ">
                  our packaging Make use of clean equipment. which we have kept
                  in high security Contains stevia extract in a bottle, handy,
                  as well as easy to use FDA certification, GMP, notification
                  receipt number 30-1-6300020597
                </p>
              </div>

              <div className="w-0 md:w-auto  my-auto">
                <img
                  className="mx-auto rounded-xl"
                  src="/images/7.png"
                  width="70%"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
