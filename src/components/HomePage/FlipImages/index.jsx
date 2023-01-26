import React from "react";
const data = [
  {
    img: "https://saharamkt.com/wp-content/uploads/2020/01/Grocey-11_c209518bacbb93c762c807b0f020cf17.png",
  },
  {
    img: "https://saharamkt.com/wp-content/uploads/2020/01/Grocey-11_c209518bacbb93c762c807b0f020cf17.png",
  },
  {
    img: "https://saharamkt.com/wp-content/uploads/2020/01/Grocey-11_c209518bacbb93c762c807b0f020cf17.png",
  },
  {
    img: "https://saharamkt.com/wp-content/uploads/2020/01/Grocey-11_c209518bacbb93c762c807b0f020cf17.png",
  },
  {
    img: "https://saharamkt.com/wp-content/uploads/2020/01/Grocey-11_c209518bacbb93c762c807b0f020cf17.png",
  },
  {
    img: "https://saharamkt.com/wp-content/uploads/2020/01/Grocey-11_c209518bacbb93c762c807b0f020cf17.png",
  },
];

const FlipImages = () => {
  return (
    <div className="w-full my-[40px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className="w-full mx-auto grid grid-cols-3 gap-4 lg:grid-cols-6"
         data-aos="fade-right"
         data-aos-duration="3000">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div class="flip-card w-[139px] h-[139px] mx-auto">
                  <div class="flip-card-inner relative w-full h-full ">
                    <div class="flip-card-front absolute">
                      <img src={item.img} alt="Avatar" />
                    </div>
                    <div class="flip-card-back absolute">
                    <img src="https://saharamkt.com/wp-content/uploads/2020/01/Grocey-20_1559b48e547c3469bba690740fc13775.png" alt="Avatar" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlipImages;
