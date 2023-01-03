import React, { useState, useEffect } from "react";
import { FiAlignJustify,FiMinus,FiArrowUp } from "react-icons/fi";
import {Link} from 'react-scroll';
export default function Navbar() {

  const [navbarB,setNavbarB] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick =() => setClick(!click);


  const [navbar, setnavbar] = useState("bg-[#0b0b0b8b]")
  
  const [goBack, setGoBack] = useState("fixed hidden  z-50 right-0 bottom-16")

  const [text, setText] = useState("text-xl") 

  const [logo, setLogo] = useState("h-16 ") 


  const listenScrollEvent = () => {

    window.scrollY > 300 ? setnavbar("bg-[#0b0b0b8b]") : setnavbar(navbar);

    window.scrollY > 300 ? setGoBack("fixed z-50 right-0 bottom-16") : setGoBack(goBack);

    window.scrollY > 300 ? setLogo("h-8") : setLogo(logo);

    window.scrollY > 300 ? setText("text-lg") : setText(text);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
    window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []); 

  return (  
    <>


<nav className={`fixed top-0 z-40 w-full py-2 px-10 backdrop-blur  flex-none transition-all duration-500  ${navbar}`}> 
<div className="container flex flex-wrap items-center justify-between  mx-auto">

    <Link to="Home" spy={true} smooth={true} offset={0} duration={700} className="flex items-center">
        <img src="/images/logo.png" className={`transition-all ${logo}  mr-3`} alt="Flowbite Logo" />
        <p className={` ${text} font-semibold  font-font01 text-yellow-500 `}>T-ACTIVE</p>
    </Link>

    <button className="inline-flex items-center p-2 ml-3 text-sm text-yellow-500  md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" onClick={() => setNavbarB(!navbarB)} >
      <span className="sr-only">Open main menu</span>
      <FiAlignJustify/>
    </button>

    <div className={` w-full md:block md:w-auto ${ navbarB ? "block" : "hidden" }`}  id="navbar-default">
      <ul className={`flex flex-col p-2 mt-2 text-right font-font01 text-yellow-500   md:flex-row md:space-x-8 md:mt-0 md:${text} md:font-medium md:border-0`}>
      <li>
      <Link to="Home" spy={true} smooth={true} offset={-100} duration={700} className="block py-2 pl-1 pr-1 navbarAT "><button >Home</button></Link>
      </li>
      <li>
      <Link to="About" spy={true} smooth={true} offset={-10} duration={700} className="block py-2 pl-1 pr-1 navbarAT"><button>About</button></Link>
      </li> 
      <li>
      <Link to="Product" spy={true} smooth={true} offset={-10} duration={700} className="block py-2 pl-1 pr-1 navbarAT "><button>Product</button></Link>
      </li>
      <li>
      <Link to="Contact" spy={true} smooth={true} offset={-10} duration={700} className="block py-2 pl-1 pr-1 navbarAT"><button>Contact</button></Link>
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
