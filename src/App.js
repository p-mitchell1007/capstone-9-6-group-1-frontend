import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <main>
    <Routes>


    </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
