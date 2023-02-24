import React from 'react'
import { useState,useEffect } from 'react'
import getFormatttedWeatherData from '../services/weatherService'

function Inputs({setQuery, units, setUnit,city,setCity,query,weather}) {
  
  const searchHandler=()=>{
    if(city !== ""){
      setQuery({q:city})
    }
  }
  const locationHandler=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat=position.coords.latitude
        let lon=position.coords.longitude
       // console.log(lat,lon)
        setQuery({lat,lon})
        //console.log(query)
        
        //console.log(weather)
        //setCity(weather.name)
      })
    }
  }
  const unitHandler=(e)=>{
    const selectedUnit= e.currentTarget.name
    if(units!==selectedUnit){
      setUnit(selectedUnit)
    }
  }
  /*useEffect(()=>{
    if(query.lat&&query.lon){
      setCity(weather.name)
    }
    console.log(query)
    console.log(weather)
      //setCity(weather.name)
    
    
  },[query])*/
  return (
    <div className='row justify-content-between align-items-center mt-4' style={{marginBottom: "4.5rem"}}>
      <div className="col-8 d-flex justify-content-evenly align-items-center">
        <input type="text" placeholder='search city' className='p-2 col-8 search_bar fw-bold' style={{outline:"none"}} value={city} onChange={(e)=>{setCity(e.currentTarget.value)}}></input>
        <i className='bx bx-search col-1' style={{fontSize:"1.8rem",cursor:"pointer"}} onClick={searchHandler}></i>
        <i className='bx bx-current-location col-1' style={{fontSize:"1.8rem",cursor:"pointer"}} onClick={locationHandler}></i>
      </div>
      <div className="col-2 d-flex justify-content-evenly align-items-center py-2 temp_converter" style={{borderRadius: "5px",boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px",color: 'black'}}>
          <button name='metric' className='fw-bold' style={{fontSize:"1.2rem"}} onClick={unitHandler}>°C</button>
          <p className='fw-bold mb-0' style={{color:"black",fontSize:"1.2rem"}}>|</p>
          <button name='imperial' className='fw-bold' style={{fontSize:"1.2rem"}} onClick={unitHandler}>°F</button>
      </div>
    </div>
  )
}

export default Inputs