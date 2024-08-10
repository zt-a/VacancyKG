import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BreadCrumbs = ({ url }) => {
  // Разбиваем URL на массив путей и удаляем пустые элементы
  const paths = url.split('/').filter(Boolean);

  return (
    <nav className="bread-crumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="bread-crumbs-list">
              <li>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <i className="material-icons md-18">chevron_right</i>
              </li>

              {paths.map((path, index) => (
                <React.Fragment key={index}>
                  <li>
                    <Nav.Link as={Link} to={`/${paths.slice(0, index + 1).join('/')}`}>
                      {path}
                    </Nav.Link>
                    {index < paths.length - 1 && (
                      <i className="material-icons md-18">chevron_right</i>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BreadCrumbs;
