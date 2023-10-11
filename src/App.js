import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import Navbar2 from "./Navbar2/navbar2";
import All from "./All/all";
import FSD from "./FSD/fsd";
import DS from "./DS/ds";
import CS from "./CyberSecurity/cs";
import Careers from "./Career/career";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fsd" element={<FSD />} />
          <Route path="/ds" element={<DS />} />
          <Route path="/cs" element={<CS />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
