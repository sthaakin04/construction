import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
            {/* <Route exact path="/contact" element={<Contact/>}/> */}
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
