import React, { useState, useEffect } from "react";
import { FiAlignJustify,FiMinus } from "react-icons/fi";
import {Link} from 'react-scroll';
export default function Navbar() {

  const [navbar, setNavbar] = useState(false);


  const [navLogo, setnavLogo] = useState("transition-all py-5 px-5 h-28 m-auto md:h-44");
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavLogo("fixed transition-all top-0 py-4 px-4 h-20  m-auto md:h-32") : setnavLogo("transition-all py-5 px-5 h-28 m-auto md:h-44");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
    window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []); 

  return (  
    <>


<nav>

<div className=" flex flex-wrap justify-between md:gap-10 md:flex-nowrap  h-">
  
    <div className=" z-50 absolute">
      <Link to="Home" spy={true} smooth={true} offset={0} duration={700} href="/">

      <img src="/images/logo.png" className={navLogo}alt="T-ACTIVE Logo" />

    </Link>
    </div>


  <div className=" fixed z-50  right-1 mt-5 bg-black bg-opacity-80 rounded-3xl font-font01 text-base px-10 py-5 text-yellow-500  flex-col items-center  order-2 hidden w-full md:flex md:flex-row md:w-auto md:order-none">
  <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className=" block py-2 pl-3 pr-4 "><button>Home</button></Link>
    <Link to="About" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4"><button>About</button></Link>
    <Link to="Product" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>Product</button></Link>
    <Link to="Contact" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>Contact</button></Link>
  </div>

<div className="fixed z-50 right-0">
  <button  id="btn" type="button" className=" absolute bg-black bg-opacity-80 rounded-3xl top-4 right-4 items-center p-2 mr-5 text-sm text-yellow-500  md:hidden border-2 border-yellow-300/100 " onClick={() => setNavbar(!navbar)} >
    {navbar ? ( <FiMinus/> ) : (  <FiAlignJustify/>   )}
  </button>

  <div className={`w-full md:hidden ${ navbar ? "block" : "hidden" }`}>
    <ul className="  absolute bg-black bg-opacity-80 rounded-3xl top-10 right-2  text-center  mt-2 font-font01 md:hidden text-yellow-500 ">
      <li>
      <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className=" block py-2 pl-3 pr-4 "><button>Home</button></Link>
      </li>
      <li>
      <Link to="About" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>About</button></Link>
      </li> 
      <li>
      <Link to="Product" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>Product</button></Link>
      </li>
      <li>
      <Link to="Contact" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>Contact</button></Link>
      </li>
    </ul>
  </div> 

</div>




</div>
</nav>

    </>
  );
}
