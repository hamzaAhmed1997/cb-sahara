import React from 'react'

export default function KeepInTouch({data}) {
  return (
      <div className='bg-[#6A0000] py-[60px] md:py-[70px] lg:py-[80px]'>
      <div className='max-w-[1140px] mx-auto px-4 '>
        <h2 className='text-[#ffc648] text-[26px] sm:text-[30px] md:text-[35px] lg:text-[40px] lg:leading-[60px] font-semibold text-center'>{data?.text}</h2>
        <div className='bg-[#ffc648] h-[2px] w-full my-[15px]'/>
        <div className='p-2 md:p-4 text-white lg:text-[17px] text-[14px] md:text-[16px] lg:leading-[34px] font-nomal' dangerouslySetInnerHTML={{__html:data?.body}}></div>
      </div>
    </div>
  )
}
