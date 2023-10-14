import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
