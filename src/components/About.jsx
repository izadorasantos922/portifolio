import './About.css'
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const About = () => {
  return <div className="about">
    <div className="about-me">
        <h1>Quem sou?</h1>
        <p>Olá, meu nome é Izadora, no momento estou focada na área de desenvolvimento web front-end e estou constantemente aprimorando minhas habilidades por meio de cursos online e na faculdade, na qual em breve estarei formada em Análise e Desenvolvimento de Sistemas.
        Busco uma oportunidade de trabalho para colocar em prática todo o conhecimento adquirido e continuar evoluindo na carreira de desenvolvedora front-end.</p>
    </div>
    <div>
        <h2>Skills:</h2>
        <div className="skills">
            <AiFillHtml5 className='icons html'/>
            <FaCss3Alt className='icons css'/>
            <SiJavascript className='icons javascript'/>
            <FaReact className='icons react'/>
        </div>
    </div>
  </div>
}

export default About