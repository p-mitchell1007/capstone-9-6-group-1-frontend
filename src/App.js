import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Forum from './components/Forum';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            {/* <Route Forum /> */}

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
