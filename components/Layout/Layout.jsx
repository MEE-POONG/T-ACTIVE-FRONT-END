import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Slid from '../Slid/Slid'

export default function Layout({ children }) {
  return (
    <>
      <div className='bg-tem '>
        <div className="area" >
          <ul className="circles">
            <li className=' bg-[#ffb218]'></li>
            <li className=' bg-[#ffc342]'></li>
            <li className=' bg-[#da9710]'></li>
            <li className=' bg-[#ffde96]'></li>
            <li className=' bg-[#a5780c]'></li>
            <li className=' bg-[#ffdd48]'></li>
            <li className=' bg-[#794900]'></li>
            <li className=' bg-[#ffc401]'></li>
            <li className=' bg-[#ffcc00]'></li>
            <li className=' bg-[#ffbe31]'></li>
          </ul>
        </div >
      </div>
      
      <Navbar />
      <main>{children}</main>
      <div className="z-40 relative">
        <Footer />
      </div>
      
    </>
  )
}
