
import StudentReg from '../../images/StudentReg.png';
import './joinUsStudent.css'

const JoinUsStudent = () => {

    return (
        <div className="container">
          <div className="row">
            <div className="move-right  mb-4">
              <h2>Registration</h2>
            </div>
            <div className=" move-right  mb-1">
              <p>Student</p>
            </div>
            <div className="col-md-6">
              <img src={StudentReg} alt="Trainer Registration" className="img-fluid" />
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
                  <label htmlFor="inputLastName" className="form-label">Date of birth (optional)</label>
                  <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputLastName" className="form-label">Address (optional) </label>
                  <input type="text" className="form-control" id="inputLastName" aria-describedby="lastNameHelp"  placeholder='Input text' required/>
                </div>
              </form>
              <button type="submit" className="btn btn-primary w-100 button-trainer-reg">Submit</button>
            </div>
          </div>
        </div>
      );
    };


export default JoinUsStudent
