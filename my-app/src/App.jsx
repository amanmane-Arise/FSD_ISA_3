import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Student from "./pages/Student"

function App() {
  
  return (
    <BrowserRouter>
    <h1>Navigation</h1>
      <Link to ="/home" >Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/contact">Contact</Link>
      <Link to ="/student">Student</Link>

      <Routes>
        <Route path ="/home" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/student" element={<Student />} />

      </Routes>


    </BrowserRouter>
    
  )
}

export default App;
