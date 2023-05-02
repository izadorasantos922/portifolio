import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Home name="home"/>
      <About name="about"/>
      <Projects name="projects" />
      <Footer name="footer"/>
    </>
  )
}

export default App
