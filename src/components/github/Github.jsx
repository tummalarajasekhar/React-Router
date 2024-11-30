import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


 export default function User()
 {  
    // using Loader in router
    const data=useLoaderData()

    // using useEffect
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/tummalarajasekhar")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data) 
    //         console.log(data)
    // })
    // },[])

    return (
    <>
    
    <div className="flex justify-evenly text-center p-4 text-xl font-semibold hover:bg-gray-100">
    <img src={data.avatar_url} alt="git picture"width={300}/>
    <div className="">
    <div className="p-2 flex justify-start">Name : {data?.name  } </div>
    <div className="p-2 flex justify-start">Github Followers : {data?.followers} </div>
    <div className="p-2 flex justify-start">Github Following: {data?.following} </div>
    </div>
    
    </div>
    
    
    </>

    )
 }


 export const gitHubInfoLoader=async ()=>{
    const response =await fetch('https://api.github.com/users/tummalarajasekhar')
    return response.json()

 }