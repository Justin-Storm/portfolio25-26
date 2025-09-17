import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
   return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Header />
                <About />
                <Gallery />
              </>
            } 
          />
          <Route 
            path='/contact'
            element={
              <Contact />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
