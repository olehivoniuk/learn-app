import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AvatarTrainer from '../../../images/AvatarTrainer.png'

const MyAccoutEditTrainerProfile = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
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
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputFirstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstNameHelp" placeholder='Text...' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputLastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp" placeholder='Input text' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">User name</label>
                                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' required />
                            </div>
                            <div class="d-flex align-items-center">
                            <label class="form-check-label me-2" for="flexSwitchCheckChecked">Active</label>
                            <div class="form-check form-switch">                          
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                            </div>
                          </div>

                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h3 className='m-5'>My specialization</h3>
                        <select className="form-select w-25 m-5 bg-white" aria-label="Default select example">
                            <option selected>Dropdown</option>
                            <option value="1" style={{ width: '25%' }}>Java</option>
                            <option value="2" style={{ width: '25%' }}>PHP</option>
                            <option value="3" style={{ width: '25%' }}>SP1</option>
                            <option value="3" style={{ width: '25%' }}>SP2</option>
                        </select>
                        
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
            <div className='text-center'>
            <button type="button" className="btn btn-secondary m-3  ">Cancel</button>
            <button type="submit" className="btn btn-primary m-3 ">Save changes</button>
        </div>
    </div>
    );
}

export default MyAccoutEditTrainerProfile;
