import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AvatarTrainer from '../../../images/AvatarTrainer.png';

const MyAccountTrainerProfile = () => {
  const trainerUser = useSelector(state => state.userData.find(user => user.role === 'trainer' && user.isLoggedIn));

const firstName = trainerUser ? trainerUser.firstName : null;
const lastName = trainerUser ? trainerUser.lastName : null;
const specialization = trainerUser ? trainerUser.specialization : null;
const userName = trainerUser ? trainerUser.username : null;

   
    return (
      <div className="container mt-5">
        <h1 className='my-account-heading'>My Account</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2>My Profile</h2>
            <div className="mb-3">
              <img src={AvatarTrainer} alt="Profile" className="img-fluid student-profile-image" />
            </div>
            <div className="mb-3">
              <label className="fw-bold">First Name:</label>
              <p>{firstName}</p>
            </div>
            <div className="mb-3">
              <label className="fw-bold">Last Name:</label>
              <p>{lastName}</p>
            </div>
            <div className="mb-3">
              <label className="fw-bold">User Name:</label>
              <p>{userName}</p>
            </div>
            <div className="mb-3">
              <label className="fw-bold">Specialization:</label>
              <p>{specialization}</p>
            </div>
            <div className="mb-3">
              <label className="fw-bold">Address:</label>
              <p>123 Street, City, Country</p>
            </div>
            <div className="mb-3">
              <label className="fw-bold">Email:</label>
              <p>johndoe@example.com</p>
            </div>
            <div className="d-flex justify-content-start mb-3">
              <Link to="/my-account-edit-trainer-profile" className="btn btn-primary me-3">Edit Profile</Link>
              <Link to='/change-password-trainer' className="btn btn-primary">Change Password</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between mb-3">
              <h2>My Students</h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th className="fw-bold">Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">Elizabeth Lopez</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td className="fw-bold">Matthew Martinez</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td className="fw-bold">Elizabeth Hall</td>
                  <td>Not active</td>
                </tr>
                <tr>
                  <td className="fw-bold">Maria White</td>
                  <td>Not active</td>
                </tr>
                <tr>
                  <td className="fw-bold">Elizabeth Watson</td>
                  <td>Not active</td>
                </tr>
                <tr>
                  <td className="fw-bold">Elizabeth Allen</td>
                  <td>Not active</td>
                </tr>
                <tr>
                  <td className="fw-bold">Caleb Johnson</td>
                  <td>Not active</td>
                </tr>
              </tbody>
            </table>
            
          </div>
          <div className='text-center mt-5'>
            <h2 className='mt-5'>My Trainings</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p className='mt-5'>The training section is interactive, allows you to engage with trainers and fellow learners, participate in quizzes, and track your progress. All our courses are flexible and adaptable to your schedule and learning speed.</p>
              </div>
            </div>
            <Link to='/my-account-trainer-trainings' className="btn btn-primary mt-5">View Trainings</Link>
          </div>
        </div>
        
      </div>
    );
  }

export default MyAccountTrainerProfile
