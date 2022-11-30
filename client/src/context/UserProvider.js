import React, { useState } from 'react'
import axios from 'axios'
export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})
export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {} ,
        token: localStorage.getItem("token") || "",
        officers:[],
        errMsg:""
    }

    const [userState, setUserState] = useState(initState)
    const [allUsers , setAllUsers] = useState([])
    const [allOfficers, setAllOfficers] = useState([])

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user,token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState =>({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))

    }
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user,token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserOfficers()
            setUserState(prevUserState =>({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg)) 
    }

    function logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setUserState({
        user: {},
        token: "",
        officers: []
      })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState =>({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState =>({
            ...prevState,
            errMsg: ""
        }))
    }

    function getAllOfficers(){
        userAxios.get('/api/security')
        .then(res => {
            console.log("getAllOfficer")
            setAllOfficers(res.data)})
        .catch(err => console.log(err.res.data.errMsg))
    }

    function getUserOfficers(){
        userAxios.get("/api/security/user")
        .then(res => {
            console.log("getUserOfficer")
            setUserState(prevState =>({
                ...prevState,
                officers:res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addOfficer(newOfficer){
        userAxios.post("/api/security", newOfficer)
        .then(res => {
            console.log("response from add officer: ", res.data )
            setUserState(prevState => ({
                ...prevState,
                officers:[...prevState.officers,res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // function deleteOfficer(officerId){
    //     userAxios.delete(`/api/security/${officerId}`)
    //     .then(res => setUserState(prevState => 
    //         ({
    //          ...prevState,
    //         officers:prevState.officers.filter(officer => officer._id !== officerId)
    //     }
    //     )))
        
    //     let filtered = allOfficers.filter(officer => {
    //         if(officerId !== officer._id){
    //             return officer
    //         }
    //     })
        
    //     setAllOfficers(filtered)
    //     .catch(err => console.log(err))
    // }

    function deleteOfficer(officerId) {
        userAxios.delete(`/api/security/${officerId}`)
            .then(res => {
                console.log(res.data)
                let filterOfficer = allOfficers?.filter(officer => officer._id !== officerId)
                setAllOfficers(filterOfficer)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    function editOfficer(_id, editedOfficer){
        userAxios.put(`/api/security/${_id}`, editedOfficer)
        .then(res =>{
            setAllOfficers(prevOfficers => {
                let getOfficers = prevOfficers.map(officer => officer._id === _id? res.data: officer)
                return getOfficers
            })
        })
    }

    function getAllUsers(){
        userAxios.get('/api/user')
        .then(res => setAllUsers(res.data))
        .catch(err => console.log(err.res.data.errMsg))
    }
  
    return(
        <UserContext.Provider 
        value={{
            ...userState,
            signup,
            login,
            logout,
            addOfficer,
            resetAuthErr,
            getUserOfficers,
            getAllOfficers,
            getAllUsers,
            deleteOfficer,
            editOfficer,
            allUsers,
            allOfficers

        }}>
            {props.children}
        </UserContext.Provider>
    )
}