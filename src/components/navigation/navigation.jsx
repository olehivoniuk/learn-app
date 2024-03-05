
import { Link } from 'react-router-dom';
import Group1 from '../../images/Group1.jpg';
import JoinUsButton from '../joinUsButton/joinUsButton';
import './navigation.css'

const Navigation = () => {
  return (
    <div className='nav-container'>
      <nav className="nav ">
      <div>
      <img src={Group1} alt="Logo" />
      </div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
      <Link to='/pages/aboutUs/aboutUs'>About us</Link>
      </div>
      <div>
      <Link to='/pages/blog/Blog'>Blog</Link>
      </div>
      <div>
      <Link to='/login' className="nav-link join-button" >Sing in</Link>
      </div>
      <div>
      <JoinUsButton/>
      </div>
    </nav>
    </div>
    
  )
}

export default Navigation
