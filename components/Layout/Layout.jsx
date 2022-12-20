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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div>
      
      <Navbar />
      <main>{children}</main>
      <div className="z-50 relative">
        <Footer />
      </div>
      
    </>
  )
}
