import React from 'react';
import DatePickerComponent from '../../../components/datePicker/datePickerComponent';
import './studentTraining.css';

const StudentTraining = () => {
  return (
    <div>
      <div className='content-container'>
        <div className='date-picker-component'>
          <div>
            <h1 style={{ marginTop: '10vh' }}>Trainings</h1>
          </div>

          <div>
            <div>
              <button className="btn btn-success mb-3">Add Training</button>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Search Trainings</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="trainerName">Trainer Name:</label>
                <input type="text" className="form-control mb-4" id="trainerName" placeholder="First Name" />
                <button className="btn btn-outline-secondary search-button-trainings " type="button" id="button-search">Search</button>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="specialization">Specialization:</label>
                <input type="text" className="form-control" id="specialization" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2 mb-3">
                <label htmlFor="fromDate">From:</label>
                <DatePickerComponent id="fromDate" />
              </div>
              <div className="col-md-2 mb-3">
                <label htmlFor="toDate">To:</label>
                <DatePickerComponent id="toDate" />
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className='table-container'>
        <h2>My passed trainings </h2>
        <table className="table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>TRAINING NAME 2</th>
              <th>TYPE</th>
              <th>TRAINER NAME</th>
              <th>DURATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12.03.23</td>
              <td>Java Script Course 1</td>
              <td>Webinar</td>
              <td>Mattew Martinez</td>
              <td>15 d</td>
            </tr>
            <tr>
              <td>12.03.23</td>
              <td>JS Course 2</td>
              <td>Webinar</td>
              <td>Mattew Martinez</td>
              <td>10 d</td>
            </tr>
            <tr>
              <td>12.03.23</td>
              <td>Java</td>
              <td>Webinar</td>
              <td>Maria White </td>
              <td>2 d</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTraining;
