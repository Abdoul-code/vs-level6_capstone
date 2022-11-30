import React,{useContext , useState, useEffect} from 'react'
import {UserContext} from '../context/UserProvider'

export default function  PublicOfficer(props){
    const {creater, author , firstName , lastName, status, contact , gender, Email,_id} = props
    const initInputs = {author:"" , firstName:"" , lastName:"", status:"", contact:"" , gender:"", Email:"",_id:"", imgUrl:""}
    const {userAxios, getUserOfficers, user , allUsers, deleteOfficer} = useContext(UserContext)
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

        </div>



    </div>
  )
}

