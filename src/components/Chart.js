import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { fetchCityTemperature } from '../redux/feature/city/cityAPI';

const WeatherChart = () => {

  const dispatch = useDispatch()
  const {location, temperatureData} = useSelector(state => state.city)

  useEffect(()=> {
    dispatch(fetchCityTemperature({lat: location.lat, lng: location.lng}))
  }, [location])

  return (
    <div className='chart-container w-full inset-x-0 max-w-screen-md mx-auto overflow-x-auto'>
        <ResponsiveContainer width="90%" height={400}>
        {temperatureData ? <LineChart width={500} height={300} data={temperatureData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="blue" />
        </LineChart>
        : <div class="bg-white p-6 rounded-lg shadow-md animate-pulse">
                <div class="w-[600px] h-[200px] bg-gray-300 mb-2"></div>
            </div>}
        </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
