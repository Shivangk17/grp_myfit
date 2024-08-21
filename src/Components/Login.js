import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../user.css';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:');
  };

  return (
    <div className='main-page'>
      <br /><br />
         {/* <br /><br /><br /><br /><br /><br /><br /> */}
      <center>
        <form onSubmit={handleSubmit}>
        <div className='login-body' >
            <p className='div-header'>Login</p>
            <br/>
            <hr className='horizontal-line'/>
            <br/> <br/><br/><br/>

            
            <p className='icon'>@ </p><input  type='email' placeholder='email-id' className='input' id="email" name="email" value={loginData.email} onChange={handleChange} required/>
            <br/> <br/> <br/>
            <p className='icon'>🗝</p><input type='password' placeholder='password (between 6 - 10 characters)' className='input' maxLength={10} id="password" name="password" value={loginData.password} onChange={handleChange} required />
            <br/> <br/> <br/> <br/> <br/><br/>
            <button className='submit' type='submit'>Submit</button>
            <div className='div-footer'>
            <br/> <br/><br/>
            <Link to="/signup" className='new-user'>New to MyFit?</Link>
            {/* <p className='new-user' onClick={()=>{
              return(<Signup/>)
            }}>New to MyFit?</p> */}
            {/* <br/> <br/><br/> */}
            <p className='forgot-pass'>Forgot password?</p>
            </div>
            
        </div>
        </form>
      </center>
      
    </div>
  )
}
