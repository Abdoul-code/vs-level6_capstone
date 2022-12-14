import React,{useContext , useState, useEffect} from 'react'
import {UserContext} from '../context/UserProvider'
import OfficerForm from './OfficerForm'

export default function  PublicOfficer(props){
    const {creater, author , firstName , lastName, status, contact , gender, Email,_id} = props
    const initInputs = {author:"" , firstName:"" , lastName:"", status:"", contact:"" , gender:"", Email:"",_id:"", imgUrl:""}
    const {userAxios, getUserOfficers, user , allUsers, deleteOfficer, editOfficer} = useContext(UserContext)
    const [inputs, setInputs ] = useState({initInputs})
    const [editToggle , setEditToggle] = useState(false)

    function onChange(e){
        const {name, value} = e.target
        setInputs(prevState => ({...prevState, [name]: value}))
    }

   


    useEffect(() =>{
        getUserOfficers()
        console.log("publicOfficer")
    
    },[])
  return (
      <div className='officer-container'>
        <div className='publicOfficer'>
          { !editToggle ?
          <>
                   <h2> Author: {author}</h2>
                   <h2>Fistname: {firstName}</h2>
                    <h2>Lastname: {lastName}</h2>
                    <h3>Status: {status}</h3>
                    <h3>contact: {contact}</h3>
                    <h3>gender:{gender}</h3>
                    <h3>Email: {Email}</h3>
                    <button className='delete-btn'
                    onClick={()=> deleteOfficer(_id)}>
                        Delete
                    </button>
                    <button 
                    className='edit-btn'
                    onClick={()=>setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
          </>
           :
           <>
               <OfficerForm
               firstName={firstName}
               lastName={lastName}
               status={status}
               _id = {_id}
               contact={contact}
               btnText = "SUBMIT EDIT"
               submit = {editOfficer}
               />
               <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}>
                   Close
               </button>
           </>
              }
               </div>
                  
    </div>

  )
}

