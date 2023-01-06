import useAxios from "axios-hooks";
import Head from "next/head";
import {Link} from 'react-scroll';
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Gallery from "../components/Gallery/gallery";
import Products from "../components/Products/products";


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
                <div className="  font-fontEn font-semibold  text-center ">
                  <div className=" z-20 absolute bottom-[11rem] inset-x-0 sm:inset-x-auto sm:bottom-32 sm:left-16  subtitles r text-3xl">
                    {hometop.name}
                  </div>

                  <div className=" animate-charcter z-20 absolute bottom-[8rem] inset-x-0 sm:inset-x-auto sm:bottom-16 sm:left-16 text-5xl ">
                    {hometop.subname}
                  </div>


                  <div className=" z-20 absolute bottom-10 inset-x-0 sm:bottom-10 sm:inset-x-auto sm:right-10 py-5 ">
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
            


            <div className=" relative subtitles mt-20 py-3 font-fontEn  text-center text-sm md:text-2xl flex justify-around ">
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

                <div className="mt-5 relative text-white font-fontEn  block p-6 rounded-lg shadow-lg max-w-sm shadow-yellow-600/60 overflow-hidden" key={index}>
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
                

            </div>
            
            
            
          </div>
      </div>

      {/* <div id="gallery" className="z-30 relative">
        <Gallery/>
      </div>         */}
    
      <div id="About" className="z-30 relative">
        <About  />
      </div>

      <div id="Product" className="z-30 relative">
        <Products />
      </div>

      <div id="Contact" className="z-30 relative">
        <Contact />
      </div>    
    </>
  );
}
