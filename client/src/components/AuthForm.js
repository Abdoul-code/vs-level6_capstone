import React from 'react'
export default function AuthForm(props){
    const {
        handleChange, 
        handleSubmit, 
        btnText,
        errMsg, 
        inputs: {
          username, 
          password
        } 
      } = props

      return(
        
            <form onSubmit={handleSubmit} className="container">
              <p>Username</p>
            <input 
            type="text" 
            value={username} 
            name="username" 
            onChange={handleChange} 
            placeholder=" Enter Username"/>
            <p>Password</p>
          <input 
            type="password" 
            value={password} 
            name="password" 
            onChange={handleChange} 
            placeholder=" Enter Password"/>
           <button>{ btnText }</button>
           <p style={{color:"white"}}>{ errMsg }</p>
            </form>
        
       
      )


}