const CardFeedback = ({image, username, typeUser, content}) => {
  return (
    <div className="reviews-item item-style">
      <div className="reviews-item-header">
        <div className="reviews-item-img">
          <img data-src={image} className="img-cover lazy" src={Image} alt={username} data-loaded="true" />
        </div>
        <div className="reviews-item-info">
          <h4 className="reviews-item-name item-heading">{username}</h4>
          <div className="reviews-item-position">{typeUser}</div>
        </div>
      </div>
      <div className="reviews-item-text">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default CardFeedback;