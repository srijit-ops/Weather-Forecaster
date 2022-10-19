import React from 'react'
import { iconURL } from '../services/weatherService'

function Forecast({title,items}) {
    console.log(items)
  return (
    <div>
        <div className="d-flex justify-content-start align-items-center mt-4">
            <p className='fw-bold mb-2' style={{fontSize: "1.2rem"}}>{title} forecast</p>
        </div>
        <hr className='mx-0 mb-3 mt-0' style={{opacity:"1"}}/>
        <div className="row justify-content-between align-items-center">
            {
                items.map((item)=>{
                    return(
                        <div className="d-flex flex-column justify-content-center align-items-center col-2">
                            <p className='mb-0'>{item.title}</p>
                            <img src={iconURL(item.icon)} alt=''/>
                            <p className='mb-0'>{`${item.temp.toFixed()}°`}</p>
                        </div>
                    )
                    
                })
            }
            
            
        </div>
    </div>
  )
}

export default Forecast