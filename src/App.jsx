import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import './App.css'
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
function App() {
  return (
    <BrowserRouter>
    <header>
    <Link to="/">VanLife</Link>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    </header>
   
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/vans" element={<Vans />}/>
     <Route path="/vans/:id" element={<VanDetails />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
