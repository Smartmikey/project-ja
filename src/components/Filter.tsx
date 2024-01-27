import { Squares2X2Icon } from '@heroicons/react/16/solid'
import { AdjustmentsHorizontalIcon, QueueListIcon,  } from '@heroicons/react/24/outline'
import React from 'react'

const Filter = () => {
  return (
    <div className='filter'>
        <div className='filter_result'>
            <div className='flex space-x-1'>
                <AdjustmentsHorizontalIcon className='h-6' /> <span>Filter</span>
            </div>
            <Squares2X2Icon className='h-6' />
            <QueueListIcon className='h-6' />
            <div className='border-r-2 border-gray-400'></div>
            <p>Showing 1–16 of 32 results</p>
            
        </div>
        <div className='hidden md:inline-flex'>
            <form className='sort '>
                <label > Show 
                    <select>
                        <option>16</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                </label>
                <label > Sort by 
                    <select>
                        <option>Default</option>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </label>
            </form>
        </div>
    </div>
  )
}

export default Filter