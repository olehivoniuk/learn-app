import React from 'react';
import Group1 from '../../images/Group1.jpg';
import Facebook from '../../images/Facebook.svg'
import Youtube from '../../images/Youtube.svg'
import Twitter from '../../images/Twitter.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <img src={Group1} alt="Logo" />
          </div>
          <div className="footer-column">
            <h3>Product</h3>
            <ul className='list-style'>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className='list-style'>
              <li>Blog</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul className='list-style'>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Subscribe to Our Newsletter</h3>
            <ul className='list-style'>
               <li>for product announcements and exclusive insights</li>
               <li>
                 <div className="input-group mb-3">
                   <input type="text" className="form-control" placeholder="Input your emai" aria-label="Recipient's username" aria-describedby="button-addon2" />
                   <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                 </div>
               </li>
             </ul>             
          </div>
        </div>
        <hr />
        <div className="footer-elements">
          <div className="footer-column">
            <select name="language">
              <option value="English">English</option>
            </select>
          </div>
          <div className="footer-column">
            &#169; Learn, Inc.  &#8226;  Privacy &#8226;  Terms
          </div>
          <div className="footer-column">
            <img src={Facebook} alt="Facebook logo" className='social-media' />
            <img src={Twitter} alt="Twitter logo" className='social-media' />
            <img src={Youtube} alt="Youtube logo"  className='social-media'/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
