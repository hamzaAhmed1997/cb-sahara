import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenu from "./subMenu";
import TopCard from "./TopCard";
import Hamburger from "../Hamburger";

const data = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
  { title: "Order Online", link: "#" },
];
const Navbar = () => {
  const about = [{ title: "Meat", link: "#" }];
  const orderOnline = [
    { title: "RESTAURANT", link: "#" },
    { title: "MEAT SHOP", link: "#" },
    { title: "GROCERIES -Coming Soon", link: "#" },
  ];

  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  const [isSubMenu3, setIsSubmenu3] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full mx-auto">
      <div className="transition ">
        <TopCard />
      </div>
      <div className=" shadow-lg bg-[#ffffff]">
        <nav>
          <div className=" max-w-[1140px] mx-auto flex justify-between  py-[20px]  flex-row items-center px-[12px]">
            <div className="hover:cursor-pointer w-[177px] h-[44px]">
              <Link href={"/"} legacyBehavior>
                <a href={"/"}>
                  <img
                    className="w-full h-full"
                    src="https://saharamkt.com/wp-content/uploads/2019/07/Logo-2020-01-28-Rect-left.png"
                    alt="logo"
                    loading="lazy"
                  ></img>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="mx-[5px] hidden lg:flex items-center text-[#6A0000] leading-[1em] text-[16px] font-[600] gap-x-[20px] ">
                {data.map((item, index) => (
                  // ${item.link}
                  <Link href={item.link} legacyBehavior key={index}>
                    <div
                      onMouseEnter={() => {
                        index === 1 && setIsSubmenu(true),
                          index === 4 && setIsSubmenu1(true);
                      }}
                      // ${styles.cusMenu}
                      className={`flex cursor-pointer items-center relative `}
                    >
                      <a
                        href={item.link}
                        className={`hover:text-[#ffffff] hover:bg-[#FFC648] transition px-[20px] py-[12px] hover:cursor-pointer ${
                          currentRoute === item.link
                            ? "text-[#ffffff] bg-[#FFC648]"
                            : "text-[#6A0000]"
                        }`}
                      >
                        {item.title}
                      </a>
                      {index === 1 && (
                        <>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {isSubMenu && (
                            <SubMenu
                              setIsSubmenu={setIsSubmenu}
                              dropdown={about}
                            />
                          )}
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {isSubMenu1 && (
                            <SubMenu
                              setIsSubmenu={setIsSubmenu1}
                              dropdown={orderOnline}
                            />
                          )}
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:hidden flex items-center lg:bg-white  h-[32px] w-[40px] justify-center ">
              <Hamburger
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                isSubMenu={isSubMenu}
                isSubMenu2={isSubMenu2}
                isSubMenu3={isSubMenu3}
                setIsSubmenu={setIsSubmenu}
                setIsSubmenu1={setIsSubmenu}
                setIsSubmenu2={setIsSubmenu2}
                setIsSubmenu3={setIsSubmenu3}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
