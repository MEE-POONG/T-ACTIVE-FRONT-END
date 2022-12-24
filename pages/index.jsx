import useAxios from "axios-hooks";
import Head from "next/head";
import AboutPages from "./about";
import ContactPages from "./contact";
import ProductsPages from "./products";

export default function Home() {
  const [{ data: homeeData, loading, error }, getHomee] = useAxios({
    url: "/api/homee",
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div id="Home" className="z-30 relative">
        {homeeData?.map((homee, index) => (
          <div>
            <div className="" key={index}>
              {/* BOX1 */}
              <div className="h-screen relative">
                <img
                  className=" z-0  object-cover bg-cover  w-full h-screen absolute top-0 block"
                  src={"/images/A_5.png"}
                />
                <div className="  font-font01 font-semibold  text-center ">
                  <div className=" z-20 absolute font-font01 bottom-32 left-5 md:bottom-32 md:left-16  subtitles text-center text-3xl">
                    {homee.subtitle1}
                  </div>

                  <div className=" animate-charcter z-20 absolute bottom-16 left-5 md:bottom-16 md:left-16  text-center text-5xl ">
                    {homee.title1}
                  </div>


                  <div className=" z-20 absolute bottom-10 right-3 md:bottom-10 md:right-10  text-center py-5 ">

                    
                  <a target="_blank" href="https://www.facebook.com/TActiveSteviaSyrup" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-black">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br  from-black via-yellow-500 to-yellow-600"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-900 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span class="relative text-black">PRODUCT</span>
                  </a>
                  </div>
                </div>

                {/* blur */}
                <div className=" z-10 w-full h-52 blur-xl bg-[#25252582] bottom-0 absolute" />

              </div>
            </div>


            <div className=" relative subtitles mt-20 py-3 font-font01  text-center text-sm md:text-2xl flex justify-around ">
              <div className="absolute top-2 left-44 w-36 h-36 md:bg-yellow-400/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob "></div>
              <div className="absolute top-2 right-44 w-36 h-36 md:bg-yellow-500/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-2 w-36 h-36 bg-yellow-600/75 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                <div className=" relative">
                  {" "}
                  <img className="md:ml-4 w-[70px] md:w-[100px]" src="/images/kcal2.png" alt="zeropic" /> 0
                  CALORIE{" "}
                </div>
                <div className=" relative">
                  {" "}
                  <img src="/images/sugar.png" alt="zeropic" className=" w-[70px] md:w-[100px]" /> 0
                  SUGAR{" "}
                </div>
                <div className=" relative">
                  {" "}
                  <img className="md:ml-2 w-[70px] md:w-[100px]" src="/images/lowsalt.png" alt="zeropic" /> 0
                  SODIUM{" "}
                </div>
            </div>

            <div className="relative subtitles mt-20 px-10 py-12 mx-auto indent-4 md:indent-6 whitespace-normal text-justify text-[15px] md:text-[17px] justify-items-center grid  lg:grid-cols-3">

                <div className="mt-5 relative text-white font-font01  block p-6 rounded-lg shadow-lg max-w-sm shadow-yellow-600/60 overflow-hidden">
                  <div className="absolute -top-6 -left-10 w-72 h-72 bg-yellow-900/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob "></div>
                  <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-24 -right-4 w-56 h-56 bg-yellow-700/75 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-24 -left-5 w-60 h-60 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative">
                      <h1 className=" leading-tight text-center text-[18px] lg:text-[30px] font-medium mb-2">
                      {" "}
                      {homee.title1}
                      </h1>
                      <span className="mb-4">{homee.subtitle1}</span>
                      <p
                        className=" mb-4"
                        dangerouslySetInnerHTML={{ __html: homee?.detail1 }}
                      ></p>
                    </div>     
                </div>
              
              <div className=" mt-5 m-1 relative font-font01 text-white  block p-6 rounded-lg shadow-lg shadow-yellow-600/60 max-w-sm overflow-hidden">
                <div className="absolute -top-6 -left-10 w-72 h-72 bg-yellow-900/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 -right-4 w-56 h-56 bg-yellow-700/75 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 -left-5 w-60 h-60 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative"> 
                    <h1 className="  leading-tight text-center text-[18px] md:text-[30px] font-medium mb-2">
                      {" "}
                      {homee.title2}
                    </h1>
                    <span className=" mb-4">{homee.subtitle2}</span>
                    <p
                      className="  mb-4"
                      dangerouslySetInnerHTML={{ __html: homee?.detail2 }}
                    ></p>
                </div>
              </div>

             
              <div className="  mt-5 m-1 relative font-font01 text-white  block p-6 rounded-lg shadow-lg shadow-yellow-600/60 max-w-sm overflow-hidden">
                <div className="absolute -top-6 -left-10 w-48 h-48 bg-yellow-900/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-10 w-48 h-48 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 -right-4 w-56 h-56 bg-yellow-700/75 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 -left-5 w-60 h-60 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative"> 
                  <h1 className=" leading-tight text-center text-[18px] md:text-[30px] font-medium mb-2">
                    {" "}
                    {homee.title3}
                  </h1>
                  <span className=" mb-4">{homee.subtitle3}</span>
                  <p
                    className=" mb-4"
                    dangerouslySetInnerHTML={{ __html: homee?.detail3 }}
                  ></p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="About" className="z-30 relative">
        <AboutPages />
      </div>

      <div id="Product" className="z-30 relative">
        <ProductsPages />
      </div>

      <div id="Contact" className="z-30 relative">
        <ContactPages />
      </div>
    </>
  );
}
