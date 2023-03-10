import React from 'react'
import { imageResolver } from '@/utils/helpers'

const index = ({data}) => { 
  return (
    <>
      <div className='pt-[50px] max-w-[1600px] mx-auto '>
        <img className='w-full' src={imageResolver(data?.img)?.path} alt="gallery hero image" loading='lazy' />
      </div>
    </>
  )
}

export default index
