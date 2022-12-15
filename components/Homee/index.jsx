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
            <div className="h-screen">
              <img className=" z-0  object-cover bg-cover brightness-50 w-full h-full absolute top-0 block" src={"/images/bg_in.jpg"} />
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

            {/* <div className=" mt-4 mx-5 py-5 md:grid md:grid-cols-2  rounded-xl">
          <div className=" w-auto  md:hidden  my-auto">
          </div>

          <div className="font-font01  text-[#FFD700] text-center ">
          <h1 className=" animate-charcter font-semibold  text-center text-4xl ">{about.title2}</h1>

            <div className="py-3 font-font02 subtitles text-center text-2xl">
              {about.subtitle2}
              </div>

            <div
                className=" font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: about?.detail2 }}
              />
          </div>

          <div className="w-0 md:w-auto  my-auto">
          <img className="mx-auto" src={about.imagea2} width="50%" />
          </div>
        </div> */}


            <div className=" relative h-screen mt-4 mx-5 py-5 md:grid md:grid-cols-2">
              <img className=" z-0 m-auto   bg-cover  opacity-100 w-2/4 h-2/4 block" src={"/images/1.png"} />
              {/* <div className=" z-10 top-14 left-5 bg-black bg-opacity-20 object-cover bg-cover  opacity-100 w-2/4 h-2/4  absolute block "></div> */}

              <div className=" m-auto font-font01 font-semibold  text-[#FFD700] text-center ">
{/* 
              <div className=" z-20 absolute font-font02 bottom-32 left-16  subtitles text-center text-3xl">
                {homee.subtitle1}
              </div> */}


              <div
                className="  left-0 font-font02 subtitles text-center text-xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: homee?.detail1 }}
              />

            </div>

            </div>
            
        </div>
      ))}
    </>
  );
}
