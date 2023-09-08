import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";



import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (
   <Router>
    <Navbar />
      <Container customClass="min-height">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
    <Footer />
   </Router>
  );
}

export default App;