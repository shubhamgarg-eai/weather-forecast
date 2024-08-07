import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import './Navbar.css';

const Navbar = ({ onAddRestaurantClick }) => {
  const history = useNavigate();

  const handleNavigation = (path) => {
    if (path !== '/restaurants') {
        history('/404');
    } else {
        history(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Restaurant Admin</div>
      <div className="navbar-menu">
        <span className="navbar-item" onClick={() => handleNavigation('/restaurants')}>Restaurants</span>
        <span className="navbar-item" onClick={() => handleNavigation('/users')}>Users</span>
        <span className="navbar-item" onClick={() => handleNavigation('/reports')}>Reports</span>
        <span className="navbar-item" onClick={() => handleNavigation('/feedbacks')}>Feedbacks</span>
        <span className="navbar-item" onClick={() => handleNavigation('/payments')}>Payments</span>
      </div>
      <div className="navbar-user">
        <Button className="add-restaurant-button" onClick={onAddRestaurantClick}>Add Restaurant</Button>
        <span>Akash</span>
        <Button className="logout-button">Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
