import React from 'react';
import './addAccountStudentAddTrainer.css';

const AddAccountStudentAddTrainer = () => {
  return (
    <div className="container">
      <h1 className="text-center">Add Trainer</h1>
      <div className="row">
        <div className="col-md-6">
          <p>Please select trainers for adding them to your trainers list. </p>
              <p> -* There is no possibility to remove the trainer.</p>            
          <h2 className="text-center">All Trainers</h2>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                  <strong>NAME</strong>
                </th>
                <th><strong>SPECIALIZATION</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                  <span><strong>Elizabeth Watson</strong></span>
                </td>
                <td>Go lang</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                  <span><strong>Elizabeth Allen</strong></span>
                </td>
                <td>Rust</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                  <span><strong>Kaleb Jones</strong></span>
                </td>
                <td>Python</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                  <span><strong>Javier Ortis</strong></span>
                </td>
                <td>HTML</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                  <span><strong>Brandon Tailor</strong></span>
                </td>
                <td>CSS</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary mt-3">Add</button>
        </div>
        <div className="col-md-6 my-trainer-table">
          <h2 className="text-center">My Trainer</h2>
          <table className="table">
            <thead>
              <tr>
                <th><strong>NAME</strong></th>
                <th><strong>SPECIALIZATION</strong></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td><strong>Elizabeth Lopez</strong></td>
                <td>PHP</td>
              </tr>
              <tr>
                <td><strong>Mattew Martinez</strong></td>
                <td>Java Script</td>
              </tr>
              <tr>
                <td><strong>Elizabeth Hall</strong></td>
                <td>Algoritms</td>
              </tr>
              <tr>
                <td><strong>Maria White</strong></td>
                <td>Java</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddAccountStudentAddTrainer;
