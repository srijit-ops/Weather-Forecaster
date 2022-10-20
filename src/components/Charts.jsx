import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
function Charts(props) {
    const labels = props.weather.hourly.map((item)=>{
        return item.title
      })
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Temperature",
          backgroundColor: "yellow",
          borderColor: "yellow",
          data: props.weather.hourly.map((item)=>{
            return item.temp
          }) ,
        },
      ],
    };
    return (
      <div className='my-4'>
        <div className="d-flex justify-content-start align-items-center mt-4">
            <p className='fw-bold mb-2' style={{fontSize: "1.2rem"}}>Graphical representation of hourly temperature</p>
        </div>
        <hr className='mx-0 mb-3 mt-0' style={{opacity:"1"}}/>
        <Bar data={data} />
      </div>
    );
  };

export default Charts