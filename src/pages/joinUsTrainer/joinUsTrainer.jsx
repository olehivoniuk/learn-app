import React from 'react';
import TrainerReg from '../../images/TrainerReg.png';
import './joinUsTrainer.css'

const JoinUsTrainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="move-right  mb-4">
          <h2>Registration</h2>
        </div>
        <div className=" move-right  mb-1">
          <p>Trainer</p>
        </div>
        <div className="col-md-6">
          <img src={TrainerReg} alt="Trainer Registration" className="img-fluid" />
        </div>
        <div className="col-md-6">
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
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='Input text' required/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputSpecialization" className="form-label">Specialization</label>
              <select id="inputSpecialization" className="form-select" aria-label="Default select example" required>
                <option defaultValue disabled>Please select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </form>
          <button type="submit" className="btn btn-primary w-100 custom-margin-top">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsTrainer;
