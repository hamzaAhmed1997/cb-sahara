import React from 'react'
import { imageResolver } from '@/utils/helpers'

const index = ({data}) => { 
  return (
    <>
      <div className='pt-[50px] max-w-[1150px]  '>
        <img src={imageResolver(data).path} alt="" />
      </div>
    </>
  )
}

export default index
