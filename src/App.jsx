import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Weather.css'


export default function App() {
  let [weatherData,setWeatherdata]=useState({});
  let [city,setcity]=useState('')
  let [apikey]=useState('1cfcf9fc9b7d576c767bf5ad499c6dc0')

  let fetchWeatherData=async()=>{
    try {
      const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
      setWeatherdata(response.data)
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }

  useEffect(()=>{
    fetchWeatherData();
  },[city])
  return (
    <div id='body'>
      <h1 id='h1' className='display-3'>Weather Report App</h1>
       <div id='weatherReport'>
       <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        className='border-0 border-bottom border-4 border-info'
      />

      <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="" />

      <br />
      {weatherData.main && (
        <div className='weather'>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
        </div>
      )}
      <footer>
        <marquee scrollamount='2'>
          Code By <a href='#'>Sivanantham</a>
        </marquee>
       </footer>
       </div>
       
    </div>
  )
}
