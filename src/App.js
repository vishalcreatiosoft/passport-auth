import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from "./components/Login";
import Signup from "./components/Signup";




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;