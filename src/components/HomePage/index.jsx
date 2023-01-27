import React from "react";
import SaharaMarket from "./SaharaMarket";
import ImageSlider from "./ImageSlider";
import HomeFoodSection from "../Common/HomeFoodSection";
import HomeSingleSlider from "../Common/HomeSingleSlider";
import Testimonial from "./Testominial";
import ServicesCards from "./ServicesCards";
import HomeHero from "./HomeHero";
import FlipImages from "./FlipImages";
import FlipCards from "./FlipCards";
import ContactForm from "../ContactPage/ContactForm";
import ContactMap from "./ContactMap";
import Meat from "../Common/Meat";

const HomePage = ({data, contact}) => {

  const order = 1;
  const position="1"
  return (
    <div>
      <HomeHero data={data?.ourDishes}/>
      <ServicesCards data={data?.onlineOrder} />
      <FlipImages data={data?.flipImage}/>
      <SaharaMarket data={data?.welcome}/>
      <FlipCards data={data?.ourfacilities}/>
      <ImageSlider data={data?.imageslider} />
      <HomeFoodSection  order={order} position={position} data={data?.ourprovides?.afghani} />
      <HomeSingleSlider data={data?.ourprovides?.image1}/>
      <Meat order={order ==2} data={data?.ourprovides?.meatandchicken}/>
      <HomeSingleSlider data={data?.ourprovides?.image2}/>
      <HomeFoodSection order={order} data={data?.ourprovides?.mediterranean}/>
      <HomeSingleSlider data={data?.ourprovides?.image3}/>
      <HomeFoodSection order={order} data={data?.ourprovides?.catering} />
      <HomeFoodSection order={order == 2} data={data?.ourprovides?.groceries} />

      <Testimonial data={data?.testimonials}/>
      <ContactForm data={contact}/>
      <ContactMap/>
    </div>
  );
};

export default HomePage;
