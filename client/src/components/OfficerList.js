import React from 'react'
import Officer from './Officer.js'

export default function OfficerList(props){
    const {officers} = props
    return(
        <div className='officer-list'>
            {officers.map(officer => <Officer {...officer} key = {officer._id}/>)}
        </div>
    )
}