import React, { useState, useEffect } from "react";
import { FiAlignJustify,FiMinus,FiArrowUp } from "react-icons/fi";
import {Link} from 'react-scroll';
export default function Navbar() {

  const [navbar, setNavbar] = useState(false);


  const [navbar02, setnavbar02] = useState("bg-[#000]")
  
  const [goBack, setGoBack] = useState("fixed hidden  z-50 right-0 bottom-16")

  const listenScrollEvent = () => {

    window.scrollY > 300 ? setnavbar02("bg-[#0b0b0b8b]") : setnavbar02(navbar02);

    window.scrollY > 300 ? setGoBack("fixed z-50 right-0 bottom-16") : setGoBack(goBack);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
    window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []); 

  return (  
    <>


<nav className={`sticky top-0 z-40 w-full py-2 px-10 backdrop-blur  flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06] ${navbar02}`}> 
<div className="container flex flex-wrap items-center justify-between  mx-auto">

    <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className="flex items-center">
        <img src="/images/logo.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap font-font01 text-yellow-500">T-ACTIVE</span>
    </Link>

    <button className="inline-flex items-center p-2 ml-3 text-sm text-yellow-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" onClick={() => setNavbar(!navbar)} >
      <span className="sr-only">Open main menu</span>
      <FiAlignJustify/>
    </button>

    <div className={`w-full md:block md:w-auto ${ navbar ? "block" : "hidden" }`}  id="navbar-default">
      <ul className="flex flex-col p-2 mt-2 text-right font-font01 text-yellow-500 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
      <li>
      <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className="block py-2 pl-1 pr-1 "><button>Home</button></Link>
      </li>
      <li>
      <Link to="About" spy={true} smooth={true} offset={0} duration={700} className="block py-2 pl-1 pr-1 "><button>About</button></Link>
      </li> 
      <li>
      <Link to="Product" spy={true} smooth={true} offset={0} duration={700} className="block py-2 pl-1 pr-1 "><button>Product</button></Link>
      </li>
      <li>
      <Link to="Contact" spy={true} smooth={true} offset={0} duration={700} className="block py-2 pl-1 pr-1 "><button>Contact</button></Link>
      </li>
      </ul>
    </div>
  </div>
</nav>

<div id="GO BACK" className={goBack}>
<Link to="Home" spy={true} smooth={true} offset={-100} duration={700} >

  <button  id="btn" type="button" className=" absolute bg-black bg-opacity-80 rounded-3xl right-2 items-center p-2 mr-5 text-lg md:text-2xl text-yellow-500 border-2 border-yellow-300/100 ">
    <FiArrowUp/>
  </button>

</Link>

</div>



    </>
  );
}
