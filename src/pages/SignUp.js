import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    phone: '',
    profile_img: null,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profile_img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have a function to handle signup in your API
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Account created successfully
      navigate('/home');
    } else {
      const data = await response.json();
      setError(data.error || 'Failed to create account');
    }
  };

  return (
    
    <div className="signup-container" style={{ backgroundColor: 'white' , display: "flex" }}>
      <div className="signup-form">
        <h2>Create a New Account</h2>

        <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />

            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />

            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            
            <input type="file" accept="image/*" onChange={handleImageChange} />

          <button type="submit">SIGN UP</button>
        </form>
        {error && <p className="error-message">{error}</p>}

    <div className="image-container">
      <img src="logo.png" alt= "Refelctions logo" />
    </div>
      </div>
    </div>
  );
};


export default SignUp;






