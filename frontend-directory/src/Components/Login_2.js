import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'

const Login = ({ setData }) => {
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
      const response = await axios.post('http://127.0.0.1:8000/login/', formData,
        {headers: {
          'Content-Type': 'application/json',
        },}
      );

      const data = response.data;

      if (data.status === 'success') {
        // Store JWT tokens and user details in localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        localStorage.setItem('isPremiumUser', data.isPremiumUser);
        setMessage(data.username+""+data.email+""+data.isPremiumUser)
      setData({username : data.username , email : data.email , isPremiumUser : data.isPremiumUser})
      console.log('User logged in:', response.data);
      }
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
