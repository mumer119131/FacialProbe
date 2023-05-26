import AOS from 'aos'
import './App.css'

import { useEffect } from 'react'
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage'
import SketcherPage from './pages/SketcherPage/SketcherPage';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery';
import Technologies from './pages/Technologies/Technologies';
import About from './pages/About/About';
import Matcher from './pages/Matcher/Matcher';

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
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/about' element={<About/>} />
        <Route path='/matcher' element={<Matcher/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
