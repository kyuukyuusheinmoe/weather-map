import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const WeatherChart = () => {

  const {temperatureData} = useSelector(state => state.city)

  return (
    <div className='chart-container w-full text-center inset-x-0 max-w-screen-md mx-auto overflow-x-hidden'>
        <p className='text-lg p-2 pb-1'> Temperature Forecast </p>
        <span className='p-2 text-gray-500 text-sm'> {`(${moment().format('DD MMM YYYY')} - ${moment().add(6,'d').format('DD MMM YYYY')})`}</span>
        <ResponsiveContainer width="100%" height={400}>
        {!temperatureData.loading ? <LineChart width={500} height={300} data={temperatureData.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="blue" />
        </LineChart>
        : <div class="bg-white p-6 rounded-lg shadow-md animate-pulse">
                <div class="w-full h-[350px] bg-gray-100 mb-2"></div>
            </div>}
        </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
