import React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AvatarTrainer from '../../../images/AvatarTrainer.png'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/userData'; // Import updateUser action
import './myAccountEditTrainerProfile.css';


const MyAccoutEditTrainerProfile = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const trainerUser = useSelector(state => state.userData.find(user => user.role === 'trainer' && user.isLoggedIn));

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value,
            active: e.target.elements.active.checked,
            specialization: e.target.elements.specialization.value,
        };
        console.log('Updated data:', updatedData);
        dispatch(updateUser({ userId: trainerUser.id, updatedData }));
    };

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
                                            <img src={AvatarTrainer} alt="Profile" className="img-fluid student-profile-image" />
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
                              <input type="text" className="form-control" id="firstName" defaultValue={trainerUser?.firstName} required />
                          </div>
                          <div className="mb-3">
                              <label htmlFor="lastName" className="form-label">Last name</label>
                              <input type="text" className="form-control" id="lastName" defaultValue={trainerUser?.lastName} required />
                          </div>
                          <div className="mb-3">
                              <label htmlFor="username" className="form-label">User name</label>
                              <input type="text" className="form-control" id="username" defaultValue={trainerUser?.username} required />
                          </div>
                          <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email" defaultValue={trainerUser?.email} required />
                          </div>
                          <div className="mb-3 form-check form-switch">
                              <input className="form-check-input" type="checkbox" id="active" defaultChecked={trainerUser?.active} />
                              <label className="form-check-label" htmlFor="active">Active</label>
                          </div>
                          <div className="mb-3 w-50 my-specialization">
                              <label htmlFor="specialization" className="form-label">Specialization</label>
                              <select className="form-select" id="specialization" defaultValue={trainerUser?.specialization}>
                                  <option value="Java">Java</option>
                                  <option value="PHP">PHP</option>
                                  <option value="SP1">SP1</option>
                                  <option value="SP2">SP2</option>
                              </select>
                          </div>
                          <div className='text-center'>
                              <button type="button" className="btn btn-secondary m-3">Cancel</button>
                              <button type="submit" className="btn btn-primary m-3">Save changes</button>
                          </div>
                      </form>                      
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h3 className='m-5'>My specialization</h3>
                    </div>
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

export default MyAccoutEditTrainerProfile;
