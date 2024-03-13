import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '../../redux/userData'; // Import the action creator
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import TrainerReg from '../../images/TrainerReg.png';
import './joinUsTrainer.css';

const JoinUsTrainer = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
  });

  // Function to generate a random password of up to 8 characters
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
    // Generate unique ID (you can use any method you prefer)
    const userId = Date.now();
    // Generate a random password
    const password = generatePassword();
    // Dispatch action to add trainer data to Redux store
    dispatch(
      addFormData({
        id: userId,
        username: `${formData.firstName}_${formData.lastName.slice(0,1)}_tr`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: 'trainer',
        specialization: formData.specialization,
        password: password, // Add the generated password to the form data
        isLoggedIn: false,
      })
    );
    // Reset form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      specialization: '',
    });
    // Redirect to validation page after successful submission
    navigate('/join-us-trainer-validation');
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="move-right  mb-4">
          <h2>Registration</h2>
        </div>
        <div className="move-right  mb-1">
          <p>Trainer</p>
        </div>
        <div className="col-md-6">
          <img src={TrainerReg} alt="Trainer Registration" className="img-fluid" />
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
              <label htmlFor="inputSpecialization" className="form-label">
                Specialization
              </label>
              <select
                id="inputSpecialization"
                className="form-select"
                aria-label="Default select example"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              >
                <option defaultValue disabled>
                  Please select
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100 custom-margin-top">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsTrainer;
