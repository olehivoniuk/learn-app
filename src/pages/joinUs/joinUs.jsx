import JoinUsButton from '../../components/joinUsButton/joinUsButton';

import './joinUs.css'
import Trainer from '../../images/Trainer.png'
import Student from '../../images/Student.png'


const JoinUs = () => {
    return (
      <div className="joinUs-container">
        <h1 className='joinUs-heading'>Join us</h1>
        <div className="registration-container">
          {/* Trainer Registration */}
          <div className="text-container">
            <h2>Register as a trainer</h2>
            <p>Do consectur proident proident id euismod deserunt consequat pariatur ad ex velit do Lorem reprehendit</p>
            <JoinUsButton />
          </div>
          <img src={Trainer} alt="Trainer" className="trainer-image" />
        </div>
        
        {/* Student Registration */}
        <div className="registration-container">
          
          <div className="text-container">
            <h2>Register as a student</h2>
            <p>Do consectur proident proident id euismod deserunt consequat pariatur ad ex velit do Lorem reprehendit</p>
            <JoinUsButton />
          </div>
          <img src={Student} alt="Student" className="student-image" />
        </div>
      </div>
    );
  }
  
  export default JoinUs;
  