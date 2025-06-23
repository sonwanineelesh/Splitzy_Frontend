// src/components/Dashboard/GroupSummary.js
import React from 'react';
import '../styles/Dashboard.css';

const GroupSummary = ({ groups }) => {
  return (
    <div className="group-summary">
      <h2>Your Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            <span>{group.name}</span>
            <span>${group.balance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupSummary;
