import './Home.css'
import gif from '../assets/giphy.gif';
const Home = () => {
  return (
    <>
    <div id="home">
    <div className='apresentation'>
        <p>Olá meu nome é </p>
        <h1 className='name'>Izadora</h1>
        <p>sou Desenvolvedora Front-end</p>
    </div>
    <img src={gif} alt="gif" />
    </div>
    </>
  )
}

export default Home