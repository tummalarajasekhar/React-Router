import React from "react";
import { useParams } from "react-router-dom";
 export default function User()
 {
    const {userId}=useParams()
    return (<div className="text-center p-4 text-xl font-semibold hover:bg-gray-100">User : {userId}    </div>)
 }