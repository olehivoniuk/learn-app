import { Link } from 'react-router-dom';
import '../joinUsTrainerValidation/joinUsTrainerValidation.css'

const JoinUsStudentValidation = () => {
    return (
      <div>
        <div className="container">
        <div className="row justify-content-center">
       <div className="col-md-6">
        <div className="heading-registration mt-5" >
          <h1 className='heading-registration'>Registration</h1>
         </div>
        </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="checkbox-container">
                <input type="checkbox" id="myCheckbox"/>
                <p className='checkbox-sign text-white'>✔</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-text">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="text-center">
                    <p className="w-80">Congratulations, you have sucseessfully registered with Learn Platform! Here is your credentials you can change in your account </p>
                  </div>
                  <div>
                      <p className="text-center">
                       User name
                      </p>
                      </div>

                      <div>
                      <p className="text-center">
                       John_trainer
                      </p>
                      </div>

                      <div>
                      <p className="text-center">
                       Password
                      </p>
                      </div>

                      <div>
                      <p className="text-center">
                       qwerty1235
                      </p>
                      </div>

                      <div>
                      <p className="text-center">
                      <Link to='/student-login-home' className="btn btn-primary">My account</Link>
                      </p>
                      </div>
                </div>
              </div>
            </div>
      </div>
    );
  }

export default JoinUsStudentValidation
