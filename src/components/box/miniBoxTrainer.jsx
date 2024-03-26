import React, { useState } from 'react'
import AvatarStudent from '../../images/AvatarStudent.png'
import AvatarTrainer from '../../images/AvatarTrainer.png'
import { Link } from 'react-router-dom'
import './box.css'

const MiniBoxTrainer = ({ isLoggedIn, role, userEmail }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleProfile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isLoggedIn && (
        <div className='mini-profile'>
          <div className='profile-icon' onClick={toggleProfile}>
            <i className='fas fa-user'>
              <div>{role === 'student' ? 'Student' : 'Trainer'} Name</div>
              <img
                src={role === 'student' ? AvatarStudent : AvatarTrainer}
                alt='user'
                style={{ maxWidth: '9vh' }}
              />
            </i>
          </div>
          {isOpen && (
            <div className='profile-details'>
              <p className='email'>{userEmail}</p>
              <div className='line'></div>
              <Link
                to={
                  role === 'student'
                    ? '/my-account-student'
                    : '/my-account-trainer-profile'
                }
                className='profile-link'
              >
                My Account
              </Link>
              <div className='toggle'>
                <label htmlFor='night-mode-toggle'>Night Mode</label>
                <input type='checkbox' id='night-mode-toggle' />
              </div>
              <div className='line'></div>
              <Link to='/login' className='sign-out-link'>
                Sign Out
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MiniBoxTrainer
