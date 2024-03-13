import React from 'react';
import { useSelector } from 'react-redux';
import StudentLogInHome1 from "../../images/StudentLogInHome1.png";
import StudentLogInHome2 from "../../images/StudentLogInHome2.png";
import StudentLogInHome3 from "../../images/StudentLogInHome3.png";
import './studentLogInHome.css';

const StudentLogInHome = () => {
  const firstName = useSelector(state => {
    const studentUser = state.userData.find(user => user.role === 'student' && user.isLoggedIn);
    return studentUser ? studentUser.username.split(' ')[0] : null;
  });

  return (
    <div>
      <div className="container student-log-in-home-heading">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="mt-5">
              <h1 className='student-log-in-home-heading'>Hi, {firstName}! </h1>
              <p>Welcome Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!</p>
            </div>
            <div className="mt-6">
              <h2>Discover a World of Learning</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ligula eu scelerisque.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-5 text-center">
          <img src={StudentLogInHome1} alt="1" className="img-fluid" />
          <div>
            <h3>Do consequr</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="col-md-4 mb-5 text-center">
          <img src={StudentLogInHome2} alt="2" className="img-fluid" />
          <div>
            <h3>Consequant Labore</h3>
            <p>Ut enim ad minim veniam</p>
          </div>
        </div>
        <div className="col-md-4 mb-5 text-center">
          <img src={StudentLogInHome3} alt="3" className="img-fluid" />
          <div>
            <h3>Laboris nulla </h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <button className="btn btn-primary mb-5 mt-5" type="submit">Read more articles</button>
        </div>
      </div>
      
    </div>
  );
}

export default StudentLogInHome;
