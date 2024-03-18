import React from 'react';
import './addTraining.css';
import DatePickerComponent from '../../../components/datePicker/datePickerComponent';


const AddTraining = () => {
  return (
    <div className="add-training-container">
      <h1 style={{marginTop: '10vh'}}>Add Passed Training</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Training</h2>
          <div className="mb-3">
            <label htmlFor="trainingName">Training Name:</label>
            <input type="text" className="form-control" id="trainingName" placeholder="Enter Training Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="trainingDate">Training Date:</label>
            <DatePickerComponent id="trainingDate" className="form-control"  />
          </div>
          <div className="mb-3">
            <label htmlFor="trainerName">Trainer Name:</label>
            <input type="text" className="form-control" id="trainerName" placeholder="Enter Trainer Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" placeholder="Enter Location" />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" id="description" rows="3" placeholder="Enter Description"></textarea>
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary me-3">Add</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
        <div className="col-md-4 align-self-start mt-md-4 add-trainers-select">
          <div className="mb-3">
            <label htmlFor="selectTrainer">Add Trainers:</label>
            <select className="form-select" id="selectTrainer" style={{marginTop:'22px'}}>
              <option selected>Select Trainer</option>
              <option value="John Doe">John Doe</option>
              <option value="Jerome Alero">Jerome Alero</option>
              <option value="J Crow">J Crow</option>
              <option value="Anna Smith">Anna Smith</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTraining;