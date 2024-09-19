import { React, useState, useEffect } from 'react'
import About from './Components/About';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Calculate_BMI from './Components/Calculate_BMI';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import Directory from './Components/Directory';
import Diet from './Components/Diet';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Feature from './Components/Feature';
import Profile from "./Components/Profile";
import Userdata from './Components/Userdata'
import Fetchdata from './Components/Fetchuserdata'

import './user.css';
import Abs from './Body-parts/Abs';
import Biceps from './Body-parts/Biceps';
import Calves from './Body-parts/Calves';
import Chest from './Body-parts/Chest';
import Forearms from './Body-parts/ForeArms';
import Glutes from './Body-parts/Glutes';
import Hamstring from './Body-parts/Hamstring';
import Lats from './Body-parts/Lats';
import LowerBack from './Body-parts/LowerBack';
import Obliques from './Body-parts/Obliques';
import Quads from './Body-parts/Quads';
import Shoulders from './Body-parts/Shoulders';
import Traps from './Body-parts/Traps';
import TrapsMiddle from './Body-parts/TrapsMiddle';
import Triceps from './Body-parts/Triceps';
import Payment from './Components/Payment';
import CheckoutForm from './Components/CheckoutForm';


function App() {


  const GlobalStyle = createGlobalStyle`
  
html {
  font-size: 60.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--black);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--red);
  }
}

body {
  background: var(--black);
}

section {
  padding: 5rem 9%;
}
  .swiper-pagination-bullet {
    height: 2rem;
    width: 2rem;
    background: var(--white);
    border-radius: 0;
  
    &.swiper-pagination-bullet-active {
      background: var(--red);
  }
}
`
  const [user, setData] = useState(null);
  const [username, setUsername] = useState(null)
  // Load user details from localStorage when the app is initialized
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const name = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const isPremiumUser = localStorage.getItem('ispremiumuser')
    setUsername(localStorage.getItem('username'))
    if (token && name) {
      setData({ username, email, isPremiumUser });
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage and reset user state
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('ispremiumuser')
    setData(null);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />

          <Routes>
            <Route exact path='/' element={<><Home /><About /><Feature /> <Footer /></>} />
            <Route path='about' element={<About />} />
            <Route path='directory' element={<><Directory /><Footer /></>} />
            <Route path='diet' element={<Diet />} />
            <Route path='login' element={<Login setData={setData} />} />

            <Route path='signup' element={<Signup />} />
            <Route path='userform' element={<Userdata />} />
            <Route path='fetchuser' element={<Fetchdata />} />


            <Route path='abs' element={<Abs />} />
            <Route path='biceps' element={<Biceps />} />
            <Route path='calves' element={<Calves />} />
            <Route path='chest' element={<Chest />} />
            <Route path='forearms' element={<Forearms />} />
            <Route path='glutes' element={<Glutes />} />
            <Route path='hamstring' element={<Hamstring />} />
            <Route path='lats' element={<Lats />} />
            <Route path='lowerback' element={<LowerBack />} />
            <Route path='obliques' element={<Obliques />} />
            <Route path='quads' element={<Quads />} />
            <Route path='shoulders' element={<Shoulders />} />
            <Route path='traps' element={<Traps />} />
            <Route path='trapsmiddle' element={<TrapsMiddle />} />
            <Route path='triceps' element={<Triceps />} />
            {/* For profile */}
            <Route path='profile' element={<Profile />} />

            <Route path='payment' element={<Payment />} />
            <Route path='alternate' element={<CheckoutForm />} />
          </Routes>
          <header className="header">
            <a href="/" className="logo"><span>MY</span>FIT</a>

            <div id="menu-btn" className="fas fa-bars"> </div>
            <nav className="navbar1">
              {/* <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/directory">Directory</Link>
              <Link to="/diet">Diet</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link> */}
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/directory">Directory</Link></li>
                <li><Link to="/diet">Diet</Link></li>
                <li><Link to="/userform">Form</Link></li>
                <li><Link to="/fetchuser">User</Link></li>
                {
                  user ? (
                    <>
                      {/* <li><Link to="/profile" className='page-link'>Profile</Link></li> */}
                      <li><Link to="/" onClick={handleLogout}>Logout</Link></li></>
                  ) : (<li><Link to="/login" className='page-link'>login</Link></li>)
                }

                {/* <li><Link to="/signup" className='page-link'>signup</Link></li> */}
                {/* <li><Link to="/profile" className='page-link'>profile</Link></li> */}
              </ul>
            </nav>

          </header>
          <nav className='navbar1'>

          </nav>
          <Outlet /> {/* If using nested routes, otherwise remove this */}

        </div>
      </BrowserRouter>


    </div >
  );
}

export default App;
