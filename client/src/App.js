import React,{useContext} from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Officer from './components/Officer'
import ProtectedRoute from './components/ProtectedRoute.js'
import {UserContext} from './context/UserProvider.js'

import './css/styles.css'
import './css/PublicOfficer.css'
import Public from './components/Public.js'

export default function App(){
    const { token ,logout } = useContext(UserContext)
    return(
        <div className='app'>
            { token && <Navbar logout={logout}/> }
            <Routes>
                <Route 
                path="/"
                element = { token ? <Navigate to="/profile"/> :<Auth/>}
                />
                <Route 
                path="/profile"
                element = {<ProtectedRoute token={token} redirectTo="/">
                    <Profile/>
                    </ProtectedRoute>}
                />
               <Route 
                path="/public"
                element = {<ProtectedRoute token={token} redirectTo="/">
                    <Public/>
                    </ProtectedRoute>}
                />
            </Routes>
        </div>
    )
}
// //Get Officer
//     function getOfficer(){
//         axios.get("/security")
//         .then(res => setSecurity(res.data))
//         .catch(err => console.log(err))
//     }
// //Post Officer
//     function addOfficer(newOfficer){
//         axios.post("/security", newOfficer)
//         .then(res => {
//             setSecurity(prevSecurity => [...prevSecurity,res.data])
//         })
//         .catch(err => console.log(err))
//     }
// //Delete Officer
//     function deleteOfficer(officerId){
//         axios.delete(`/security/${officerId}`)
//         .then(res => {
//             setSecurity(prevSecurity => prevSecurity.filter(offic => offic._id !== officerId))
//         })
//         .catch(err => console.log(err))
//     }
// // Update Officer
//     function editOfficer(updates , officerId){
//         axios.put(`/security/${officerId}`, updates)
//         .then(res =>{
//             setSecurity(prevSecurity => prevSecurity.map(agents => agents._id !== officerId ? agents : res.data ))
//         })
//         .catch(err => console.log(err))

//     }

//     export default App

//     useEffect(()=>{
//         getOfficer()
//     }, [])
//     return(
//         <div>
//             <div className='officer-container'>
//                 <AddOfficerForm
//                 submit = {addOfficer}
//                 btnText = "SUBMIT DOCUMENTS"
//                 />
//               {security.map(agent => <Officer 
//               {...agent} 
//               key={agent.firstName}
//               deleteOfficer = {deleteOfficer}
//               editOfficer = {editOfficer}
//               />)}
//             </div>
//         </div>
//     )
// }


