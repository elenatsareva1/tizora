import './styles/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Paintings from './pages/Paintings';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import Artist from './pages/Artist';
import Painting from './pages/Painting';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/paintings' element={<Paintings />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/painting/:id' element={<Painting />}/>
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
