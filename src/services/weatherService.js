import {DateTime} from "luxon"
const API_KEY="a8ee89058068cc7de7db4e33aefcc168"
const BASE_URL="https://api.openweathermap.org/data/2.5"
const getWeatherData=(infoType,searchParams)=>{
    const url= new URL(BASE_URL+"/"+infoType)
    url.search= new URLSearchParams({...searchParams,appid:API_KEY})
    return fetch(url)
            .then((res)=>res.json())
}
const formatCurrentWeather=(data)=>{
    const {
        coord:{lat,lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed}
    }=data
    const {main:details, icon}= weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details, icon,speed}
}
const formatForecastWeather=(data)=>{
    console.log(data)
let {timezone,list}=data
console.log(list)
let daily=list.slice(1,6).map(d=>{
    return {
        title: formatToLocalTime(d.dt,timezone,'ccc'),
        temp: d.main.temp,
        icon: d.weather[0].icon
    }
})
let hourly=list.slice(1,6).map(d=>{
    return {
        title: formatToLocalTime(d.dt,timezone,'hh:mm a'),
        temp: d.main.temp,
        icon: d.weather[0].icon
    }
})
return {timezone,daily,hourly}
}

const getFormatttedWeatherData= async(searchParams)=>{
const formattedCurrentWeather=await getWeatherData("weather",searchParams).then(formatCurrentWeather)
const {lat,lon}=formattedCurrentWeather
const formattedForecastWeather= await getWeatherData("forecast",{lat,lon, exclude:"current,minutely,alerts",units:searchParams.units})
                                .then(formatForecastWeather)

return {...formattedCurrentWeather, ...formattedForecastWeather}
}
const formatToLocalTime=(secs,zone,format="cccc,dd LLL yyyy' | Local time: 'hh:mm a")=> DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
const iconURL=(code)=>`http://openweathermap.org/img/wn/${code}@2x.png`
export default getFormatttedWeatherData
export {formatToLocalTime,iconURL}