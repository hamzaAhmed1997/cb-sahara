import React from 'react'
import Link from 'next/link';
import Facebook from '../../Common/Icon/Facebook';
import Twitter from '../../Common/Icon/Twitter';
import Google from '../../Common/Icon/Google';
// import Instagram from '../../Common/Icon/Instagram'
// import Youtube  from '../../Common/Icon/Youtube';

const TopCard = () => {
  return (
    <div className="w-full  px-4  bg-[#FFC648]  ">
     <div className='flex items-center justify-between max-w-[1140px] mx-auto px-4  '>
     <div className="w-[21%]">
        <div className="flex gap-x-[2px] space-x-2  py-3 items-start  w-full md:w-auto md:items-center">
        <Link href={"/"} legacyBehavior>
              <a className="hover:text-red-600">
                <Facebook/>
              </a>
            </Link>
        <Link href={"/"} legacyBehavior>
              <a className="">
                <Twitter/>
              </a>
            </Link>
        <Link href={"/"} legacyBehavior>
              <a className="">
                <Google/>
              </a>
            </Link>
        <Link href={"/"} legacyBehavior>
              <a className="">
                {/* <Instagram/> */}
              </a>
            </Link>
        <Link href={"/"} legacyBehavior>
              <a className="">
                {/* <Youtube/> */}
              </a>
            </Link>
        </div>
      </div>
      <div className="w-[21%]">
        <div className="flex gap-x-[2px] space-x-2  py-3 justify-end w-ful md:w-auto md:items-center">
        <Link href={"/"} legacyBehavior>
              <a className="">
                <Facebook/>
              </a>
            </Link>
        <Link href={"/"} legacyBehavior>
              <a className="">
                <Twitter/>
              </a>
            </Link>
     
        </div>
      </div>
     </div>
    </div>
  )
}

export default TopCard