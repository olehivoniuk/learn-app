import Footer from './components/footer/footer';

import Navigation from './components/navigation/navigation';
import LoginForm from './components/loginForm/loginForm';
import Home from './pages/homePage/home';
import JoinUs from './pages/joinUs/joinUs';
import AboutUs from './pages/aboutUs/aboutUs';


import './App.css'


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <LoginForm/> */}

     {/* <JoinUs /> */}
     <AboutUs />

      <Footer />

      {/* <Home/> */}
    </div>
  );
}

export default App;
