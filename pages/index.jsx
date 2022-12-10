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
        
        <div className="container px-6 py-12 mx-auto" key={index}>
          <div className="  mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">
            <div className=" my-auto ">
              <img className="mx-auto" src={homee.imageh1} width="50%" />
            </div>

            <div className=" font-font01 text-[#FFD700] text-center ">
              <h1 className=" animate-charcter text-center text-6xl ">
                {homee.title1}
              </h1>
              <div className=" subtitles text-center text-3xl">
                {homee.subtitle1}
              </div>
              <div
                className="  font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: homee?.detail1 }}
              />
            </div>
          </div>

          <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

          <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2  rounded-xl">
            
          <div className=" w-auto md:hidden  my-auto">
              <img className="mx-auto" src={homee.imageh2} width="50%" />
            </div>

            <div className=" w-auto  md:hidden  my-auto"></div>

            <div className="font-font01 text-[#FFD700] text-center ">
              <h1 className=" animate-charcter text-center text-6xl ">
                {homee.title2}
              </h1>
              <div className=" subtitles text-center text-3xl">
                {homee.subtitle2}
              </div>
              <div
                className=" font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: homee?.detail2 }}
              />
            </div>

            <div className="w-0 md:w-auto  my-auto">
              <img className="mx-auto" src={homee.imageh2} width="50%" />
            </div>
          </div>

          <hr className="my-6 border-yellow-500 md:my-8 dark:border-yellow-700" />

          <div className="mt-4 mx-5 py-5 md:grid md:grid-cols-2 rounded-xl">
            <div className="my-auto">
              <img className="mx-auto" src={homee.imageh3} width="50%" />
            </div>

            <div className=" font-font01 text-[#FFD700] text-center ">
              <h1 className="animate-charcter text-center text-6xl ">
                {homee.title3}
              </h1>
              <div className=" subtitles text-center text-3xl">
                {homee.subtitle3}
              </div>
              <div
                className="  font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: homee?.detail3}}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
