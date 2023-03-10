import React from 'react'
import Link from 'next/link';
import Facebook from '../../Common/Icon/Facebook';
import Twitter from '../../Common/Icon/Twitter';
import Google from '../../Common/Icon/Google';
import { Instagram } from '../../Common/Icon/Instagram';
import { Youtube } from '../../Common/Icon/Youtube';
import { Profile } from '../../Common/Icon/Profile';
import Cart from '../../Common/Icon/Cart';

const TopCard = () => {
  return (
    <div className="bg-[#FFC648]  ">
     <div className='flex items-center justify-between max-w-[1140px] mx-auto px-4  '>
     <div className="w-[21%]">
        <div className="flex gap-x-[10px] space-x-2  py-3  w-full md:w-auto items-center">
        <Link href={""} legacyBehavior>
              <a href="">
                <Facebook className="hover:fill-[#6A0000] transition-all duration-300"/>
              </a>
            </Link>
        <Link href={""} legacyBehavior>
              <a href="">
                <Twitter className="hover:fill-[#6A0000] transition-all duration-300"/>
              </a>
            </Link>
        <Link href={""} legacyBehavior>
              <a href="">
                <Google width="18" height="18" className="hover:stroke-[#6A0000] transition-all duration-300"/>
              </a>
            </Link>
        <Link href={""} legacyBehavior>
              <a href="">
                <Instagram className="hover:fill-[#6A0000] transition-all duration-300"/>
              </a>
            </Link>
        <Link href={""} legacyBehavior>
              <a href="">
             <Youtube className="hover:fill-[#6A0000] transition-all duration-300"/>
              </a>
            </Link>
        </div>
      </div>
      <div className="w-[21%]">
        <div className="flex gap-x-[2px] space-x-2  py-3 justify-end w-ful md:w-auto md:items-center">
        <Link href={""} legacyBehavior >
              <a href='' >
               <Cart className="hover:stroke-[#6A0000] transition-all duration-300"/>
              </a>
            </Link>
        <Link href={""} legacyBehavior>
              <a href='' >
                <Profile className="hover:stroke-[#6A0000]  transition-all duration-300"/>
              </a>
            </Link>
        </div>
      </div>
     </div>
    </div>
  )
}

export default TopCard