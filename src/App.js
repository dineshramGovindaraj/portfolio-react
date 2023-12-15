import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Techstack from "./components/Techstack";
// import Project from "./components/Project";
// import SlideNavbar from "./components/SlideNavbar";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Techstack />
      {/* <Project /> */}
    </>
  );
}

export default App;
