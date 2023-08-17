import { createSlice } from '@reduxjs/toolkit'
import { fetchCityTemperature } from './cityAPI'

const initialState = {
    location: {
        name: "Yangon",
        lat: 16.7950, 
        lng: 96.1600, 
    },
    temperatureData: null,
    todayTemp: null
}
export const citySlice = createSlice({
    name: 'citySlice',
    initialState,
    reducers: {
        updateCity: (state, action) => {
            return ({...state, location:{ ...action.payload}})
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCityTemperature.fulfilled, (state, action) => {
          return ({...state, temperatureData: [...action.payload?.temperatureData], todayTemp: action.payload?.todayTemp})
        })
    },
})

export const {updateCity} = citySlice.actions

export default citySlice.reducer