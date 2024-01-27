import { data } from '@/types'
import Image from 'next/image'
import React, { Fragment } from 'react'


const RangeSingle = ({data}: data) => {
  return (
    <div className=' mx-auto text-center'>
        <Image src={data.image} className='mb-4' width={350} height={500} alt={data.name} />
        <p>{data.name}</p>
    </div>
  )
}

export default RangeSingle