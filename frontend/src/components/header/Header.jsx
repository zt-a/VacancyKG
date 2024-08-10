import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ navLinks, logo, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    document.body.classList.toggle('mmm-open', !isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu background (for closing menu on click outside) */}
      <div className={`mf-bg ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

      {/* Mobile menu */}
      <nav className={`mmm ${isMenuOpen ? 'open' : ''}`} style={{ paddingTop: '60px' }}>
        <div className="mmm-content">
          <ul className="mmm-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Nav.Link to={link.href} as={Link}>
                  <span>{link.text}</span>
                </Nav.Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="header header-minimal">
        <nav className="header-fixed">
          <div className="container">
            <div className="row flex-nowrap align-items-center justify-content-between">
              <div className="col-auto header-fixed-col logo-wrapper">
                <Nav.Link to="/" as={Link} className="logo" title={title} style={{ display: 'flex' }}>
                  <img src={logo} width="115" height="36" alt={title} />
                </Nav.Link>
              </div>
              <div className="col-auto col-xl col-static header-fixed-col d-none d-xl-block">
                <div className="row flex-nowrap align-items-center justify-content-end">
                  <div className="col header-fixed-col d-none d-xl-block col-static">
                    <nav className="main-mnu">
                      <ul className="main-mnu-list">
                        {navLinks.map((link, index) => (
                          <li key={index}>
                            <Nav.Link to={link.href} as={Link} data-title={link.title}>
                              <span>{link.text}</span>
                            </Nav.Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-auto d-block d-xl-none header-fixed-col">
                <div
                  className={`main-mnu-btn ${isMenuOpen ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  <span className="bar bar-1"></span>
                  <span className="bar bar-2"></span>
                  <span className="bar bar-3"></span>
                  <span className="bar bar-4"></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
