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
        <Bar data={data} />
      </div>
    );
  };

export default Charts