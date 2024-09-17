import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Image from '../profile-pic-2.jpg'
import '../profile.css'

export default function Profile() {
    const[image,setImage] = useState('')
    const[username,setUsername] = useState('Darsh')
    const[email,setEmail] = useState('darshtrivedi1812@gmail.com')
    const[dob,setDOB] = useState('18-12-2004')
    const[height,setHeight] = useState('178')
    const[weight,setWeight] = useState('70')
    const[age,setAge] = useState('19')
    const[bmi,setBMI] = useState('19')
    var newusername = localStorage.getItem('username')
  return (
    <div>
      <div className='profile-div-1'>
        <center>
            <div className='profile-picture-div'>
                {/* <center> */}
            <img src={Image} className='profile-picture' alt='profile' />
            {/* </center> */}
            </div>
            <hr className='profile-horizontal-line-1'/>
            <p className='profile-username'>{newusername}</p>
            
            {/* <p className='profile-email'>{email}</p> */}
            
            <Link to='/profile' ><div className='profile-link'>Profile</div></Link>
            
            <Link to='/login' ><div className='profile-link'>edit profile</div></Link>
            </center> 
      </div>
      <div className='profile-div-2'>
      <center>
        {/* Account details section */}
            <p className='header-1'>Account details</p>
            <hr className='horizontal-line'/>
            <div className='details'>
            <p className='left-details'>username : <p className='data'>{username}</p></p>
            <hr className='line-break-1'/>
            <p className='left-details'>email id : <p className='data'>{email}</p></p>
            <hr className='line-break-1'/>
            <p className='left-details'>Date of birth : <p className='data'>{dob}</p></p>
            <hr className='line-break-2'/>
            <hr className='horizontal-line'/>
            </div>
            {/* Personal details section */}
            <p className='header-1'>Personal details</p>
            <hr className='horizontal-line'/>
            <div className='details'>
            <p className='left-details'>age : <p className='data'>{age}</p></p>
            <hr className='line-break-1'/>
            <p className='left-details'>height : <p className='data'>{height} cms</p></p>
            <hr className='line-break-1'/>
            <p className='left-details'>weight : <p className='data'>{weight} kg</p>(button for bmi if not given)</p>
            <hr className='line-break-1'/>
            <p className='left-details'>bmi : <p className='data'>{bmi}</p></p>
            <hr className='line-break-2'/>
            <hr className='horizontal-line'/>
            </div>
            </center> 
      </div>
    </div>
  )
}
