import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar.js";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Mission from "./Pages/Mission.js";
import Login from "./Pages/Login.js"
import SignUp from "./Pages/SignUp.js"
import Forum from "./Pages/Forum.js"
import Home from './Pages/Home.js';

const NavBarWrapper = () => {
  const location = useLocation();
  
  // Don't render the navigation bar on the login page or sign up page
  if (location.pathname === '/' || location.pathname === '/signup' ) {
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

