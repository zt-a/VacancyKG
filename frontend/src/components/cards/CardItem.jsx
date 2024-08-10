import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const CardItem = ({image, date, title, content, to}) => {
  return (
    <article className="news-item item-style">
      <Nav.Link to={to} as={Link} className="news-item-img el">
        <img data-src={image} className="lazy" src={image} alt={title} data-loaded="true" />
      </Nav.Link>
      <div className="news-item-info">
        <div className="news-item-date">{date}</div>
        <h3 className="news-item-heading item-heading">
          <Nav.Link to={to} as={Link} title={title}>{title}</Nav.Link>
        </h3>
        <div className="news-item-desc">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default CardItem;