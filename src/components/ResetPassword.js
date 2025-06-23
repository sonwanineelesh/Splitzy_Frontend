import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const tokenFromURL = searchParams.get('token');
    if (tokenFromURL) {
      setToken(tokenFromURL);
    } else {
      setMessage('Token missing in URL');
      setIsSuccess(false);
    }
  }, [searchParams]);

  const handleReset = async () => {
    if (!newPassword || !token) {
      setMessage('Password and token are required.');
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, newPassword })
      });

      const result = await response.text();

      if (response.ok) {
        setMessage(result);
        setIsSuccess(true);
      } else {
        setMessage(result);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleReset} style={styles.button}>
          Submit
        </button>
        {message && (
          <p style={{ ...styles.message, color: isSuccess ? 'green' : 'red' }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f0f2f5',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '350px'
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '15px',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default ResetPassword;
