// src/components/Dashboard/Header.js
import React from 'react';
import '../styles/Dashboard.css';

const Header = ({ userName, onLogout }) => {
  return (
    <header className="dashboard-header">
      <h1>Welcome, {userName}</h1>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
};

export default Header;
