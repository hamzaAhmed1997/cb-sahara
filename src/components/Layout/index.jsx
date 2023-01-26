import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'

export default function Layout({children, data}) {
  return (
    <div>
      <Header/>
        <Navbar data={data?.navbar}/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}
