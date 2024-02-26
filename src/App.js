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
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css'


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <LoginForm/> */}
      {/* <JoinUsTrainer /> */}
      {/* <JoinUsTrainerValidation /> */}
     <JoinUsStudent />

     {/* <JoinUs /> */}
     {/* <AboutUs /> */}

      {/* <Blog /> */}
      {/* <Home/> */}
      <Footer />

    
    </div>
  );
}

export default App;
