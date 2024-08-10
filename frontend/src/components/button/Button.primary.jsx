import cl from './Button.primary.module.css'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const ButtonPrimary = ({children, to, ...props}) => {
  const buttonClassName = `btn ${cl.btn_primary}`;

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
};

export default ButtonPrimary;