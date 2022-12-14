import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Slid from '../Slid/Slid'

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
      <main>{children}</main>
    <Footer/>
    </>
  )
}
