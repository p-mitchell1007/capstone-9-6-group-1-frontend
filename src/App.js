import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Mission from "./pages/Mission.js";
import Login from "./pages/Login.js"
import SignUp from "./pages/SignUp.js"
import Forum from "./pages/Forum.js"
import Home from './pages/Home.js';

const NavBarWrapper = () => {
  const location = useLocation();
  
  if (location.pathname === '/' || location.pathname === "/signup") {
    return null;
  }

  return <NavBar />;
};

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

