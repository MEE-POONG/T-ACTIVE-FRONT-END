import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Slid from '../Slid/Slid'

export default function Layout({ children }) {
  return (
    <>
      <div className='bg-tem '>
        <div class="area" >
          <ul class="circles">
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
      <Footer />
    </>
  )
}
