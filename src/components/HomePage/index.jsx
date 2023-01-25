import React from 'react'
import SaharaMarket from './SaharaMarket'
import ImageSlider from './ImageSlider'
import HomeFoodSection from '../Common/HomeFoodSection'
import HomeSingleSlider from '../Common/HomeSingleSlider'
import Testimonial from './Testominial'

const HomePage = () => {
    const order=1
  return (
    <div>
        <SaharaMarket/>
        <ImageSlider/>        
        <HomeFoodSection order={order}/>
        <HomeSingleSlider/>
        <SaharaMarket/>
        <HomeFoodSection order={order}/>
        <HomeSingleSlider/>
        <HomeFoodSection />
        <HomeFoodSection order={order}/>
        <HomeSingleSlider/>
        <Testimonial/>
    </div>

  )
}

export default HomePage