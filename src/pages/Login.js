import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from  backend when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during data fetching:', error.message);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;

    // Check if the entered email and password match any user in the fetched data
    const user = users.find((user) => user.email === enteredEmail && user.password_hash === enteredPassword);

    if (user) {
      console.log('Login successful:', user);

      // Store user information in localStorage or a global state management solution
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to the home page
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page
    navigate('/signup');
  };

  return (
    <div className="login-container" style={{ backgroundColor: '#EC6C25', height: '100vh' }}>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className='input-container'>
        <input type="text" id="email" name="email" placeholder="EMAIL" required />
        <input type="password" id="password" name="password" placeholder="PASSWORD" required />
        </div>
        
        <div className='button-container'>
          <button type="submit">LOGIN</button>
          <button onClick={handleSignUp}>SIGN UP</button>
        </div>

        <div className="social-buttons">
          <p style={{ color: '#fff', margin: '10px 0' }}>or sign in with</p>
          <div className='social-logos'>
            <img src="googleLogo.png" alt="Google Logo" style={{ marginRight: '10px', cursor: 'pointer' }}  />
            <img src="facebookLogo.png" alt="Facebook Logo" style={{ cursor: 'pointer' }}  />
          </div>

          <div className="additional-text">
          <p>
            Feeling overwhelmed postpartum? Need to talk to others who are going through the same thing?
            Join the conversation.
          </p>
        </div>

          <div className="image-containers">
          <div className='background-overlay'></div>
          <img
            src="logo2.png" 
            alt="reflections logo"
          />
        </div>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;





