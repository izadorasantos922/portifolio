import './NavBar.css'
import { Link, animateScroll as scroll, Element } from 'react-scroll';
import { AiOutlineClose } from "react-icons/ai";

const NavBarMobile = ({onClick}) => {
    return  <nav className='nav-mobile'>
        <ul>
        <AiOutlineClose className="close" onClick={onClick}/>
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
}

export default NavBarMobile