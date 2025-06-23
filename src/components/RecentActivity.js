// src/components/Dashboard/RecentActivity.js
import React from 'react';
import '../styles/Dashboard.css';

const RecentActivity = ({ activities }) => {
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <span>{activity.description}</span>
            <span>${activity.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
