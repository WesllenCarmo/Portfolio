import { Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import About from './pages/About/index';
import Skills from './pages/Skills/index';
import Projects from './pages/Projects/index';
import Contact from './pages/Contact/index';

function App() {

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
