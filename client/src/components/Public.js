import React, {useContext, useEffect } from 'react'
import {UserContext} from '../context/UserProvider'
import PublicOfficer from './PublicOfficer.js'

export default function Public(){
    const {getAllOfficers ,officers, allOfficers} = useContext(UserContext)

    const officerDisplay = officers.map(officer =>{

       return <PublicOfficer key = {officer._id} creater={officer.user} {...officer}/>
    })

    useEffect(()=>{
        getAllOfficers();
        // console.log("Public")
    },[] )
  return (
    <div className='public'>
        {officerDisplay}

    </div>
  )
}

