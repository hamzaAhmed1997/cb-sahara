import React from "react";

const SaharaMarket = ({order}) => {
  return (
    <div className="w-full py-[80px] bg-[#6A0000] my-[60px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className={` max-w-[1090px] ${order==1?"grid && md:grid-cols-3":null}`}>
          <div className={`md:p-[15px] ${order==1?"md:col-span-2":null}`}>
           <div>
             <p className="text-center text-[#FFFFFF] text-[24px] font-500 mb-[15px] ">
              Welcome to
            </p>
            <h2 className="text-center border-b-[3px] border-[#FFB400] pb-2 text-[#FFB400] text-[30px] sm:text-[40px] font-bold leading-[1.2] mt-[8px] mb-[16px] ">
              SAHARA MARKET
            </h2>
           </div>
            <p className="text-[#FFFFFF] text-[17px] font-400 leading-[2em] mb-[15px] ">
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
         <div className="">
         {order==1 ? <div className="flex md:items-end justify-center py-[30px] md:py-[70px] md:px-[10px]"
           data-aos="fade-left"
           data-aos-duration="3000">
          <img
              src="https://saharamkt.com/wp-content/uploads/2020/01/Restaurant_ed3850622aa2ae55b80492a7fa935d02.jpg"
              alt=""
              className="shadow "
            />
          </div>: null}
         </div>
        </div>
      </div>
    </div>
  );
};

export default SaharaMarket;
