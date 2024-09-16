import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const[message,setMessage] = useState("")
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', formData);
      const { access, username, email, isPremiumUser } = response.data;
      
      // Save to localStorage
      localStorage.setItem('token', access);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('isPremiumUser', isPremiumUser);
      setMessage(username)
      console.log('User logged in:', response.data);
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <br/><br/><br/><br/><br/><br/><br/>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <h1 style={{color:"white"}}>{message}</h1>
      <button type="submit">Login</button>
      
    </form>
  );
};

export default Login;
