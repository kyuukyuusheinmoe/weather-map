import React, { useEffect, useState, useRef } from 'react'
import cities from '../../cities.json'
import { useDispatch } from 'react-redux'
import { updateCity } from '../redux/feature/city/citySlice'
import { fetchCityTemperature } from '../redux/feature/city/cityAPI'
import { XMarkIcon } from '@heroicons/react/24/solid'
import moment from 'moment'

function Search() {
    const [inputValue, setInputValue] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const currentDate = moment().format('YYYY-MM-DD')
    const sixDaysAfter = moment().add(6,'d').format('YYYY-MM-DD')

    useEffect(()=> {
        const seartchItems = inputValue.length > 2 ? cities.filter(item => {
            return item.city.toLowerCase().includes(inputValue.toLowerCase())
        }) : [];
          setSuggestions(seartchItems)
    }, [inputValue])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSuggestionClick = (item) => {
        dispatch(updateCity({name : item.city, lat: item.lat, lng: item.lng}))
        if (inputRef.current) {
        inputRef.current.value = item.city
        }
        setSuggestions([])
        dispatch(fetchCityTemperature({lat: item.lat, lng: item.lng, from : currentDate, to: sixDaysAfter}))
    }

    const handleRemove = () => {
        setInputValue("")
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

  return (
    <>
        <div className='relative'>
            <span className="flex items-center bg-white rounded-lg relative p-4">
                <input type="text" ref={inputRef} class="w-full p-2 rounded-2xl border focus:outline-none focus:border-blue-500" placeholder='Search City' onChange={handleInputChange}/>
                <XMarkIcon className={`${inputValue.length < 1 && "hidden" } absolute right-5 cursor-pointer w-5 h-5`} onClick={handleRemove} />
            </span>
            <div className='absolute top-[3.7rem] w-full inset-x-0 max-w-screen-md mx-auto overflow-x-auto px-4'>
                {suggestions?.length ? 
                <ul className="bg-gray-50 rounded-2xl px-4">
                {suggestions.map((item, index) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer text-left ${index !== suggestions.length - 1 ? 'border-b border-gray-300 p-2' : 'p-2'} `}
                        onClick={()=> handleSuggestionClick(item)}
                        >
                        {item.city}
                    </li>
                ))}
                </ul>
                : null}
            </div>
        </div>
    </>
  )
}

export default Search
