import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import StudentReg from '../../images/StudentReg.png';
import { addFormData } from '../../redux/userData'; // Import the action creator
import './joinUsStudent.css';

const JoinUsStudent = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    address: '',
  });

  // Function to generate random password
  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 5; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate random password
    const password = generatePassword();
    // Dispatch action to add student data to Redux store
    dispatch(
      addFormData({
        id: Date.now(), // Generate unique ID
        username: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        role: 'student',
        dob: formData.dob,
        address: formData.address,
        password: password, // Assign generated password
        isLoggedIn: false,
      })
      
    );
    // Reset form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      address: '',
    });
    navigate('/join-us-student-validation')
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="move-right mb-4">
          <h2>Registration</h2>
        </div>
        <div className="move-right mb-1">
          <p>Student</p>
        </div>
        <div className="col-md-6">
          <img src={StudentReg} alt="Student Registration" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputFirstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Text..."
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputLastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Input text"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Input text"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputDob" className="form-label">
                Date of birth (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Input text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Input text"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 button-trainer-reg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsStudent;
