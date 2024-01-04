import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar.js";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Mission from "./pages/Mission.js";
import Articles from "./pages/Articles.js"
import Login from "./pages/Login.js"
import SignUp from "./pages/SignUp.js"
import Forum from "./pages/Forum.js"
import Home from './pages/Home.js';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBarWrapper />
      <main>
        <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/signup" element ={<SignUp />} />
          <Route path="/home" element ={<Home />} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="/about" element ={<About />} />
          <Route path="/mission" element ={<Mission />} />
          <Route path="/forum" element ={<Forum />} />

        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;

