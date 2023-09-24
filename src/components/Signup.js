import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Styles/Login-Signup.css'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import{ getFirestore, collection, setDoc, doc} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
const db = getFirestore()


const initalState = {
    f_name: "",
    l_name: "",
    email: "",
    password: '',
    terms: false
}


export default function SignUp() {

  const {push} = useHistory()
  const auth = getAuth()

 const [id, setId] = useState('')
  const [formValues, setFormValues] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: '',
    terms: false
});

const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    });
}


const handleSubmit = async (e) => {
  e.preventDefault();

  const email = formValues.email;
  const password = formValues.password;

  try {
    // Create a new user
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const userId = cred.user.uid;

    // Set user data in Firestore
    await setDoc(doc(db, 'Users', userId), {
      f_name: formValues.f_name,
      l_name: formValues.l_name,
      email: formValues.email,
      theme: 'blue',
      notes: [],
      memos: [],
      lists: [],
      timers: [],
    });
    // Redirect to another page or perform any other actions here
    setFormValues(initalState)
    // push('/dashboard');
  } catch (error) {
    console.error(error);
  }
};

// addDoc(colRef, {
//   id: "",
//   f_name : formValues.f_name,
//   l_name : formValues.l_name,
//   email : formValues.email,
//   theme : "blue",
//   notes : [],
//   memos : [],
//   lists : [],
//   timers : [],
// })


// getDoc(db, 'users', id)
//   .then((res)=> console.log(res))


  
    return (
      <form>
        
        <h1>Sign Up</h1>
  
        <div className='Input'>
  
          <label>
            Name
          </label>
  
          <div id='name'>
              <input 
                  className='name'
                  type="text"
                  name="f_name"
                  placeholder='First'
                  onChange={handleChange}
                  value= {formValues.f_name}
                  //state value needed
              >
                  
              </input>
      
          
              <input 
                  className='name'
                  type="text"
                  name="l_name"
                  placeholder='Last'
                  onChange={handleChange}
                  value= {formValues.l_name}
                  //state value needed Local
              >
                  
              </input>
          </div>




          <label>Email</label>
    
            <input 
            type="email"
            name="email"
            value = {formValues.email}
            onChange={handleChange}
            //state value needed Local
            />
    
          <label>Password</label>
  
            <input 
            type="text"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            //state value needed Local
            />

          <label>Re-Enter Password</label>

            <input 
                type="text"
                name="password"
                //state value needed
            />
          
  
        </div>
  
       
        <input
        type='radio' 
        name='terms'
        checked = {formValues.terms}
        onChange={handleChange}
        /*State Value Needed Local*/
        />

        <a 
          /*href needed */ >
          I Accept Privacy and Security Policies
        </a>

        <button type='submit' onClick={handleSubmit}>Sign Up</button>
  
  
      </form>
      )
  }
  