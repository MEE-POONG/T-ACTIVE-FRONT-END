import React, { useState, useEffect } from "react";
import { FiAlignJustify,FiMinus,FiArrowUp } from "react-icons/fi";
import {Link} from 'react-scroll';
export default function Navbar() {

  const [navbar, setNavbar] = useState(false);


  const [navLogo, setnavLogo] = useState("transition-all py-5 px-5 h-28 m-auto md:h-44");
  const [goBack, setGoBack] = useState("fixed hidden z-50 right-0 bottom-16")

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavLogo("fixed transition-all top-0 py-4 px-4 h-20  m-auto md:h-32") : setnavLogo(navLogo);
    window.scrollY > 20 ? setGoBack("fixed z-50 right-0 bottom-16") : setGoBack(goBack);
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

<div className=" flex flex-wrap justify-between md:gap-10 md:flex-nowrap  ">
  
    <div className=" z-50 absolute">
      <Link to="Home" spy={true} smooth={true} offset={0} duration={700} href="/">

      <img src="/images/logo.png" className={navLogo}alt="T-ACTIVE Logo" />

    </Link>
    </div>


  <div className=" fixed z-50  right-1 mt-5 bg-black bg-opacity-90 rounded-3xl font-font01 text-base px-10 py-5 text-yellow-500  flex-col items-center  order-2 hidden w-full md:flex md:flex-row md:w-auto md:order-none">
  <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className=" block py-2 pl-3 pr-4 "><button>Home</button></Link>
    <Link to="About" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4"><button>About</button></Link>
    <Link to="Product" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>Product</button></Link>
    <Link to="Contact" spy={true} smooth={true} offset={50} duration={700} className="block py-2 pl-3 pr-4 "><button>Contact</button></Link>
  </div>

<div className="fixed z-50 right-0">
  <button  id="btn" type="button" className=" absolute bg-black bg-opacity-80 rounded-3xl top-4 right-4 items-center p-2 mr-5 text-lg text-yellow-500  md:hidden border-2 border-yellow-300/100 " onClick={() => setNavbar(!navbar)} >
    {navbar ? ( <FiMinus/> ) : (  <FiAlignJustify/>   )}
  </button>

  <div className={`w-full md:hidden ${ navbar ? "block" : "hidden" }`}>
    <ul className="  absolute bg-black bg-opacity-80 rounded-3xl top-12 right-2 mt-2 p-5 text-center font-font01 text-yellow-500 md:hidden  ">
      <li>
      <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className="block py-2 pl-3 pr-4 "><button>Home</button></Link>
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

<div id="GO BACK" className={goBack}>
<Link to="Home" spy={true} smooth={true} offset={0} duration={700} >

  <button  id="btn" type="button" className=" absolute bg-black bg-opacity-80 rounded-3xl right-2 items-center p-2 mr-5 text-lg md:text-2xl text-yellow-500 border-2 border-yellow-300/100 ">
    <FiArrowUp/>
  </button>

</Link>

</div>



</div>
</nav>

    </>
  );
}
