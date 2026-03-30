import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About/index';
import Skills from './components/pages/Skills/index';
import Projects from './components/pages/Projects/index';
import Contact from './components/pages/Contact/index';

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
