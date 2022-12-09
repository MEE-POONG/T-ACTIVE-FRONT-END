import useAxios from "axios-hooks";
import Head from "next/head";

export default function Home() {
  const [{ data: homeeData, loading, error }, getHomee] = useAxios({ url: "/api/homee", });

  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

     
      {homeeData?.map((homee, index) => (
        <div className="container px-6 py-12 mx-auto" key={index}>
        <div className="  mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">

        <div className=" my-auto ">
        <img className="mx-auto" src={homee.imagea1} width="50%" />
          </div>

          <div className=" font-helvethaica text-[#FFD700] text-center ">
            <h1 className=" animate-charcter text-center text-6xl ">{homee.title1}</h1>
            <p className=" subtitles text-center text-3xl "> {homee.subtitle1} </p>
            <p className=" subtitles text-center text-3xl"> {homee.detail1} </p>
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2  rounded-xl">
          <div className=" w-auto  md:hidden  my-auto">
          </div>

          <div className="font-helvethaica text-[#FFD700] text-center ">
          <h1 className=" animate-charcter text-center text-6xl ">{homee.title2}</h1>
            <p className=" subtitles text-center text-3xl"> {homee.subtitle2} </p>
            <p className=" subtitles text-center text-3xl"> {homee.detail2} </p>
          </div>

          <div className="w-0 md:w-auto  my-auto">
          <img className="mx-auto" src={homee.imagea2} width="50%" />
          </div>
        </div>

        <hr class="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

        <div className="mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">
          <div className="my-auto">
          <img className="mx-auto" src={homee.imagea3} width="50%" />
          </div>

          <div className=" font-helvethaica text-[#FFD700] text-center ">
          <h1 className="animate-charcter text-center text-6xl ">{homee.title3}</h1>
            <p className=" subtitles text-center text-3xl "> {homee.subtitle3} </p>
            <p className=" subtitles text-center text-3xl "> {homee.detail3} </p>
          </div>
          </div>
        </div>
      ))}
    </>
  );
}
