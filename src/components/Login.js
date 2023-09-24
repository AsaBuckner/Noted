import React, {useState} from 'react';
import './Styles/Login-Signup.css'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import{ getFirestore, collection} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateData } from '../Actions/actionCreator';

const firebaseConfig = {
  apiKey: "AIzaSyBtFTkYUXe4rJFl2O-1nQk4y5MyLsIcYXA",
  authDomain: "noted-17e4a.firebaseapp.com",
  databaseURL: "https://noted-17e4a-default-rtdb.firebaseio.com",
  projectId: "noted-17e4a",
  storageBucket: "noted-17e4a.appspot.com",
  messagingSenderId: "556685530861",
  appId: "1:556685530861:web:5f6940fffd8eebf7ef5ee4",
  measurementId: "G-DVK0W716CF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const colRef = collection(db, 'Users')
const initalState = {
  email: "",
  password: '',
}

function Login () {

  const [formValues, setFormValues] = useState({
    email: "",
    password: '',
  });

  const auth = getAuth()
  const {push} = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = formValues.email
    const password = formValues.password
    
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log(cred.user.email)
        setFormValues(initalState)
      })
      .catch((err) => {
        console.log(err)
      })
    }

  const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      
      <h1>Login</h1>

      <div className='Input'>

        <label>
          Username/Email
        </label>

        <input 
          type="text"
          name="email"
          value = {formValues.email}
          onChange={handleChange}
        >
          
        </input>

      </div>

      <div className='Input'>

        <label>Password</label>

        <input 
          type="text"
          name="password"
          value = {formValues.password}
          onChange={handleChange}
        >
        </input>

      </div>

      <button type='submit' onClick={handleSubmit}>Login</button>

      <a 
        /*href needed */ >
        Forgot Password
      </a>


    </form>
    )
}


export default connect(null,{updateData})(Login);