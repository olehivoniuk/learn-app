import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AvatarStudent from '../../../images/AvatarStudent.png';
import { updateUser } from '../../../redux/userData'; // Import updateUser action
import './editMyStudentAccount.css';

const EditMyStudentAccount = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  // Retrieve student data from Redux state
  const studentData = useSelector(state => state.userData.find(user => user.role === 'student' && user.isLoggedIn));

  // Destructure student data
  const { firstName, lastName, username, dob, address, email } = studentData || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      username: e.target.elements.username.value,
      dob: e.target.elements.dob.value,
      address: e.target.elements.address.value,
      email: e.target.elements.email.value,
    };

    if (updatedData.username.length > 8) {
      alert('Username must not exceed 8 characters.');
      return; // Stop the submission
    }
    console.log('Updated data:', updatedData);
    dispatch(updateUser({ userId: studentData.id, updatedData })); // Dispatch updateUser with userId and updatedData
  };

  return (
    <div className='container-edit-my-student-account'>
      <h1 className='edit-my-student-account-heading'>My Account</h1>
      <div className="row">
        <div className="col-md-6">
          <div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <h2>Edit Profile</h2>
                    <p><strong>Profile Photo</strong></p>
                    <div className="mb-3">
                      <img src={AvatarStudent} alt="Profile" className="img-fluid student-profile-image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 upload-your-photo-column">
                  <div>
                    <p>Upload your photo</p>
                    <p>Your photo should be in PNG or JPG format</p>
                    <Button variant="contained" color="primary" onClick={handleOpen} className="btn btn-primary me-2">Choose Image</Button>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp" defaultValue={firstName} required />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp" defaultValue={lastName} required />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">User name</label>
                <input type="text" className="form-control" id="username" aria-describedby="userNameHelp" defaultValue={username} required />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of birth (optional)</label>
                <input type="text" className="form-control" id="dob" aria-describedby="dobHelp" defaultValue={dob} />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address (optional)</label>
                <input type="text" className="form-control" id="address" aria-describedby="addressHelp" defaultValue={address} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" defaultValue={email} required />
              </div>
              <div className="form-check form-switch">
                <div className="d-flex align-items-center">
                  <label className="form-check-label me-2" htmlFor="flexSwitchCheckChecked">Active</label>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-primary m-3">Save changes</button>
              </div>
            </form>
          </div>
        </div>
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ backgroundColor: 'white', padding: '5%', width: '80%', maxWidth: '70vh', maxHeight: '70vh' }}>
            <h2 id="parent-modal-title" style={{ fontSize: '2em', marginBottom: '2vh' }}>Upload Files</h2>
            <div style={{ border: '2px dashed grey', padding: '5%', textAlign: 'center', minHeight: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <div>
                <img src="upload-icon.png" alt="Upload icon" style={{ width: '50%', height: 'auto', margin: 'auto' }} />
              </div>
              <div>Drop files here</div>
              <div>PNG or JPG</div>
              <div>or</div>
              <div>Browse files</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3vh' }}>
              <button style={{ marginRight: '2%', padding: '1% 2%', minWidth: '80px' }} onClick={handleClose}>Cancel</button>
              <button style={{ padding: '1% 2%', minWidth: '80px' }}>Upload</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default EditMyStudentAccount;
