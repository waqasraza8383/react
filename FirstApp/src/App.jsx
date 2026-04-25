import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Hello'
import Navbar from './Navbar' 
// import './App.css'

function App() {

  return (
    <>    
    <Hello/> 
    <img src={heroImg} alt="" srcset="" width="200px"/>
    <Navbar/>

    </>
  )
}

export default App
