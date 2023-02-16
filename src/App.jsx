import AOS from 'aos'
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sketcher from './components/Sketcher/Sketcher'
import Team from './components/Team/Team'
import Technologies from './components/Technologies/Technologies'
import { useEffect } from 'react'
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar />
      <Home />
      <Sketcher />
      <Team />
      <Gallery />
      <Technologies />
      <About />
      <Footer />
    </div>
  )
}

export default App
