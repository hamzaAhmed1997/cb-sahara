import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'

export default function Layout({children}) {
  return (
    <div>
      <Header/>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}
