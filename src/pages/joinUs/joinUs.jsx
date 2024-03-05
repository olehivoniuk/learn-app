import { Link } from 'react-router-dom';
import Trainer from '../../images/Trainer.png'
import Student from '../../images/Student.png'

import JoinUsButton from '../../components/joinUsButton/joinUsButton';
import './joinUs.css'



const JoinUs = () => {
    return (

        <div className="container">
        <div className="joinUs-container">
        <h1 className='joinUs-heading'>Join us</h1>
        <div className="registration-container">
          <div className="text-container">
            <h2>Register as a trainer</h2>
            <p>Do consectur proident proident id euismod deserunt consequat pariatur ad ex velit do Lorem reprehendit</p>
            <Link to='/join-us-trainer' className='join-button'>
            Join Us
          </Link>
          </div>
          <img src={Trainer} alt="Trainer" className="trainer-image" />
        </div>
        
        <div className="registration-container">
          
          <div className="text-container">
            <h2>Register as a student</h2>
            <p>Do consectur proident proident id euismod deserunt consequat pariatur ad ex velit do Lorem reprehendit</p>
            <Link to='/join-us-student' className='join-button'>
            Join Us
          </Link>
          </div>
          <img src={Student} alt="Student" className="student-image" />
        </div>
      </div>
     </div>
      
    );
  }
  
  export default JoinUs;
  