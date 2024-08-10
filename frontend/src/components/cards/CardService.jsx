import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardService = ({title, content, icon, to="#!"}) => {
  return (
      <div className="col-lg-4 col-md-6 col-12 item">
        <Nav.Link to={to} as={Link} className="iitem item-style iitem-hover">
          <div className="iitem-icon">
            <i className="material-icons material-icons-outlined md-48">{icon}</i>
          </div>
          <div className="iitem-icon-bg">
            <i className="material-icons material-icons-outlined">{icon}</i>
          </div>
          <h3 className="iitem-heading item-heading-large">{title}</h3>
          <div className="iitem-desc">
            {content}
          </div>
        </Nav.Link>
      </div>
    )
}

export default CardService;