import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AvatarStudent from '../../../images/AvatarStudent.png'
import './editMyStudentAccount.css';

const EditMyStudentAccount = () => {
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

  return (
    <div className='container-edit-my-student-account '>
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
            <form>
              <div className="mb-3">
                <label htmlFor="inputFirstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstNameHelp" placeholder='Text...' defaultValue={firstName} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' defaultValue={lastName} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">User name</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' defaultValue={username} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Date of birth (optional)</label>
                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' defaultValue={dob} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Address (optional) </label>
                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' defaultValue={address} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' defaultValue={email} required/>
              </div>
              <div className="form-check form-switch">
                <div className="d-flex align-items-center">
                  <label className="form-check-label me-2" htmlFor="flexSwitchCheckChecked">Active</label>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='text-center'>
          <button type="button" className="btn btn-secondary m-3 ">Cancel</button>
          <button type="submit" className="btn btn-primary  m-3  ">Save changes</button>
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
            <button style={{ marginRight: '2%', padding: '1% 2%', minWidth: '80px' }}>Cancel</button>
            <button style={{ padding: '1% 2%', minWidth: '80px' }}>Upload</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditMyStudentAccount;
