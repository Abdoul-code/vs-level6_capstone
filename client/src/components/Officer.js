import React,{useState, useContext, useEffect} from 'react'
import { UserContext } from '../context/UserProvider'
import OfficerForm from './OfficerForm'

function Officer(props){
    const {firstName , lastName, status, contact , gender, Email,_id, imgUrl} = props
    const {userAxios,getUserOfficer, user, allUsers, deleteOfficer,editOfficer } = useContext(UserContext)
    const [editToggle , setEditToggle] = useState(false)

    return(
        <div className='officer'>
            { !editToggle ?
            <>
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

    )
}
export default Officer