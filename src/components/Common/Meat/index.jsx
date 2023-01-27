import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { imageResolver } from "@/utils/helpers";


const Meat = ({ order, data}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full py-[80px] bg-[#6A0000] my-[60px] ">
      
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className="grid md:grid-cols-3">
          <div
            className={` sm:p-[15px] md:col-span-2 ${
              order == 1 ? "order-2": "order-1"
            }`}

          >
            <h2 className=" text-[36px] text-center border-b-[3px] text-[#FFB400] pb-2 border-[#FFB400]  font-bold leading-[1.2] mb-[16px] ">
              {data?.title}
            </h2>
            <p className="text-white text-[17px] font-400 leading-[2em] md:p-[10px] ">
              {data?.description}
            </p>
          </div>
          <div
            className={`py-[30px] px-[10px] w-full flex justify-center  ${
              order == 1 ? "order-1": "order-2" 
            }`}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              src={imageResolver(data?.image).path}
              alt=""
              className="shadow "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meat;
