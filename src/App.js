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
import './user.css';



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


  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />

          <Routes>
            <Route exact path='/' element={<><Home /><About /><Calculate_BMI /><Footer /></>} />
            <Route path='about' element={<About />} />
            <Route path='directory' element={<><Directory /><Footer /></>} />
            <Route path='diet' element={<Diet />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
          <header className="header">
            <a href="/" className="logo"><span>MY</span>FIT</a>

            <div id="menu-btn" className="fas fa-bars"> </div>
            <nav className="navbar1">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/directory">Directory</Link>
              <Link to="/diet">Diet</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
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
