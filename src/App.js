import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar.js"
import Contact from "./Pages/Contact.js"
import About from "./Pages/About.js"
import Mission from "./Pages/Mission.js"
import Articles from "./Pages/Articles.js"
import Login from "./Pages/Login.js"
import SignUp from "./Pages/SignUp.js"
import Forum from "./Pages/Forum.js"
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/articles" element ={<Articles />} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="/about" element ={<About />} />
          <Route path="/mission" element ={<Mission />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/signup" element ={<SignUp />} />
          <Route path="/forum" element ={<Forum />} />

        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;

