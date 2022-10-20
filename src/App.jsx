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
  const changeBg=()=>{
    if(!weather){
      console.log("hwyy")
      //document.getElementsByTagName("body")[0].style.background="linear-gradient(118deg, rgba(16,207,146,1) 31%, rgba(35,136,168,1) 91%)"
      return("linear-gradient(118deg, rgba(16,207,146,1) 31%, rgba(35,136,168,1) 91%)")
    }else{
      const thresold=units==="metric"?20:60
      if(weather.temp<=thresold){
        //document.getElementsByTagName("body")[0].style.background="background: linear-gradient(118deg, rgba(18,136,196,1) 31%, rgba(177,219,240,1) 82%)"
        return("linear-gradient(118deg, rgba(18,136,196,1) 31%, rgba(177,219,240,1) 82%)")
      }else{
        //document.getElementsByTagName("body")[0].style.background="linear-gradient(118deg, rgba(251,117,50,1) 31%, rgba(227,212,209,1) 92%)"
       return("linear-gradient(118deg, rgba(251,117,50,1) 31%, rgba(227,212,209,1) 92%)")
      }
    }

  }
  console.log(weather)
  return (
    
    <div className="py-5 px-4" style={{background:changeBg(),boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"5px"}}>
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
