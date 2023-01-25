import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeFoodSection = ({ order,position }) => {
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full my-[100px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className="grid md:grid-cols-3">
          <div
            className={` sm:p-[15px] md:col-span-2 ${
              order == 1 ? "order-2": "order-1"
            }`}

          >
            <h2 className="text-center border-b-[3px] text-[#6A0000] pb-2 border-[#FFB400] text-[36px] font-bold leading-[1.2] mb-[16px] ">
              SAHARA MARKET
            </h2>
            <p className="text-[#6A0000] text-[17px] font-400 leading-[2em] md:p-[10px] ">
              Sahara Market has established on 2009 as the largest Halal market
              and restaurant in Northern California. Ever since, Sahara Market
              has been trying to provide the best quality items to local and
              surrounding customers. Customers from all around Bay Area come to
              Sahara Market for buying their day to day needs. Sahara Market
              provides a Wide range of products and services including
              groceries, fresh bakeries, quality produce and vegetables,
              hand-slaughtered Halal meat and chicken, Halal Persian and Afghani
              cuisine restaurants, and Halal top quality catering. Stop by at
              Sahara Market when you pass around and experience its delicious
              foods, fresh Afghani breads, Halal meats and chicken, and tons of
              products with the most friendly environment.
            </p>
          </div>
          <div
            className={`py-[30px] px-[10px] w-full flex justify-center  ${
              order == 1 ? "order-1": "order-2" 
            }`}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img
              src="https://saharamkt.com/wp-content/uploads/2020/01/Restaurant_ed3850622aa2ae55b80492a7fa935d02.jpg"
              alt=""
              className="shadow "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFoodSection;
