import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import Rectangle1 from '../../images/Rectangle1.png'
import JoinUsBox from '../../components/joinUsBox/joinUsBox'

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
  
          <JoinUsBox />
          <Footer />
      </div>
    )
  }

  export default Home; 