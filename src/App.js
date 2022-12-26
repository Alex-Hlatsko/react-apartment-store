import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Apartments from './pages/Apartments/Apartments';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/apartments"  element={<Apartments/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/contact"  element={<Contact/>}/>
    </Routes>
  );
}

export default App;
