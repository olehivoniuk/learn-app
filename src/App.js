import Footer from './components/footer/footer';

import Navigation from './components/navigation/navigation';
import LoginForm from './components/loginForm/loginForm';
import Home from './pages/homePage/home';
import JoinUs from './pages/joinUs/joinUs';
import AboutUs from './pages/aboutUs/aboutUs';
import Blog from './pages/blog/blog';
import JoinUsTrainer from './pages/joinUsTrainer/joinUsTrainer';
import JoinUsTrainerValidation from './pages/joinUsTrainerValidation/joinUsTrainerValidation';
import JoinUsStudent from './pages/joinUsStudent/joinUsStudent';
import StudentLogInHome from './pages/studentLogInHome/studentLogInHome';
import MyAccountStudent from './pages/myAccount/myAccoutStudent/myAccountStudent';
import AddAccountStudentAddTrainer from './pages/myAccount/myAccountStudentAddTrainer/addAccountStudentAddTrainer';
import AddTodoForm from './addToDo/AddTodoForm';
import EditMyStudentAccount from './pages/myAccount/editMyStudentAccount/editMyStudentAccount';
import StudentTraining from './pages/training/studentTrainings/studentTraining';
import AddTraining from './pages/training/addTrainings/addTraining';
import Box from './components/box/box';
import ChangePassword from './pages/changePassword/changePassword';
import TrainerLogInHome from './pages/trainerLogInHome/trainerLogInHome';
import ChangePasswordStatus from './pages/changePasswordStatus/changePasswordStatus';
import MyAccountTrainerProfile from './pages/myAccountTrainer/myAccountTrainerProfile/myAccountTrainerProfile';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


function App() {
  
  return (
    <div className="App">
      <Navigation />
      {/* <LoginForm/> */}
      {/* <JoinUsTrainer /> */}
      {/* <JoinUsTrainerValidation /> */}
     {/* <JoinUsStudent /> */}
     {/* <StudentLogInHome /> */}
     {/* <JoinUs /> */}
     {/* <AboutUs /> */}
     {/* <MyAccountStudent /> */}
      {/* <Blog /> */}
      {/* <Home/> */}
    {/* <AddAccountStudentAddTrainer/> */}
    {/* <AddTodoForm /> */}
    {/* <EditMyStudentAccount /> */}
    {/* <StudentTraining /> */}

    {/* <AddTraining /> */}
    {/* <Box/> */}
    {/* <ChangePassword/> */}
    {/* <ChangePasswordStatus /> */}
    {/* <TrainerLogInHome/> */}
    <MyAccountTrainerProfile/>


      <Footer />


    
    

    </div>
  );
}

export default App;
