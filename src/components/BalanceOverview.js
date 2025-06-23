import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

const BalanceOverview = () => {
  const [balance, setBalance] = useState(0)
    const [youOwe, setYouOwe] = useState();
  const [youAreOwed, setYouAreOwed] = useState(0);
   

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:8080/balance', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },

          
        })
         .then(res => res.json())
    .then(data => {
     
      if (data < 0) {
         console.log(data);
        setYouOwe(data);
        setYouAreOwed(data);
      } else {
         console.log(data);
        setYouAreOwed(data);
        setYouOwe(data);
      }
    });


        if (res.ok) {
          const data = await res.json();
          setBalance(data);
        } else {
          console.error('Failed to fetch balance');
        }
      } catch (err) {
        console.error('Error fetching balance:', err);
      }
    };

    fetchBalance();
  }, []);
  
  return (
    <div className="balance-overview">
      <div className="balance-card">
        <h3>Total Balance</h3>
        <p>${balance.totalBalance}</p>
      </div>
      <div className="balance-card">
        <h3>You Owe</h3>
        <p>${youOwe}</p>
      </div>
      <div className="balance-card">
        <h3>You Are Owed</h3>
        <p>${youAreOwed}</p>
      </div>
    </div>
  );
};

export default BalanceOverview;
