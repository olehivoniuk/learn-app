import Group1 from '../../images/Group1.jpg';


import './footer.css'

const Footer = () => {
  return (
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
      </div>
      <div className="footer-column">
        <h3>Subscribe to Our Newsletter</h3>
        <ul className='list-style'>
            <li>for product announcements and exclusive insights </li>
            <li> <input/></li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;

