import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function Timelocation(props) {
  console.log(props.weather)
  return (
    <div className='mt-5 mb-3'>
        <div className="d-flex justify-content-center align-items-center">
            <p>
              {formatToLocalTime(props.weather.dt,props.weather.timezone)}
            </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <p className='fw-bold' style={{fontSize:"1.5rem"}}>{`${props.weather.name},${props.weather.country}`}</p>
        </div>
    </div>
  )
}

export default Timelocation