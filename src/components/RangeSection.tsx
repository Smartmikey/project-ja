import React from 'react'
import RangeSingle from './RangeSingle'
import { rangeData } from '@/data'

const RangeSection = () => {
  return (
    <div className='max-w-4xl mx-auto my-12'>

    <div className='grid grid-cols-3 grid-flow-col gap-6'>
    {rangeData.map((item, index) =>(
        <RangeSingle key={index} data={item} />
        ))}
    </div>
        </div>
  )
}

export default RangeSection