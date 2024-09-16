import React, { useState } from 'react';
import  {Link} from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header Section Start */}
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-light fixed-top" id="main-navbar">
          <div className="container justify-content-between">
            {/* Navbar Toggle for Mobile with Brand Logo */}
           <Link className="navbar-brand" to="/">
              <h1><span>Farjana</span>Dev</h1>
            </Link>

            <div className="navbar-toggler" onClick={toggleSidebar}>
              {isOpen ? (
                <span className="close-icon">✖</span> // Close icon when sidebar is open
              ) : (
                <>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span> 
                </>
              )}
            </div>

            <ul className={`navbar-nav ml-auto ${isOpen ? 'open' : ''}`} id="main-menu">
           <Link className="navbar-brand navbar-brnd1 " to="/">
              <h1><span>Farjana</span>Dev</h1>
            </Link>
              <li className="nav-item"><Link className="nav-link active" to="/" onClick={closeSidebar}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeSidebar}>About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services" onClick={closeSidebar}>Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resume" onClick={closeSidebar}>Resume</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/portfolio" onClick={closeSidebar}>Portfolio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pricing" onClick={closeSidebar}>Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog" onClick={closeSidebar}>Blog</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeSidebar}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Header Section End */}
    </>
  );
};

export default Navbar;
