import React from 'react'
import ReactApexChart from 'react-apexcharts';
function LineChart({weather}) {
    console.log(weather)
    const series= [{
        name: "Temparature",
        data:  weather.map((item)=>item.temp)
    }]
    const options={
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: weather.map((item)=>item.title)
        }
      }
    
    
    
  return (
    
    <div>
    
  <ReactApexChart options={options} series={series} type="line" height={350} />

    </div>
  )
}

export default LineChart