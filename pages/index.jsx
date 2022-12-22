import useAxios from "axios-hooks";
import Head from "next/head";
import AboutPages from "./about";
import ContactPages from "./contact";
import ProductsPages from "./products";

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

      <div id="Home" className="z-30 relative">
        {homeeData?.map((homee, index) => (
          <div>
            <div className="" key={index}>
              {/* BOX1 */}
              <div className="h-screen relative">
                <img
                  className=" z-0  object-cover bg-cover  w-full h-screen absolute top-0 block"
                  src={"/images/home.png"}
                />
                <div className="  font-font01 font-semibold  text-center ">
                  <div className=" z-20 absolute font-font02 bottom-32 left-5 md:bottom-32 md:left-16  subtitles text-center text-3xl">
                    {homee.subtitle1}
                  </div>

                  <div className=" animate-charcter z-20 absolute bottom-16 left-5 md:bottom-16 md:left-16  text-center text-5xl ">
                    {homee.title1}
                  </div>

                  <div className=" z-20 absolute bottom-7 right-0 md:bottom-7 md:right-16  text-center py-5 ">

                    <a href="https://www.facebook.com/TActiveSteviaSyrup" class="relative inline-block text-lg group">
                      <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-yellow-400 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black ">
                      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-black"></span>
                      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-400 group-hover:-rotate-180 ease"></span>
                      <span class="relative">PRODUCT</span>
                      </span>
                      <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-400 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                  </div>
                </div>

                {/* blur */}
                <div className=" z-10 w-full h-52 blur-xl bg-[#25252582] bottom-0 absolute" />
              </div>
            </div>
            <div className=" subtitles mt-20 py-3 font-font02  text-center text-sm md:text-2xl flex justify-around ">
              <div>
                {" "}
                <img className="md:ml-4 w-[70px] md:w-[100px]" src="/images/kcal2.png" alt="zeropic" /> 0
                CALORIE{" "}
              </div>
              <div>
                {" "}
                <img src="/images/sugar.png" alt="zeropic" className=" w-[70px] md:w-[100px]" /> 0
                SUGAR{" "}
              </div>
              <div>
                {" "}
                <img className="md:ml-2 w-[70px] md:w-[100px]" src="/images/lowsalt.png" alt="zeropic" /> 0
                SODIUM{" "}
              </div>
            </div>

            <div className="relative subtitles mt-20  px-6 py-12 mx-auto indent-4 md:indent-6 whitespace-normal text-justify text-[15px] md:text-[17px] justify-items-center grid  lg:grid-cols-3">
              {/* <div className="relative  "> */}
                {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div> */}
                {/* <div class="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
                {/* <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}


                <div className="mt-5 relative text-white m-1 font-font01  block p-6 rounded-lg shadow-lg max-w-sm shadow-indigo-300 overflow-hidden">
                <div class="absolute -top-6 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-24 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-24 -left-5 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                   <div className="relative">
                      <h1 className=" leading-tight text-center text-[18px] md:text-[22px] font-medium mb-2">
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
              {/* </div>  */}
              
             
              
              <div className=" mt-5 m-1 relative font-font01 text-white  block p-6 rounded-lg shadow-lg shadow-indigo-300 max-w-sm overflow-hidden">
                <div class="absolute -top-6 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-24 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-24 -left-5 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative"> 
                    <h1 className="  leading-tight text-center text-[18px] md:text-[22px] font-medium mb-2">
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

             
              <div className="  mt-5 m-1 relative font-font01 text-white  block p-6 rounded-lg shadow-lg shadow-indigo-300 max-w-sm overflow-hidden">
              <div class="absolute -top-6 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-24 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-24 -left-5 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative"> 
                  <h1 className=" leading-tight text-center text-[18px] md:text-[22px] font-medium mb-2">
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
