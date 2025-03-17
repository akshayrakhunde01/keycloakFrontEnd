import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useAuth from './hooks/useAuth'
import Protected from './componenets/Protected'
import Public from './componenets/public'

function App() {
const isLogin =useAuth()


   
     
    return isLogin ? <Protected/> :  <Public/>

 
}

export default App
