import React from 'react';
import './Styles/Login-Signup.css'

export default function Login () {
  return (
    <form>
      
      <h1>Login</h1>

      <div className='Input'>

        <label>
          Username/Email
        </label>

        <input 
          type="text"
          name="username"
          //state value needed
        >
          
        </input>

      </div>

      <div className='Input'>

        <label>Paassword</label>

        <input 
          type="text"
          name="password"
          //state value needed
        >
        </input>

      </div>

      <button type='submit'>Login</button>

      <a 
        /*href needed */ >
        Forgot Password
      </a>


    </form>
    )
}
