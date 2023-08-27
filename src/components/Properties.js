import React from 'react'
import SingleProperty from './SingleProperty'


function Properties({MyProperties}) {
  
  
  return (
    <div className='w-full mt-6 flex flex-col'>
      <div className='flex justify-end items-center'>
        <select name="" id="" className="px-7 py-4 border border-blue-300 rounded-md form-control">
          <option value="">Price Asc</option>
          <option value="">Price Desc</option>
          <option value="">City Asc</option>
          <option value="">Size(sqm) Asc</option>
        </select>

      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-x-5 gap-y-8 mt-8'>
        {
          MyProperties.map(mp => <SingleProperty key = {mp.property_id} mpData = {mp}/>)
        }

      </div>
      
    </div>
  )
}

export default Properties
