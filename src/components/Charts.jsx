import React, { useState } from 'react'

import AreaChart from "./AreaChart"
import BarChart from "./BarChart"
import LineChart from "./LineChart"
function Charts(props) {
  
  const [chart,setChart]=useState(<AreaChart  weather={props.weather.hourly} />)
  const charts = ["Area", "Line", "Bar"];
    
    const handelChart = (chart) => {
      
      if(chart==="Area"){
        
        setChart(<AreaChart  weather={props.weather.hourly} />)
        
      }else if(chart==="Line"){
        setChart(<LineChart weather={props.weather.hourly}/>)
        
      }else{
        setChart(<BarChart weather={props.weather.hourly}/>)
        
      }
      
    };
    if(document.getElementById("radio_btns")){
      document.getElementById("Area").setAttribute("checked","checked")
    }
    
    return (
      <div className='mb-4 mt-5'>
        <div className="d-flex justify-content-start align-items-center my-4">
            <p className='fw-bold mb-4' style={{fontSize: "1.5rem"}}>Graphical representation of hourly temperature</p>
        </div>
        <div className="row justify-content-evenly align-items-center">
        {charts.map((chart) => (
        <div id='radio_btns' className='col-2'>
          <label htmlFor={chart} style={{color: "rgb(55, 61, 63)",fontSize: "1.1rem",marginRight: "1rem"}} className="fw-bold">{chart} Chart</label>
          <input
            type="radio"
            name="chart"
            id={chart}
            onClick={() => handelChart(chart)}
          />
        </div>
      )) 
      }
        </div>
        
      {chart}
      </div>
    );
  };

export default Charts