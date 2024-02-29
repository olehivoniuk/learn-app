import AvatarStudent from '../../../images/AvatarStudent.png'
import './editMyStudentAccount.css';

const EditMyStudentAccount = () => {
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
                      <button className="btn btn-primary me-2">Choose Image</button>
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
                <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstNameHelp" placeholder='Text...' required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">User name</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Date of birth (optional)</label>
                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' required/>
              </div>
              <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Address (optional) </label>
                <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' required/>
              </div>
                 <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' required/>
              </div>
              <div class="form-check form-switch">
             <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
             <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
             </div>
             <div className="text-end button-save-student-info ">
             <div>
               <button type="button" className="btn btn-secondary  ">Cancel</button>
               <button type="submit" className="btn btn-primary  ">Save changes</button>
             </div>
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMyStudentAccount;
