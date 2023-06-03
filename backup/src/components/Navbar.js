import React, {useState, useEffect} from 'react'
import { Button } from './Button.js';
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <div className="home-menu">
            <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            BookCollec <i class="fa-solid fa-book"></i> 
            </Link>
          </div>
          
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/home' className='nav-links' onClick={closeMobileMenu} activeClassName='bar-active' exact>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/books' className='nav-links' onClick={closeMobileMenu} activeClassName='bar-active' exact>
                Books
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/user-collection' className='nav-links' onClick={closeMobileMenu} activeClassName='bar-active' exact>
                My Collection
              </NavLink>
            </li>

            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
          </ul>
          <Button buttonStyle='btn--outline' onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar