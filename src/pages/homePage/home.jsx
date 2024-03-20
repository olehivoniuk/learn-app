import React from 'react';
import Rectangle1 from '../../images/Rectangle1.png'
import JoinUsBox from '../../components/joinUsBox/joinUsBox'
import './homePage.css'


const Home = () => {
    return (
      <div className="content">
         
          <h1 className='home-heading-one'>Let&apos;s start learning</h1>
          <div>
            <h3 className='home-heading-two'>
              Welcome to Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!
            </h3>
          </div>
  
          <img src={Rectangle1} alt="video introduction of the content" className="center-image" />
  
          <JoinUsBox />
      </div>
    )
  }

  export default Home; 