import React from "react";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import "./App.css";
import Contact from "./Components/Contact";

export default function App() {
    const[Mode,setMode]=useState('white');
    const root_theme = document.querySelector(':root')
    function toggleMode(){
      if(Mode==='white')
      {
        root_theme.style.setProperty('--bg-color', '#f39c12'); 
        root_theme.style.setProperty('--lightGrey','#d35400')
        document.querySelector('.theme-toggle').style.color='black'
        setMode('black')
      }
      else{
        root_theme.style.setProperty('--bg-color', '#2f3640'); 
        root_theme.style.setProperty('--lightGrey','#7f8fa6')
        document.querySelector('.theme-toggle').style.color='white'
        setMode('white')
      }
      
    }
  return (
    <>
    <div id="MyApp">
      <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar toggleMode={toggleMode} Mode={Mode} />}>
          <Route index element={<Hero />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
    </div>
    </>
  );
}
