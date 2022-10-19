import React from 'react'
import { formatToLocalTime, iconURL } from '../services/weatherService'

function Tempanddetail(props) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <p style={{fontSize:"1.15rem"}}>{props.weather.details}</p>
      </div>
      <div className="row justify-content-between align-items-center">
          
            <img className="col-2" src= {iconURL(props.weather.icon)} style={{
    height: "auto", width:"12%"}}/>
         
          <p className="col-2" style={{fontSize:"1.7rem"}}>{`${props.weather.temp.toFixed()}°`}</p>
          <div className="col-3 flex-column">
            <div className="row justify-content-center align-items-center mb-1" style={{fontSize:"1.1rem"}}>
            <i className='bx bxs-thermometer col-1'style={{fontSize:"1.5rem"}}></i>
            <p className="col-4 mb-0">Real Felt:</p>
            <span className="col-4 fw-bold">{`${props.weather.feels_like.toFixed()}°`}</span>
            </div>
            <div className="row justify-content-center align-items-center mb-1" style={{fontSize:"1.1rem"}}>
            <i className='bx bx-droplet col-1'style={{fontSize:"1.5rem"}}></i>
            <p className="col-4 mb-0">Humidity:</p>
            <span className="col-4 fw-bold">{`${props.weather.humidity.toFixed()} %`}</span>
            </div>
            <div className="row justify-content-center align-items-center" style={{fontSize:"1.1rem"}}>
            <i className='bx bx-wind col-1'style={{fontSize:"1.5rem"}}></i>
            <p className="col-4 mb-0">Wind:</p>
            <span className="col-4 fw-bold">{`${props.weather.speed.toFixed()} kmph`}</span>
            </div>
          </div>
      </div>
      <div className="row justify-content-around align-items-center mt-4">
      <i className='bx bx-sun col-1' style={{fontSize:"1.3rem"}}></i>
      <p className='col-2 mb-0'>Rise: <span className=''>{formatToLocalTime(props.weather.sunrise,props.weather.timezone,"hh:mm a")} |</span></p>

      <i className='bx bx-loader-circle col-1' style={{fontSize:"1.3rem"}}></i>
      <p className='col-2 mb-0'>Sunset: <span className=''>{formatToLocalTime(props.weather.sunset,props.weather.timezone,"hh:mm a")} |</span></p>
     
      <i className='bx bx-up-arrow-alt col-1' style={{fontSize:"1.3rem"}}></i>
      <p className='col-2 mb-0'>High: <span className=''>{`${props.weather.temp_max.toFixed()}° |`} </span></p>
      
      <i className='bx bx-down-arrow-alt col-1' style={{fontSize:"1.3rem"}}></i>
      <p className='col-2 mb-0'>Low: <span className=''>{`${props.weather.temp_min.toFixed()}°`}</span></p>
      
      </div>
    </div>
  )
}

export default Tempanddetail