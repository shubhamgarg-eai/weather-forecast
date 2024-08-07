import React from 'react';
// import './NotFound.css';
//import notFoundImage from '../../assets/404.png'; // Ensure you have a 404.png image in the assets folder

const NotFound = () => {
  return (
    <div className="not-found">
      {/* <img src={notFoundImage} alt="404 Not Found" /> */}
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
