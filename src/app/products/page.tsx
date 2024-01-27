import Banner from '@/components/Banner'
import Filter from '@/components/Filter'
import ProductComponent from './Products'
import { NextPage } from 'next'
import React from 'react'

export default function Product() {
  return (
    <div>
      <Banner />
      <Filter />
      <ProductComponent />
    </div>
  )
}

// export default Products  