import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home'
import LayOut from './Pages/layOut'
import NoPage from './Pages/noPage'
import TraffickLight from './Pages/traffickLight'
import Exercises from './Pages/exesies';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
      
          <Route index element={<Home />} />
          <Route path="*" element={<Exercises />} />
          <Route path="trafficklight" element={<TraffickLight />} />
      
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
