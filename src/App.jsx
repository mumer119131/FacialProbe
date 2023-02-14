import './App.css'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sketcher from './components/Sketcher/Sketcher'
import Team from './components/Team/Team'
import Technologies from './components/Technologies/Technologies'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Sketcher />
      <Team />
      <Gallery />
      <Technologies />
      <About />
    </div>
  )
}

export default App
