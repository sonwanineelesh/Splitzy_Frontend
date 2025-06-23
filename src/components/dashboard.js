// src/components/Dashboard/Dashboard.js
import React from 'react';
// import Sidebar from './Sidebar';
import Sidebar from './sidebar';
import Header from './Header';
import BalanceOverview from './BalanceOverview';
import RecentActivity from './RecentActivity';
import GroupSummary from './GroupSummary';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Sample data; replace with actual data fetching logic
  const userName = 'John Doe';
  const totalBalance = 150;
  const youOwe = 75;
  const youAreOwed = 225;
  const activities = [
    { description: 'Dinner with Alice', amount: 25 },
    { description: 'Groceries', amount: 50 },
  ];
  const groups = [
    { name: 'Roommates', balance: 100 },
    { name: 'Trip to Goa', balance: 50 },
  ];

  const handleLogout = () => {
    // Implement logout functionality
    console.log('User logged out');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <Header userName={userName} onLogout={handleLogout} />
        <BalanceOverview
          totalBalance={totalBalance}
          youOwe={youOwe}
          youAreOwed={youAreOwed}
        />
        <RecentActivity activities={activities} />
        <GroupSummary groups={groups} />
      </main>
    </div>
  );
};

export default Dashboard;
