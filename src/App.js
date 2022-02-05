import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
