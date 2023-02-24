import './App.css'
import Quicklinks from './components/Quicklinks'
import Inputs from './components/Inputs'
import Timelocation from './components/Timelocation'
import Tempanddetail from './components/Tempanddetail'
import Forecast from './components/Forecast'
import getFormatttedWeatherData from './services/weatherService'
import { useState, useEffect } from 'react'
import Charts from './components/Charts'
function App() {
const [query,setQuery]=useState({q:"delhi"})
const [units,setUnit]=useState("metric")
const [weather,setWeather]=useState(null)
const [city,setCity]=useState("delhi")
useEffect(()=>{
  const fetchWeather= async()=>{
    await getFormatttedWeatherData({...query,units:units}).then((data)=>{
      setWeather(data)
    })
    
  }
  fetchWeather()
},[query,units])
  return (
    <div className="py-5 px-5 weather_holdr">
      <Quicklinks setQuery={setQuery} city={city} setCity={setCity} query={query}/>
      <Inputs setQuery={setQuery} units={units} setUnit={setUnit} city={city} setCity={setCity} query={query} weather={weather}/>
      {weather && (
        <div>
      <Timelocation weather={weather}/>
      <Tempanddetail weather={weather}/>
      <Charts weather={weather}/>
      <Forecast title="Hourly" items={weather.hourly}/>
        </div>
      )
      }
    </div>
  )
}

export default App
