// import { useDispatch, useSelector } from 'react-redux';
// import { changePassword } from 'path/to/userDataSlice'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import './changePassword.css';

const ChangePassword = () => {

  // const dispatch = useDispatch();
  // const loggedInUser = useSelector(state => state.userData.find(user => user.isLoggedIn));

  // const [currentPassword, setCurrentPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // const handlePasswordChange = () => {
  //   // Check if newPassword matches confirmNewPassword
  //   if (newPassword !== confirmNewPassword) {
  //     alert('New password and confirm new password must match');
  //     return;
  //   }

  //   // Dispatch action to change password
  //   dispatch(changePassword({ userId: loggedInUser.id, newPassword }));
  // };
  

  return (
    <div className="container">
     
      <div className="row">
      <h3 className="security-heading">Security</h3> 
        <div className="col-md-3"> 

          <div className="change-password-section">
            <div className="change-password-title">
              <span className="bold-text fw-bold">Change password</span>
            </div>
          </div>
        </div>
        <div className="col-md-9"> 
          <form className="password-form">
            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label fw-bold">Current password:</label>
              <input type="password" className="form-control custom-input" id="currentPassword" aria-describedby="currentPasswordHelp" placeholder="Enter your current password" />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label fw-bold">New password:</label>
              <input type="password" className="form-control custom-input" id="newPassword" aria-describedby="newPasswordHelp" placeholder="Enter new password" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmNewPassword" className="form-label fw-bold">Confirm new password:</label>
              <input type="password" className="form-control custom-input" id="confirmNewPassword" placeholder="Confirm new password" />
            </div>
            <div className="mb-3 d-flex justify-content-end">
                 <button type="button" className="btn btn-secondary me-2">Cancel</button>
                 <Link  to='/change-password-status' type="submit" className="btn btn-primary">Change password</Link>
               </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
