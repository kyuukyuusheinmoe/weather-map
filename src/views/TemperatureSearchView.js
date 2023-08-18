import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Location from "../components/Location";
import Chart from '../components/Chart'
import Search from "../components/Search";
import { fetchCityTemperature } from '../redux/feature/city/cityAPI';
import moment from 'moment'


function TemperatureSearchView() {
    const dispatch = useDispatch()
    const {location} = useSelector((state)=> state.city)

    const currentDate = moment().format('YYYY-MM-DD')
    const sixDaysAfter = moment().add(6,'d').format('YYYY-MM-DD')

    useEffect(()=> {
        dispatch(fetchCityTemperature({lat: location.lat, lng: location.lng,from: currentDate,to: sixDaysAfter}))
    }, [])

  return (
    <>
      <Search/>
      <Location/>
      <Chart/>
    </>
  )
}

export default TemperatureSearchView
