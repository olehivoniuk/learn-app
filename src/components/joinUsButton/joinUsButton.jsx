import { Link } from 'react-router-dom';

import './joinUsButton.css';

const JoinUsButton = () => {
  return (
    <Link to='/join-us' className='join-button'>
      Join Us
    </Link>
  );
};

export default JoinUsButton;