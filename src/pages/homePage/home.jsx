import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import Rectangle1 from '../../images/Rectangle1.png'

import './homePage.css'


const Home = () => {
    return (
      <div className="content">
          <Navigation />
          <h1 className='home-heading-one'>Let's start learning</h1>
          <div>
            <h3>
              Welcome to Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!
            </h3>
          </div>
  
          <img src={Rectangle1} alt="video introduction of the content" class="center-image" />
  
          <div className="home-container">
              <div className="dots-container"></div>
              <h1>Join us</h1>
              <h4>Qui ut exercitation officia proidend enim non tempor tempor ipsum ex nulla ea adipisicing sit consequat enim elit cupidatat o</h4>
  
              <div className="oval"></div>
          </div>
          <Footer />
      </div>
    )
  }

  export default Home; 