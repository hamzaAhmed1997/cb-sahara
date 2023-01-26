import React from 'react'
import { imageResolver } from '@/utils/helpers'

export default function CommonHero({data}) {
  return (
    <div >
      <div className='max-w-[1600px] mx-auto min-h-[400px] mt-[120px]'  style={{
                  background: `url('${imageResolver(data)?.path}') no-repeat center center/cover`,
                }}>

      </div>
    </div>
  )
}
