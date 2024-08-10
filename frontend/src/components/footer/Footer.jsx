import React from 'react';
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = ({navLinks, ...props}) => {
  return (
    <footer className="footer footer-minimal">
    <div className="footer-main">
        <div className="container">
            <div className="row items align-items-center">
                <div className="col-lg-3 col-md-4 col-12 item">
                    <div className="widget-brand-info">
                        <div className="widget-brand-info-main">
                            <Nav.Link to="/" as={Link} className="logo" title={props.title}>
                                <img 
                                  data-src={props.logo}
                                  className="lazy" 
                                  width="133" 
                                  height="36" 
                                  src={props.logo}
                                  alt={props.title}
                                  data-loaded="true" 
                                  style={{opacity: 1}}
                                />
                            </Nav.Link>
                        </div>
                    </div>
                </div>
                <div className="col-md item">
                    <div className="footer-item">
                        <nav className="footer-nav">
                            <ul className="footer-mnu footer-mnu-line">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                  <Nav.Link to={link.href} as={Link} className="hover-link" data-title={link.title}>
                                    <span>{link.text}</span>
                                  </Nav.Link>
                                </li>
                            ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="row justify-content-between items">
                <div className="col-md-auto col-12 item">
                    <nav className="footer-links">
                        <ul>
                            <li><Nav.Link to={props.conditions || "/"} as={Link} >Terms and Conditions</Nav.Link></li>
                            <li><Nav.Link to={props.privacy || "/" } as={Link} >Privacy Policy</Nav.Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-auto col-12 item">
                    <div className="copyright">© 2024 {props.title}. All rights reserved.</div>
                </div>
            </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer;