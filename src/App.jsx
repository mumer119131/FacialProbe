import AOS from 'aos'
import './App.css'

import { useEffect } from 'react'
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage'
import SketcherPage from './pages/SketcherPage/SketcherPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/sketcher' element={<SketcherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
