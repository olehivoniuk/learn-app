import React from 'react';
import TeamCherrydeck from '../../images/TeamCherrydeck.png'
import John from '../../images/John.png'
import Sarah from '../../images/Sarah.png'
import Jack from '../../images/Jack.png'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <h1 className='about-us-heading'>About us</h1>
      <p className="about-description">
         Welcome to the &apos;About us&apos; section of Learn Platform, where we aim to
         provide you with a deeper understanding of our philosophy, values, and
         mission. Established in 2023, Learn platform was born out of a passion
         for learning and a belief in the power of knowledge to transform lives.
       </p>
       
      <div className="container">
        <div className="image-container">
          <img src={TeamCherrydeck} alt="Team Cherrydeck" className='team-cherry-deck' />
          
        </div>
      </div>
      <div className="container">
      <div className="text-container team-container">
            <h2>Our team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        <div className="image-container">
          <img src={John} alt="John" className='student-image' />
          <div className="text-container">
            <h2>John Doe</h2>
            <p>Professional title</p>
            <p className='title-description'>Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Sarah} alt="Sarah" className='student-image' />
          <div className="text-container">
            <h2>Sara Rose</h2>
            <p>Professional title</p>
            <p className='title-description'> Duis aute irure dolor in reprehenderit in voluptate velit</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Jack} alt="Jack" className='student-image' />
          <div className="text-container">
            <h2>Jack Black</h2>
            <p >Professional title</p>
            <p className='title-description'>Excepteur sint occaecat cupidatat non proident</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
