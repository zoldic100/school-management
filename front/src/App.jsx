import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import MyRoutes from './router/Myroute'
import Layaout from './Layaout/Layaout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <MyRoutes />
     
      
    </>
  )
}

export default App
