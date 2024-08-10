import React from 'react';
import cl from './Button.transparent.module.css'
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonTransparent = ({children, to, ...props}) => {
  const buttonClassName = `${cl.btn_trans}`;

  if (to) {
    return (
      <button className={buttonClassName} {...props}>
        <Nav.Link as={Link} to={to}> {children} </Nav.Link>
      </button>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default ButtonTransparent;