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

      <div id="Home">
{homeeData?.map((homee, index) => (
        
        <div className="" key={index}>
           
          {/* BOX1 */}
            <div className="h-screen">
              <img className=" z-0  object-cover bg-cover  w-full h-full absolute top-0 block" src={"/images/home.jpg"} />
              <div className="  font-font01 font-semibold  text-center ">

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

            <div className=" mt-20 py-3 font-font02 subtitles text-center text-2xl flex justify-around "> 
          <div > <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0 CALORLE </div>
          <div > <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0 SUGAR </div>
          <div > <img src="/images/A_4.png" alt="zeropic" width="100px" /> 0 SODIUM </div>
          </div>

          
           <div className=" mt-20 container px-6 py-12 mx-auto text-center text-[18px] flex justify-around  ">
            <div className="  bg-black bg-opacity-50 font-font01 subtitles  block p-6 rounded-lg shadow-lg filter blur-lg md:filter-none max-w-sm">
              <h1 className=" z-20 leading-tight font-medium mb-2"> {homee.title1}</h1>
              <span className=" z-20 mb-4" >{homee.subtitle1}</span>
              <p className=" z-20 mb-4"  dangerouslySetInnerHTML={{ __html: homee?.detail1}} ></p>
            </div>
            <div className="  bg-black bg-opacity-50 font-font01 subtitles block p-6 rounded-lg shadow-lg filter blur-lg md:filter-none max-w-sm">
              <h1 className="  leading-tight font-medium mb-2"> {homee.title2}</h1>
              <span className=" mb-4" >{homee.subtitle2}</span>
              <p className="  mb-4"  dangerouslySetInnerHTML={{ __html: homee?.detail2}} ></p>
            </div>
            <div className="  bg-black bg-opacity-50 font-font01 subtitles  block p-6 rounded-lg shadow-lg  filter blur-lg md:filter-none max-w-sm">
              <h1 className=" leading-tight font-medium mb-2"> {homee.title3}</h1>
              <span className=" mb-4" >{homee.subtitle3}</span>
              <p className=" mb-4"  dangerouslySetInnerHTML={{ __html: homee?.detail3}} ></p>
            </div>
            
        </div>



        </div>
      ))}
      </div>
      
      <div id="About" name="about-page" className='globals' >
        <AboutPages/>
      </div>

      <div id="Product">
        <ProductsPages/>
      </div>
      
      <div id="Contact">
        <ContactPages/>
      </div>
            
           
    </>
  );
}
