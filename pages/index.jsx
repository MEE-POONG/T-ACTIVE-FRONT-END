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
                  src={"/images/home.jpg"}
                />
                <div className="  font-font01 font-semibold  text-center ">
                  <div className=" z-20 absolute font-font02 bottom-32 left-5 md:bottom-32 md:left-16  subtitles text-center text-3xl">
                    {homee.subtitle1}
                  </div>

                  <div className=" animate-charcter z-20 absolute bottom-16 left-5 md:bottom-16 md:left-16  text-center text-5xl ">
                    {homee.title1}
                  </div>

                  <div className=" z-20 absolute bottom-7 right-0 md:bottom-7 md:right-16  text-center py-5 ">
                    <a href="https://www.facebook.com/TActiveSteviaSyrup">
                      <button className=" animate-charcter font-font01 font-semibold w-28 h-12 mx-5 my-5 border-4 border-yellow-300/100 rounded-xl">
                        PRODUCT
                      </button>
                    </a>
                  </div>
                </div>

                {/* blur */}
                <div className=" z-10 w-full h-52 blur-xl bg-[#25252582] bottom-0 absolute" />
              </div>
            </div>
            <div className=" subtitles mt-20 py-3 font-font02  text-center text-sm md:text-3xl flex justify-around ">
              <div>
                {" "}
                <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0
                CALORLE{" "}
              </div>
              <div>
                {" "}
                <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0
                SUGAR{" "}
              </div>
              <div>
                {" "}
                <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0
                SODIUM{" "}
              </div>
            </div>

            <div className=" subtitles mt-20  px-6 py-12 mx-auto indent-4 md:indent-6 whitespace-normal text-justify text-[15px] md:text-[17px] justify-items-center grid  lg:grid-cols-3">
              <div className=" mt-5 m-1 bg-black bg-opacity-50 font-font01  block p-6 rounded-lg shadow-lg  max-w-sm">
                <h1 className="  leading-tight text-center text-[18px] md:text-[22px] font-medium mb-2">
                  {" "}
                  {homee.title1}
                </h1>
                <span className=" mb-4">{homee.subtitle1}</span>
                <p
                  className=" mb-4"
                  dangerouslySetInnerHTML={{ __html: homee?.detail1 }}
                ></p>
              </div>

              <div className=" mt-5 m-1  bg-black bg-opacity-50 font-font01  block p-6 rounded-lg shadow-lg  max-w-sm">
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

              <div className=" mt-5 m-1  bg-black bg-opacity-50 font-font01   block p-6 rounded-lg shadow-lg  max-w-sm">
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
