import './App.css';
import NavBar from './component/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
    </div>
  );
}

export default App;
