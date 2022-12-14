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
        
        <div className="" key={index}>
           
          <div className="">
            <div className=" w-[100vw] h-[100vh] ">
              <img className="" style={{objectFit: "cover", backgroundSize: "cover" ,opacity: "1", width: "100%", height: "100%", position: "absolute", top: "0px", left: "0px", display: "block"}} src={"/images/bg_in.jpg"} />
            </div>

            <div className=" font-font01 font-semibold  text-[#FFD700] text-center ">
              <h1 className=" animate-charcter text-center text-5xl ">
                {homee.title1}
              </h1>
              <div className="font-font02 subtitles py-3 text-center text-3xl">
                {homee.subtitle1}
              </div>
              <div
                className="  font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: homee?.detail1 }}
              />
            </div>
          </div>  
        </div>
      ))}
    </>
  );
}
