import useAxios from "axios-hooks";
import Head from "next/head";
import AboutPages from "./about";
import ContactPages from "./contact";
import ProductsPages from "./products";
import {Link} from 'react-scroll';

export default function Home() {
  const [{ data: homeTopData}, getHomeTop] = useAxios({
    url: "/api/hometop",
  });
  const [{ data: homeDetailData}, getHomeDetail] = useAxios({
    url: "/api/homedetail",
  });


  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div id="Home" className="z-30 relative">
        
          <div>
            {homeTopData?.map((hometop,index)=>(
              <div className="" key={index}>
              {/* BOX1 */}
              <div className="h-screen relative">
                <img
                  className=" z-0  object-cover bg-cover  w-full h-screen absolute top-0 block"
                  src={hometop.image}
                />
                <div className="  font-font01 font-semibold  text-center ">
                  <div className=" z-20 absolute font-font01 bottom-32 left-5 md:bottom-32 md:left-16  subtitles text-center text-3xl">
                    {hometop.name}
                  </div>

                  <div className=" animate-charcter z-20 absolute bottom-16 left-5 md:bottom-16 md:left-16  text-center text-5xl ">
                    {hometop.subname}
                  </div>


                  <div className=" z-20 absolute bottom-10 right-3 md:bottom-10 md:right-10  text-center py-5 ">

                    
                  <Link
                       to="Product" spy={true} smooth={true} offset={-10} duration={700} className="relative  inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium 
                       text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-black"
                       >
                    <span className=" absolute  inset-0 w-full h-full bg-gradient-to-br  from-white via-yellow-100 to-yellow-200"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <button className="relative animate-font font-semibold">Product</button>
                  
                    </Link>
                  </div>
                </div>

                {/* blur */}
                <div className=" z-10 w-full h-52 blur-xl bg-[#25252582] bottom-0 absolute" />

              </div>
            </div>
            ))}
            


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

            

              
            <div className="relative subtitles mt-20 px-10 py-12 mx-auto indent-4 md:indent-6 whitespace-normal text-justify text-[16px] md:text-[18px] justify-items-center grid  lg:grid-cols-3">
            {homeDetailData?.map((homedetail,index)=>(

                <div className="mt-5 relative text-white font-font01  block p-6 rounded-lg shadow-lg max-w-sm shadow-yellow-600/60 overflow-hidden" key={index}>
                    <div className="absolute -top-6 -left-10 w-72 h-72 bg-yellow-900/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob "></div>
                    <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-24 -right-4 w-56 h-56 bg-yellow-700/75 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-24 -left-5 w-60 h-60 bg-yellow-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                      <div className="relative">
                        <h1 className=" leading-tight text-center text-[22px] lg:text-[30px] font-medium mb-2">
                        {" "}
                        {homedetail.title}
                        </h1>
                        <span className="mb-4">{homedetail.subtitle}</span>
                        <p
                          className=" mb-4"
                          dangerouslySetInnerHTML={{ __html: homedetail?.detail }}
                        ></p>
                      </div>               
                  </div>          
              
                ))}

                 
                <div id="default-carousel" className="relative" data-carousel="static">
                   
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                      
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                            <img src="/images/A_16.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                      
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/A_16.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                    
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/A_16.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                    </div>
                  
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>
                 
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>


            </div>
            
          </div>
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
