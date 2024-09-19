import React, { useState } from 'react';
import '../user.css';
import Image from '../signup-background.jpeg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    isPremiumUser: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      alert("Passwords don't match");
      navigate('/signup')
    }
    const valid_data = {
      username: formData.username,
      email: formData.email,
      password: formData.password1,
      isPremiumUser: false,
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', valid_data);
      console.log('User registered:', response.data);
      setFormData({
        username: '',
        email: '',
        password1: '',
        password2: '',
        isPremiumUser: false,
      })
      navigate('/')
    } catch (error) {
      console.error('There was an error!', error);
    }
  };


  return (
    <div>
      <br /><br /><br /><br />
      <section className="signup-page">

        <div className="image-section">
          <img src={Image} alt="Decorative" />
        </div>

        <div className="form-section">
          <div className="signup-body">
            <h2 className="signup-header">Signup</h2>
            <hr className="horizontal-line" />
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="username"
                  className="input"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">

                <input
                  type="email"
                  placeholder="email-id"
                  className="input"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">

                <input
                  type="password"
                  placeholder="create password (6 - 10 characters)"
                  className="input"
                  maxLength={10}
                  minLength={6}
                  id="password1"
                  name="password1"
                  value={formData.password1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">

                <input
                  type="password"
                  placeholder="re-enter password"
                  className="input"
                  maxLength={10}
                  minLength={6}
                  id="password2"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}