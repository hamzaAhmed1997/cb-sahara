import React from 'react'
import { imageResolver } from '@/utils/helpers'

const index = ({data}) => {
  console.log("hero data", data)
  return (
    <>
      <div className='pt-16  '>
        <img src={imageResolver(data).path} alt="" />
      </div>
    </>
  )
}

export default index
