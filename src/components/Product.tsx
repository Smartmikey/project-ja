import { product } from '@/types'
import { ArrowsRightLeftIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Product = ({product}: product) => {
    const {image, id, name, price, description} = product
  return (
    <div className='product group'>
        <Image src={image} className='w-full rounded-t-md' alt={name} width={285} height={300}/>
        <div className='p-4'>
            <h3 className=''>{name}</h3>
            <p className='text-sm text-gray-500 mb-2'>{description}</p>
            <p className='font-bold'>${price}</p>
        </div>

        <div className='product_details'>
            <button className='product_add_to_card'>Add to cart</button>
            <div className='product_icon_buttons'>
                <button><ShareIcon className='h-4'/> Share</button>
                <button><ArrowsRightLeftIcon className='h-4'/> Compare</button>
                <button><HeartIcon className='h-4'/> Like</button>
            </div>
        </div>
    </div>
  )
}

export default Product