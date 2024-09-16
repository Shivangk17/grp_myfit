import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isPremiumUser: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', formData);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <br/><br/><br/><br/><br/><br/><br/>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
