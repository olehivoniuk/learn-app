import React from 'react';
import Blog1 from '../../images/Blog1.png'
import Blog2 from '../../images/Blog2.png'
import Blog3 from '../../images/Blog3.png'
import Blog4 from '../../images/Blog4.png'
import Blog5 from '../../images/Blog5.png'
import Blog6 from '../../images/Blog6.png'
import './blog.css';

const Blog = () => {
  return (
      <div>
           <h1 className='blog-heading'>Blog</h1>
      <div className="blog-container">
      <div className="blog-block">
        <img src={Blog1} alt="blog1" className="blog-image" />
        <p className="blog-description">Blog 1</p>
      </div>
      <div className="blog-block">
        <img src={Blog2} alt="blog2" className="blog-image" />
        <p className="blog-description">Blog 2</p>
      </div>
      <div className="blog-block">
        <img src={Blog3} alt="blog3" className="blog-image" />
        <p className="blog-description">Blog 3</p>
      </div>
      <div className="blog-block">
        <img src={Blog4} alt="blog4" className="blog-image" />
        <p className="blog-description">Blog 4</p>
      </div>
      <div className="blog-block">
        <img src={Blog5} alt="blog5" className="blog-image" />
        <p className="blog-description">Blog 5</p>
      </div>
      <div className="blog-block">
        <img src={Blog6} alt="blog6" className="blog-image" />
        <p className="blog-description"> Blog 6</p>
      </div>
      <button className="blog-button">Load more acticles</button>
    </div>
      </div>
    
  );
}

export default Blog;
