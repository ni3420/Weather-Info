import React, { useState } from 'react'
import WeatherData from './WeatherData'

const WeatherHeader = () => {
    const [Text,setText]=useState("")
    const [input,setinput]=useState("")
    const cityname=()=>{
        if(Text==="")
        {
            return
        }else{
        setinput(Text.trim())
        setText("")
        }
    }
    if(input==="")
    {
        let cityname="New York"
        setinput(cityname)
    }
    
    
    


  return (
    <div className='bg-black w-100 h-150 m-4 p-4 text-white text-center text-2xl rounded-xl'>
        <h1>Weather Info</h1>
        <input type="text" className='rounded bg-white outline-0 w-60  text-black' value={Text} onChange={(e)=>setText(e.target.value)}
         />
        <button className='text-2xl bg-sky-500 rounded-3xl p-2 m-4 cursor-pointer' onClick={cityname}>🔎</button>
    <WeatherData inputitem={input}/>
   
    </div>
  )
}

export default WeatherHeader