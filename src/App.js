import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Forum from './components/Forum.js';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Forum />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

