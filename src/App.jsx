import React from "react";
import "./App.css";
import About from "./About";  // ✅ Correct import
import MyWork from "./MyWork";
import ContactUs from "./ContactUs";
import nitishRanaImg from "./images/nitish-rana.png";

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
         {/* <li><a href="#home">Home</a></li> */}
        </ul>
      </nav>
      
      <header className="hero">
        <div className="text">
        <h1>Hi, I'm Nitish Rana</h1>
        <p>A passionate web developer building interactive & user-friendly websites.</p>
        </div>
        <div className="image">
          <img src={nitishRanaImg} alt="Nitish Rana" /> {/* ✅ Correct way */}
        </div>
      </header>
      
      {/* ✅ Now About component should load correctly */}
      <About />
      <MyWork />
      <ContactUs />
    </div>
  );
}

export default App;
