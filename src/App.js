import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <main>
    <Routes>
    <Route path="/contact" element ={<Contact />} />

    </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
