import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Calculate_BMI from './Components/Calculate_BMI';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Directory from './Components/Directory';
import Diet from './Components/Diet';



function App() {


  const GlobalStyle = createGlobalStyle`
  
html {
  font-size: 50.5%;
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
            <Route path='directory' element={<><Home /><Directory /><Footer /></>} />
            <Route path='diet' element={<Diet />} />
          </Routes>
          <header className="header">
            <a href="/" className="logo"><span>MY</span>FIT</a>

            <div id="menu-btn" className="fas fa-bars"> </div>
            <nav className="navbar1">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/directory">Directory</Link></li>
                <li><Link to="/diet">Diet</Link></li>
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
