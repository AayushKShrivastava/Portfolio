import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App(){
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}