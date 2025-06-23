// src/components/Dashboard/Sidebar.js
import React from 'react';
import { FaHome, FaUsers, FaUserFriends, FaCog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'; // Adjust the path as necessary

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Splitzy</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/groups" activeClassName="active">
              <FaUsers /> Groups
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" activeClassName="active">
              <FaUserFriends /> Friends
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              <FaCog /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
