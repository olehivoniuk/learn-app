import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import Rectangle1 from '../../images/Rectangle1.png'

import './homePage.css'


const Home = () => {
  return (
    <div>
        <Navigation />
        <h1>
            Let's start learning 
        </h1>
        <div>
        <h3>
            Welcome to learn Platform - where every day is the day to learn. Dive into the vast ocean of knowledge and empover yourself with the tools for a succsesful tomorrow. Happy learning!
        </h3>
        </div>

        <img src= {Rectangle1} alt="video introduction of the content " />
        
        <div>
            <h1>Join us</h1>
            </div>
            <div>
            <h4>Qui ut exercitation officia proidend enim non tempor tempor ipsum ex nulla ea adipisicing sit consequat enim elit  cupidatat o</h4>
            </div>

        <Footer />
      
    </div>
  )
}

export default Home