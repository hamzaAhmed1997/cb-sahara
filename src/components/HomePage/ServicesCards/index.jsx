import React from "react";
import CardItem from "./CardItem";

const data = [
  {
    title: "Restaurant",
    img: "https://saharamkt.com/wp-content/uploads/2022/03/restaurant.jpg",
  },
  {
    title: "Restaurant",
    img: "https://saharamkt.com/wp-content/uploads/2022/03/restaurant.jpg",
  },
  {
    title: "Restaurant",
    img: "https://saharamkt.com/wp-content/uploads/2022/03/restaurant.jpg",
  },
];

const ServicesCards = () => {
  return (
    <div className=" pt-[30px] pb-[20px] ">
     <div className="py-[60px]">
     <div className="mb-[50px]">
        <p className="text-center text-[#FFB400] text-[40px] font-bold leading-[1]  ">
          Order Online
        </p>
        <h2 className="text-center pb-2 text-[#FFB400] text-[25px] sm:text-[30px] leading-[1.2] mt-[8px] mb-[16px] ">
          Convenient Pickup and Delivery Services
        </h2>
      </div>
      <div className="max-w-[1300px] mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2">
        {data.map((data, index) => {
          return (
            <div key={index}>
              <CardItem title={data.title} link={data.link} image={data.img} />
            </div>
          );
        })}
      </div>
     </div>
    </div>
  );
};

export default ServicesCards;
