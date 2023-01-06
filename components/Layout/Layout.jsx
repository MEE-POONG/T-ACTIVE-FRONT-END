import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


export default function Layout({ children }) {
  return (
    <>
      {/* <div className='bg-tem '>
        <div className="area" >
          <ul className="circles">
            <li className=' bg-[#ffb218]'></li>
            <li className=' bg-[#fbff00]'></li>
            <li className=' bg-[#ffad09]'></li>
            <li className=' bg-[#fff700]'></li>
            <li className=' bg-[#ff7301]'></li>
            <li className=' bg-[#ffdd48]'></li>
            <li className=' bg-[#ff9a03]'></li>
            <li className=' bg-[#ffc401]'></li>
            <li className=' bg-[#ffcc00]'></li>
            <li className=' bg-[#ffbe31]'></li>
          </ul>
        </div >
      </div> */}
      
      <Navbar />
      <main>{children}</main>
      <div className="z-40 relative">
        <Footer />
      </div>
      
    </>
  )
}
