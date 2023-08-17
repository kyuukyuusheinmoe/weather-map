import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function Location() {
    const {location, todayTemp} = useSelector((state) => state.city)
    
  return (
    <div className='p-4'>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-row-reverse"> {moment().format('DD MMM')}</div>
        <div className='flex justify-between'>
            <div>
                <p className="text-xl font-semibold mb-4">{location?.name}</p>
                <p className="text-4xl text-blue-500">{`${todayTemp}°C`}</p>
            </div>
            <img src='/weather.png' alt="weather" />
        </div>
      </div>
    </div>
  )
}

export default Location
