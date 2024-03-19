

import React from 'react';
import LoginForm from '../components/loginForm/loginForm';
import Home from '../pages/homePage/home';
import JoinUs from '../pages/joinUs/joinUs';
import AboutUs from '../pages/aboutUs/aboutUs';
import Blog from '../pages/blog/blog';
import JoinUsTrainer from '../pages/joinUsTrainer/joinUsTrainer';
import JoinUsTrainerValidation from '../pages/joinUsTrainerValidation/joinUsTrainerValidation';
import JoinUsStudentValidation from '../pages/joinUsStudentValidation/joinUsStudentValidation';
import JoinUsStudent from '../pages/joinUsStudent/joinUsStudent';
import StudentLogInHome from '../pages/studentLogInHome/studentLogInHome';
import MyAccountStudent from '../pages/myAccount/myAccoutStudent/myAccountStudent';
import AddAccountStudentAddTrainer from '../pages/myAccount/myAccountStudentAddTrainer/addAccountStudentAddTrainer';
// import AddTodoForm from '../addToDo/AddTodoForm';
import EditMyStudentAccount from '../pages/myAccount/editMyStudentAccount/editMyStudentAccount';
import StudentTraining from '../pages/training/studentTrainings/studentTraining';
import AddTraining from '../pages/training/addTrainings/addTraining';
import Box from '../components/box/box';
import ChangePassword from '../pages/changePassword/changePassword';
import TrainerLogInHome from '../pages/trainerLogInHome/trainerLogInHome';
import ChangePasswordStatus from '../pages/changePasswordStatus/changePasswordStatus';
import MyAccountTrainerProfile from '../pages/myAccountTrainer/myAccountTrainerProfile/myAccountTrainerProfile';
import MyAccoutEditTrainerProfile from '../pages/myAccountTrainer/myAccountEditTrainerProfile/myAccoutEditTrainerProfile';
import MyAccountTrainerTrainings from '../pages/myAccountTrainer/myAccountTrainerTrainings/myAccountTrainerTrainings';
import ChangePasswordTrainer from '../pages/myAccountTrainer/changePasswordTrainer/changePasswordTrainer';

const routes = [
  { path: "/", Element: <Home /> },
  { path: "/login", Element: <LoginForm /> },
  { path: "/join-us", Element: <JoinUs /> },
  { path: "/pages/aboutUs/aboutUs", Element: <AboutUs /> },
  { path: "/pages/blog/blog", Element: <Blog /> },
  { path: "/join-us-trainer", Element: <JoinUsTrainer /> },
  { path: "/join-us-trainer-validation", Element: <JoinUsTrainerValidation /> },
  { path: "/join-us-student", Element: <JoinUsStudent /> },
  { path: "/join-us-student-validation", Element: <JoinUsStudentValidation /> }, // Corrected path
  { path: "/student-login-home", Element: <StudentLogInHome /> },
  { path: "/my-account-student", Element: <MyAccountStudent /> },
  { path: "/add-account-student-add-trainer", Element: <AddAccountStudentAddTrainer /> },
  // { path: "/add-todo", Element: <AddTodoForm /> },
  { path: "/edit-my-student-account", Element: <EditMyStudentAccount /> },
  { path: "/student-training", Element: <StudentTraining /> },
  { path: "/add-training", Element: <AddTraining /> },
  { path: "/box", Element: <Box /> },
  { path: "/change-password", Element: <ChangePassword /> },
  { path: "/trainer-login-home", Element: <TrainerLogInHome /> },
  { path: "/change-password-status", Element: <ChangePasswordStatus /> },
  { path: "/my-account-trainer-profile", Element: <MyAccountTrainerProfile /> },
  { path: "/my-account-edit-trainer-profile", Element: <MyAccoutEditTrainerProfile /> },
  { path: "/my-account-trainer-trainings", Element: <MyAccountTrainerTrainings /> },
  { path: "/change-password-trainer", Element: <ChangePasswordTrainer /> },
];

export default routes;
