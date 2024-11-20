import React from 'react';
import im1 from './1.png';
import im2 from './2.png';
import './Home.css'; // Use regular CSS file

function Home() {
  return (
    <div className="TT_imageContainer"> {/* Use plain string class names */}
      <img src={im1} alt="Image 1" className="TT_Image" />
      <img src={im2} alt="Image 2" className="TT_Image" />
    </div>
  );
}

export default Home;
