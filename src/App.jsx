import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import NavBarMobile from './components/NavBarMobile';

function App() {

  const [navMobileOpen, setNavMobile] = useState(false);

  function handleMenuClick(){
    setNavMobile(true);
  }

  function handleMenuClose(){
    setNavMobile(false);
  }

  return (
    <>
      <NavBar>
        <GiHamburgerMenu className='menu-burguer' onClick={handleMenuClick}/>
      </NavBar>
      {navMobileOpen && <NavBarMobile onClick={handleMenuClose} /> }
      <Home name="home"/>
      <About name="about"/>
      <Projects name="projects" />
      <Footer name="footer"/>
    </>
  )
}

export default App
