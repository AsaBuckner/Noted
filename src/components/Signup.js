import React from 'react';
import './Styles/Login-Signup.css'

export default function SignUp() {
    return (
      <form>
        
        <h1>Sign Up</h1>
  
        <div className='Input'>
  
          <label>
            Name
          </label>
  
            <div className='nameInputWrapper'>
                <input 
                    className='name'
                    type="text"
                    name="f_Name"
                    placeholder='First'
                    //state value needed
                >
                    
                </input>
        
            
                <input 
                    className='name'
                    type="text"
                    name="l_Name"
                    placeholder='Last'
                    //state value needed Local
                >
                    
                </input>
            </div>




        <label>Email</label>
  
            <input 
            type="email"
            name="password"
            //state value needed Local
            />
    
            <label>Password</label>
  
            <input 
            type="text"
            name="password"
            //state value needed Local
            />

            <label>Re-Enter Password</label>

            <input 
                type="text"
                name="password"
                //state value needed
            />
        
  
        </div>
  
       
        <input type='radio' 
        /*State Value Needed Local*/
        />

        <a 
          /*href needed */ >
          I Accept Privacy and Security Policies
        </a>

        <button type='submit'>Sign Up</button>
  
  
      </form>
      )
  }
  