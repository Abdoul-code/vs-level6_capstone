import React, { useState,useContext,useCallback, useMemo, useEffect} from 'react'
import OfficerForm from './OfficerForm'
import OfficerList from './OfficerList.js'
import imageUser1 from '../css/pict/Image.JPG'

import {useDropzone} from 'react-dropzone'
import profile from '../css/profile.css'
import {UserContext} from '../context/UserProvider.js'

export default function Profile(){
    // const {userAxios,getUserOfficer, user, allUsers, deleteOfficer } = useContext(UserContext)
    const {user :{
        username
     },
      addOfficer,
      officers,
      getUserOfficers,
      getAllOfficers,
      setAllOfficers
    } = useContext(UserContext)
   
    // useEffect(() => {
    //     userAxios.get("/api/security")
    //         .then(res => setAllOfficers(res.data))
    //         .catch(err => console.log(err))
    // }, [])
    const[fileUrl , setFileUrl] = useState(null)
    return(
        <div className='Style_account'>
            <div className='profile'>
                <h1>Welcome @{username}</h1>
                <h3>Add Security Officer</h3>
                <OfficerForm username = {username} addOfficer = {addOfficer}/>
                <h3>Your Officer</h3>
                <OfficerList officers = {officers}/>
            </div>
            <div className='Style_account_box'>
                <div className='Style_account_box_img'>
                    <input />
                    <img src={imageUser1}
                     alt="account upload"
                     width={150}
                     height={150}
                     className='account_box_img_img'
                     />
                     <p className='Style_account_box_img_para'>Change image</p>

                </div>
            </div>
        </div>
        
    )
}