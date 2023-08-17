import React, { useEffect, useState } from 'react'
import cities from '../../cities.json'
import { useDispatch } from 'react-redux'
import { updateCity } from '../redux/feature/city/citySlice'
import { fetchCityTemperature } from '../redux/feature/city/cityAPI'

function Search() {
    const [inputValue, setInputValue] = useState("")
    const [debounceInputValue, setDebounceInputValue] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const dispatch = useDispatch()

    useEffect(()=> {
        const delayInputTimeoutId = setTimeout(()=> {
                setDebounceInputValue(inputValue)
            }, 500)
        return () => {clearTimeout(delayInputTimeoutId)}
    }, [inputValue])

    useEffect(()=> {
        const seartchItems = debounceInputValue.length > 2 ? cities.filter(item => {
            return item.city.toLowerCase().includes(debounceInputValue.toLowerCase())
        }) : [];
          setSuggestions(seartchItems)
    }, [debounceInputValue])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSuggestionClick = (item) => {
        dispatch(updateCity({name : item.city, lat: item.lat, lng: item.lng}))
        setInputValue(item.city)
        dispatch(fetchCityTemperature({lat: item.lat, lng: item.lng}))
    }

  return (
    <>
        <div className='relative'>
            <div className="bg-white rounded-lg relative p-4">
                <input type="text" value={inputValue} class="w-full p-2 rounded-2xl border focus:outline-none focus:border-blue-500" placeholder='Search Location' onChange={handleInputChange}/>
            </div>
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
