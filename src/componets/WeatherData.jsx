import React, {  useEffect, useState } from 'react'
let api="fd210a80e80be7147dfc825e848ab17d";
let apiurl=`https://api.openweathermap.org/data/2.5/weather?`; 

const WeatherData = ({inputitem}) => {
const [data,setData]=useState(null)
const [loading,setloading]=useState(true)
const [Error,setError]=useState(null)

useEffect(()=>{
    const getData= async(value) => {
        try {
            const res=await fetch(`${apiurl}q=${value}&appid=${api}`)
            const result=await res.json()
            if(result.cod==="404")
            {
                console.log(result)
                setError(result.message)
                return

            }else{
            setData(result)
            console.log(result)
            setError(null)
            }
            
        } catch (error) {
            console.log(error);
            
            
        }finally{
            setloading(false)
        }
    } 
    
    getData(inputitem)

},[inputitem])
if(loading)
{
    return <h2>Loading... </h2>
}
if(Error)
{
    return <h1 className='text-red-500 mt-50'>City not Found..</h1>
}
return (
    <div className=' h-60 rounded-2xl grid place-items-center '>
        
<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="" />
        <h1 className='text-red-500'>{data.weather[0].description }</h1>

<p className=' text-white'>{Math.floor(data.main.temp/10)}°C</p>
<h1 className='text-white'>{data.name}</h1>
<div className='flex justify-between w-80 my-10'>
    <p>humtidity<br></br>
        {data.main.humidity}%

    </p>

    <p>wind<br></br>
        {Math.floor(data.wind.speed)}km/h
    </p>
</div>
    </div>
  )
}

export default WeatherData