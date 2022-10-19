import React from 'react'

function Quicklinks({setQuery}) {
    const cities=[
        {
            id:1,
            title:"Delhi"
        },
        {
            id:2,
            title:"Kolkata"
        },
        {
            id:3,
            title:"Mumbai"
        },
        {
            id:4,
            title:"Bangalore"
        },
        {
            id:5,
            title:"Pune"
        }
    ]
  return (
    <div className='d-flex justify-content-around align-items-center mb-5'>
        {cities.map((city)=>{
            return <button key={city.id} className='fw-bold' style={{fontSize:"1.1rem"}} onClick={()=>{setQuery({q:city.title})}}>{city.title}</button>
        })}
    </div>
  )
}

export default Quicklinks