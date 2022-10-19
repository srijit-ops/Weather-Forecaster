import React from 'react'
import { useState } from 'react'

function Inputs({setQuery, units, setUnit}) {
  const [city,setCity]=useState("")
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
        setQuery({lat,lon})
      })
    }
  }
  const unitHandler=(e)=>{
    const selectedUnit= e.currentTarget.name
    if(units!==selectedUnit){
      setUnit(selectedUnit)
    }
  }
  return (
    <div className='row justify-content-between align-items-center my-4'>
      <div className="col-8 d-flex justify-content-between align-items-center">
        <input type="text" placeholder='search city' className='p-1 col-7' style={{outline:"none"}} value={city} onChange={(e)=>{setCity(e.currentTarget.value)}}></input>
        <i className='bx bx-search col-2' style={{fontSize:"1.8rem",cursor:"pointer"}} onClick={searchHandler}></i>
        <i className='bx bx-current-location col-2' style={{fontSize:"1.8rem",cursor:"pointer"}} onClick={locationHandler}></i>
      </div>
      <div className="col-2 d-flex justify-content-evenly align-items-center">
          <button name='metric' className='fw-bold' style={{fontSize:"1.2rem"}} onClick={unitHandler}>°C</button>
          <p className='fw-bold' style={{color:"white",fontSize:"1.2rem"}}>|</p>
          <button name='imperial' className='fw-bold' style={{fontSize:"1.2rem"}} onClick={unitHandler}>°F</button>
      </div>
    </div>
  )
}

export default Inputs