import './Footer.css'
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return <>
    <div id="footer">
        <a href="https://github.com/izadorasantos922" target="_blank">
        <AiFillGithub className='social git-hub'/>
        </a>
        <a href="https://www.linkedin.com/in/izadora-santos-de-sousa/" target="_blank">
        <AiFillLinkedin  className='social linkedin'/>
        </a>
        <a href="mailto:izadorasantosdesousa@gmail.com" target="_blank">
      <MdEmail className='social email' />
      </a>
    </div>
    <footer>
            <p>Todos os direitos reservados 2023 | <br /> Desenvolvido por Izadora Santos</p>
    </footer>
  </>
}

export default Footer