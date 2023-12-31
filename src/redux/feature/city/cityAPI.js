import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import moment from 'moment'

// First, create the thunk
export const fetchCityTemperature = createAsyncThunk(
  'users/fetchByIdStatus',
  async ({lat, lng, from, to}, thunkAPI) => {
    try {
        
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max&timezone=Asia%2FBangkok&start_date=${from}&end_date=${to}`)
        
        if (response){
            const result = {times : response.data?.daily?.time, temperatures: response.data?.daily.temperature_2m_max}
            
            const dateArrays = await result?.times?.map((time) => time ? moment(time).format('DD MMM'): "Default" )
            
            const temperatureData = await dateArrays?.map((time, index) => {
                return ({ name: time, temperature: result?.temperatures[index] })
            })
            
            const todayTemp = result?.temperatures[dateArrays.indexOf(moment().format("DD MMM"))]
            
            return {temperatureData, todayTemp}
        }
        return null
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
  })