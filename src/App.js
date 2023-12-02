import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Mission from "./pages/Mission"
import Articles from "./pages/Articles"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
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

    </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
