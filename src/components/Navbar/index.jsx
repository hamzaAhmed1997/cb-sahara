import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import SubMenu from './subMenu'

const data=[
  { title: "Home", link: "/" },
  { title: "about", link: "/" },
  { title: "Gallery", link: "/" },
  { title: "Contact", link: "/" },
  { title: "Order Online", link: "/" }
]
const Navbar = () => {
  const about = [
    { title: "Meat", link: "#" },
  ]
  const orderOnline = [
    { title: "Meat", link: "#" },
    { title: "Meat", link: "#" },
    { title: "Meat", link: "#" },
  ]
  

  const router = useRouter();
  const currentRoute = router.pathname.slice(0);

  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  return (
    <div>
      <div className=" shadow-lg bg-[#F1F1F1]">
      <nav>
        <div className="container max-w-[1200px]   mx-auto flex justify-between flex-wrap py-[20px]  flex-row items-center px-[12px]">
          <div className="hover:cursor-pointer w-[177px] h-[44px]">
          <Link href={"/"} legacyBehavior>
        <a href={"/"}>
            <img className="w-full h-full" src="https://saharamkt.com/wp-content/uploads/2019/07/Logo-2020-01-28-Rect-left.png" alt="logo" loading="lazy"></img>
        </a>
      </Link>
          </div>       
            <div className="mx-[5px] flex     items-center text-[18px] text-[#87868A] leading-[30px] font-[600] gap-x-[20px] ">
              {data.map((item, index) => (
                // ${item.link}
                <Link href={"/"} legacyBehavior key={index}>
                  <div
                    onMouseEnter={() => {
                      index === 1 && setIsSubmenu(true),
                        index === 2 && setIsSubmenu1(true)
                    }}
                    // ${styles.cusMenu}
                    className={`flex cursor-pointer items-center relative `}
                  >
                    <a href={"/"} className={`hover:text-[#3387BF] hover:cursor-pointer ${currentRoute === item.link ? "text-[#3387BF]" : "text-[#87868A]"}`}>
                      {item.title}
                    </a>
                    {index === 1 && (
                      <>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                          <SubMenu setIsSubmenu={setIsSubmenu} dropdown={about} />
                        )}
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                          <SubMenu setIsSubmenu={setIsSubmenu1} dropdown={orderOnline} service />
                        )}
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Navbar