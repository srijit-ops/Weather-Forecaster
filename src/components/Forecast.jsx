import React from 'react'
import { iconURL } from '../services/weatherService'

function Forecast({title,items}) {
    console.log(items)
  return (
    <div>
        <div className="d-flex justify-content-start align-items-center my-4">
            <p className='fw-bold mb-2' style={{fontSize: "1.5rem"}}>{title} forecast</p>
        </div>
        
        <div className="row justify-content-between align-items-center">
            {
                items.map((item)=>{
                    return(
                        <div className="col-2 forecast_card py-4">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className='mb-0 fw-bold' style={{fontSize: "2rem"}}>{`${item.temp.toFixed()}°`}</p>
                            
                            <img src={iconURL(item.icon)} alt=''/>
                            <p className='mb-0'>{item.title}</p>
                           
                        </div>
                        </div>
                        
                    )
                    
                })
            }
            
            
        </div>
    </div>
  )
}

export default Forecast