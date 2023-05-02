import './Projects.css'
//images
import izabooks from '../assets/izabooks.png';
import extraction from '../assets/netiflix-extraction.png';
import studies from '../assets/vestibular.png';
import ecommerce from '../assets/sneakers.png';
const Projects = () => {
  return <>
    <h1 className='title'>Principais projetos</h1>
    <div id="projects">
      <a href="https://izabooksbydora.netlify.app/" target="_blank">
      <img src={izabooks} alt="projeto iza books" />
      </a>
      <a href="https://extraction-landing-page.netlify.app/" target="_blank">
      <img src={extraction} alt="projeto extraction" className='project-extraction' />
      </a>
      <a href="https://studies-vestibular.netlify.app/" target="_blank">
      <img src={studies} alt="projeto studies" />
      </a>
      <a href="https://ecommerce-bydora.netlify.app/" target="_blank">
      <img src={ecommerce} alt="projeto ecommerce" />
      </a>
    </div>
  </>
}

export default Projects