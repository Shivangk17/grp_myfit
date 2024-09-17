import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../user.css';
import Image from '../login-background-2.webp'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login( {setData} ) {
  const navigate = useNavigate()
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
      alert("Login successfull !")
      navigate("/")
      }
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  return (
    <section className="login-page">
      <div className="image-section">
        <img src={Image} alt="Decorative" />
      </div>
      <div className="form-section">
        <div className="login-body">
          <h2 className="login-header">Login</h2>
          <hr className="horizontal-line" />
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="icon" htmlFor="username">@</label>
              <input
                type="text"
                placeholder="Username"
                className="input"
                id="username"
                name="username"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label className="icon" title="Password" htmlFor="password">🗝</label>
              <input
                type="password"
                placeholder="password (between 6 - 10 characters)"
                className="input"
                maxLength={10}
                minLength={6}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="submit" type="submit">Submit</button>
            <div className="login-footer">
              <Link to="/signup" className="new-user">New to MyFit?</Link>
              <Link to="/forgot-password" className="forgot-pass">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}