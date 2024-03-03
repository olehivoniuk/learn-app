import React, { useState } from 'react';
import AvatarStudent from '../../../images/AvatarStudent.png';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './myAccountStudent.css';

const MyAccountStudent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mt-5">
      <h1 className='my-account-heading '>My Account</h1>
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
                <th>Name</th>
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
                <td>Algorithms</td>
              </tr>
              <tr>
                <td>Maria White</td>
                <td>Java</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <Button variant="contained" color="secondary" onClick={handleOpen}>Delete</Button>
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
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ backgroundColor: 'white', padding: '5%', width: '80%', maxWidth: '70vh', maxHeight: '70vh' }}>
          <h2 id="delete-modal-title" style={{ fontSize: '2em', marginBottom: '2vh' }}>Profile deletion confirmantion</h2>
          <p id="delete-modal-description">We are truly sorry to see you go. Before you proced with deleting your profile, we want you to know that this action is permanent and irreversible. You will lose accsess to all your account information, course progress certificates, and any learing communities you are part of. </p>
          <p id="delete-modal-description">If there is anything we can do to improve your experience or if you neen assistace with any issues you've encountered, please reach our suppport team. We are always here to help. </p>
          <p id="delete-modal-description">If your still wish to delete your account, please click on the "Confirm" button below. </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3vh' }}>
            <button style={{ marginRight: '2%', padding: '1% 2%', minWidth: '80px' }} onClick={handleClose}>Cancel</button>
            <button style={{ padding: '1% 2%', minWidth: '80px' }}>Confirm</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MyAccountStudent;
