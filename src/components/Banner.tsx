import { ArrowLongRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Banner = () => {
  return (
    <div className=' banner'>
       <div>
        <h2 >Shop</h2>
        <div>
            <span className='font-bold'>Home<ArrowLongRightIcon className='h-6 inline'/></span> <span>Shop</span>
        </div>
       </div>
    </div>
  )
}

export default Banner