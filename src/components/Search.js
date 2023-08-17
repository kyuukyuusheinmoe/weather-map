import React, { useEffect, useState } from 'react'
import cities from '../../cities.json'

function Search() {
    const [inputValue, setInputValue] = useState("")
    const [debounceInputValue, setDebounceInputValue] = useState("")
    const [suggestions, setSuggestions] = useState([])
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(()=> {
        const delayInputTimeoutId = setTimeout(()=> {
                setDebounceInputValue(inputValue)
            }, 500)
        return () => clearTimeout(delayInputTimeoutId); 
    }, [inputValue])

    useEffect(()=> {
        const seartchItems = debounceInputValue.length > 2 ? cities.filter(item => {
            return item.city.toLowerCase().includes(debounceInputValue.toLowerCase())
        }) : [];
          setSuggestions(seartchItems)
    }, [debounceInputValue])

  return (
    <>
        <div className='relative'>
            <div className="bg-white rounded-lg relative p-4">
                <input type="text" class="w-full p-2 rounded-2xl border focus:outline-none focus:border-blue-500" placeholder='Search Location' onChange={handleInputChange}/>
            </div>
            <div className='absolute top-[3.7rem] w-full inset-x-0 max-w-screen-md mx-auto overflow-x-auto px-4'>
                {suggestions?.length ? <ul className="bg-gray-50 rounded-2xl px-4">
                {suggestions.map((item, index) => (
                    <li
                    key={item.id}
                    className={`text-left ${index !== suggestions.length - 1 ? 'border-b border-gray-300 p-2' : 'p-2'} `}
                    >
                    {item.city}
                    </li>
                ))}
                </ul>: null}
            </div>
        </div>
    </>
  )
}

export default Search
