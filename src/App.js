import Footer from './components/footer/footer';

import Navigation from './components/navigation/navigation';
import LoginForm from './components/loginForm/loginForm';
import './App.css'


function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
