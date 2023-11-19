import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Mission from "./pages/Mission"
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <main>
    <Routes>
    <Route path="/contact" element ={<Contact />} />
    <Route path="/about" element ={<About />} />
    <Route path="/mission" element ={<Mission />} />

    </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
