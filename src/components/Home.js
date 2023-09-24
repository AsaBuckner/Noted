import React from 'react';
import './Styles/Home.css'
import Iphone from '../imgs/Iphone1.png';
import Preview from '../imgs/Preview1.png'
import Login from './Login';
import SignUp from './Signup';
import Nav from './Nav'

export default function Home(props){

const {colRef} = props


  return (
  
    <div className='Wrapper'>


      <Nav/>

      {/* 1st Page -- App Title and Tag Line*/}

      <div className='P' id='one'>
        <h1>Noted</h1>
        <p> "Where digital note-sharing becomes a gateway to seamless collaboration and organized creativity." </p>
        <div className='Arrow'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 411 646" fill="none">
          <path d="M206.5 645.425L410.632 289.949L0.714847 290.903L206.5 645.425ZM169.5 1.08263L170.256 326.008L241.256 325.843L240.5 0.917374L169.5 1.08263Z" fill="white" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>


      {/* 2nd Page -- Welcome Message & Tiles Preview (slide in effect) )
            Replace the Preview image with Actual Tiles
      */}

      <div className='P' id='two'>
        <p>Welcome to HuB, the ultimate digital note-taking oasis! Whether you're a student, professional, or just someone who loves jotting down ideas, HuB has got you covered. With a sleek and user-friendly interface, managing your notes has never been this fun and intuitive. Dive in and experience the joy of organized thoughts!</p>
        <img className='Preview' src={Preview}/>
        <div>
          {/* <Tile/>
          <Tile/>
          <Tile/>
          <Tile/> */}
        </div>
      </div>


      {/* 3rd Page -- Color Changing Tile Demo || Customization p
              Add tiles and color seleciton bar
      */}

      <div className='P' id='three'>
        
        <p>Express yourself with HuB's customizable themes! Choose from a range of eye-catching styles that match your personality and set the perfect mood for your note-taking journey. From vibrant colors to calming pastels, make HuB truly yours.</p>
      </div>


      {/* 4th Page -- Phone Notifications Example || Notifications Background (Slide In) || Notifications p
            Import Background Image
            import phone svg img  
      */}

      <div className='P' id='four' >
        <p>Never miss a beat with HuB's built-in reminder and notification system. Stay on top of your tasks and deadlines effortlessly. With HuB, you'll always be on track and ready to conquer your day!</p>
        <img id='iphone' src={Iphone}/>
        {/* <img src=/> */}
      </div>


      {/* 5th Page -- Phone Notifications Example || Notifications Background (Slide In) || Notifications p
            Indertt Background Image
            import phone svg img  
      */}

      <div className='P' id='five'>
        <img/>
        <p>Rest assured, your privacy is of utmost importance to us. HuB ensures your notes and shared content remain secure and accessible only to those you invite. Enjoy a safe and private digital space to express yourself freely.</p>
        <p>Experience the HuB difference today - your go-to destination for all your digital scribbles and collaborative ventures. Join our growing community and elevate your note-taking game to new heights!</p>
        <img/>
      </div>


      {/* 6th Page -- Login and Sign Up Comps 
            needs functionality
      */}

      <div className='P' id='six' >
        <Login/>
        <div className='divider'/>
        <SignUp/>
      </div>


    </div>


  )

}
