import React from 'react'
import AvatarStudent from '../../../images/AvatarStudent.png'
import './myAccountStudent.css'

const MyAccountStudent = () => {
    return (
      <div className="container mt-5">
        <h1 className='my-account-heading'>My Account</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2>My Profile</h2>
            <div className="mb-3">
              <img src={AvatarStudent} alt="Profile" className="img-fluid student-profile-image" />
            </div>
            <div className="mb-3">
              <label>First Name:</label>
              <p>John</p>
            </div>
            <div className="mb-3">
              <label>Last Name:</label>
              <p>Doe</p>
            </div>
            <div className="mb-3">
              <label>User Name:</label>
              <p>johndoe123</p>
            </div>
            <div className="mb-3">
              <label>Address:</label>
              <p>123 Street, City, Country</p>
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <p>johndoe@example.com</p>
            </div>
                     <div className="d-flex justify-content-start mb-3">
             <button className="btn btn-primary me-3">Edit Profile</button>
             <button className="btn btn-primary">Change Password</button>
         </div>           
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between mb-3">
              <h2>My Trainers</h2>
              <button className="btn btn-primary">Add Trainer</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th> Name</th>
                  <th>Specialization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Elizabeth Lopez</td>
                  <td>PHP</td>
                </tr>
                <tr>
                  <td>Matthew Martinez</td>
                  <td>JavaScript</td>
                </tr>
                <tr>
                  <td>Elizabeth Hall</td>
                  <td>Algoritms</td>
                </tr>
                <tr>
                  <td>Maria White</td>
                  <td>Java</td>
                </tr>
              </tbody>
            </table>
                 <div className="d-flex justify-content-end ">
                 <button className="btn btn-danger delete-profile-button mt-6">Delete Profile</button>
               </div>  
          </div>
          <div className='text-center mt-5'>
              <h2 className='mt-5'>My Trainings</h2>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <p className='mt-5'>The training section is interactive, allows you to engage with trainers and fellow learners, participate in quizzes, and track your progress. All our courses are flexible and adaptable to your schedule and learning speed.</p>
                </div>
              </div>
              <button className="btn btn-primary mt-5">View Trainings</button>
            </div>            
        </div>
        
      </div>
    );
  }
  
  export default MyAccountStudent;
