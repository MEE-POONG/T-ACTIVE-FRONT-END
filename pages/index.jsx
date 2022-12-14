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
           
          {/* BOX1 */}
            <div className=" h-screen">
              <img className=" z-0 object-cover bg-cover  opacity-100 w-full h-full absolute top-0 block" src={"/images/bg_in.jpg"} />
              <div className=" z-10 bg-black bg-opacity-20 object-cover bg-cover  opacity-100 w-full h-full absolute top-0 block "></div>

              <div className="  font-font01 font-semibold  text-[#FFD700] text-center ">

              <div className=" z-20 absolute font-font02 bottom-32 left-16  subtitles text-center text-3xl">
                {homee.subtitle1}
              </div>

              <h1 className=" animate-charcter z-20 absolute  bottom-16 left-16  text-center text-5xl ">
                {homee.title1}
              </h1>

              <div className=" z-20 absolute bottom-14 right-20  text-center py-5">
              <a href="https://www.facebook.com/TActiveSteviaSyrup">  <button  className="  font-font01 animate-charcter font-semibold w-20 h-10 mx-5 my-5 border-double border-4 border-yellow-300/100 rounded-xl"> BUY </button> </a>  
              </div>

            </div>

            </div>


            {/* BOX2 */}
            <div className=" relative h-screen">
              <img className=" z-0 object-cover bg-cover  opacity-100 w-2/4 h-2/4 absolute top-0 block" src={"/images/product/product01.jpg"} />
              <div className=" z-10 bg-black bg-opacity-20 object-cover bg-cover  opacity-100 w-2/4 h-2/4  absolute top-0 block "></div>

              <div className="  font-font01 font-semibold  text-[#FFD700] text-center ">

              <div className=" z-20 absolute font-font02 bottom-32 left-16  subtitles text-center text-3xl">
                {homee.subtitle1}
              </div>

              <h1 className=" animate-charcter z-20 absolute  bottom-16 left-16  text-center text-5xl ">
                {homee.title1}
              </h1>

              <div className=" z-20 absolute bottom-14 right-20  text-center py-5">
              <a href="https://www.facebook.com/TActiveSteviaSyrup">  <button  className="  font-font01 animate-charcter font-semibold w-20 h-10 mx-5 my-5 border-double border-4 border-yellow-300/100 rounded-xl"> BUY </button> </a>  
              </div>

            </div>

            </div>
            
        </div>
      ))}
    </>
  );
}
