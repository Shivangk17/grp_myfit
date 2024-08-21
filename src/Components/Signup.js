import React, { useState } from 'react'
import '../user.css'

export default function Signup() {

  const [signupData, setSignupData] = useState({
    email: '',
    password1: '',
    password2:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:');
  };

  const[email,setEmail] = useState("")
  const[password1,setPassword1] = useState("")
  const[password2,setPassword2] = useState("")
  return (
    <div className='main-page'>
      <br /><br />
         {/* <br /><br /><br /><br /><br /><br /><br /> */}
      <center>
        <form onSubmit={handleSubmit}>
        <div className='signup-body' >
            <p className='div-header'>Signup</p>
            <br/>
            <hr className='horizontal-line'/>
            <br/> <br/><br/><br/>
            <label className='icon' htmlFor='email'>@ </label><input  type='email' placeholder='email-id' className='input' id="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          required/>
            <br/> <br/> <br/>
            <label className='icon' title='between 5 to 10 characters' htmlFor='password1'>🗝</label><input type='password' placeholder='create password ' className='input' minLength={5} maxLength={10} id="password1"
          name="password1"
          value={signupData.password1}
          onChange={handleChange}
          required/>
             <br/> <br/> <br/>
            <label className='icon' htmlFor='password2'>🗝</label><input type='password' placeholder='Re-enter password' className='input' minLength={5} maxLength={10} id="password2"
          name="password2"
          value={signupData.password2}
          onChange={handleChange}
          required/>
            <br/> <br/> <br/> <br/> <br/>
            <button className='submit'type='submit' onClick={(e)=>{
              if(signupData.password1 != signupData.password2){
                e.preventDefault()
                 alert("OOPS! Password didn't matched")
              }
            }}>Submit</button>
            <div className='div-footer'>
            <br/> <br/><br/>
            <p className='need-help'>Need help?</p>
            </div>
            
        </div>
        </form>
      </center>
    </div>
  )
}
