import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const mydata = [
  { title: "Home", link: "/" },
  { title: "Store", link: "/store" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
];
const data = [
  { day: " Mon: 10AM – 6:00 PM" },
  { day: "Tue: 10AM – 6:00 PM" },
  { day: "Wed: 10AM – 6:00 PM" },
  { day: "Tue: 10AM – 6:00 PM" },
  { day: " Fri: 10AM – 6:00 PM" },
  { day: "Sat: 10AM – 6:00 PM" },
  { day: "Sun: 10AM – 6:00 PM" },
];
export default function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  return (
    <div className="bg-[#6A0000]">
      <div className="max-w-[1140px] mx-auto px-4 md:flex pt-[60px] justify-between">
        <div className="md:w-[40%]">
          <div className="max-w-[300px] h-[80px] mb-[15px]">
            <img className="w-full h-full" src="images/footerlogo.png" />
          </div>
          <p className="text-[16px] leading-[24px] text-white font-normal">
            The best Persian and Afghani style one-stop shop market. We offer
            grocery, bakery, fresh produce, Halal meat and chicken, restaurant,
            and catering in the largest Halal market in Northern California.
          </p>
        </div>
        <div className="md:w-[50%] sm:flex mt-[50px] md:mt-0">
          <div className="w-1/2 px-4">
            <h2 className="text-[20px] leading-[30px] text-white font-bold">QUICK LINKS</h2>
            <div className="mt-[20px]">
              {mydata.map((item, index) => (
                <Link href={item.link} legacyBehavior key={index}>
                  <p
                    onMouseEnter={() => {
                      index === 1 && setIsSubmenu(true),
                        index === 4 && setIsSubmenu1(true);
                    }}
                    className="text-[16px] leading-[35px] text-[#ffffff]  hover:text-[#FFC648] transition font-semibold tracking-[1px]"
                  >
                    <a
                      href={item.link}
                      className={`  ${
                        currentRoute === item.link
                          ? "text-[#FFC648] border-b-[2px] border-[#FFC648]"
                          : ""
                      }`}
                    >
                      {item.title}
                    </a>
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:w-1/2">
            <h2 className="text-[20px] leading-[30px] text-white font-bold">OPEN HOURS</h2>
            <div className="mt-[20px]">
             {data.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-[15px] leading-[35px] text-white  ">
                    {item.day}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-center text-[14px] leading-[14px] font-[400] text-white py-[20px] px-4">
          © 2022
          <span className="hover:text-[#FFC648] transition-all duration-300 font-[500]">
            <Link href={"/"} legacyBehavior>
              <a href={"/"}> SAHARA MARKET </a>
            </Link>{" "}
          </span>
          | All rights reserved. | Powered by:
          <span className="hover:text-[#FFC648] transition-all duration-300 font-[500]">
            <Link
              href={"https://vigorant.com/"}
              legacyBehavior
              target={"_blank"}
              rel="noopener"
            >
              <a href={"https://vigorant.com/"}> Vigorant, Inc.</a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
