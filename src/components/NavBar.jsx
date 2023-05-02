import './NavBar.css'
import { Link, animateScroll as scroll, Element } from 'react-scroll';
import brand from '../assets/_.png'

const NavBar = () => {
    return <header>
    <img src={brand} alt="logo" />
    <nav>
        <ul>
            <li>
                <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>Sobre mim</Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>Projetos</Link>
            </li>
            <li>
                <Link to="footer" smooth={true} duration={500}>Contato</Link>
            </li>
        </ul>
    </nav>
  </header>
}

export default NavBar