import CardItem from "./CardItem";

const CardItemList = ({title, subtitle, cards}) => {
  return (
    <div className="row items">
      {title || subtitle 
      ?
      <header className="col-12">
        <div className="section-heading heading-center">
          <div className="section-subheading">{subtitle}</div>
          <h2>{title}</h2>
        </div> 
      </header>
      : <></>
      }
      {cards.map((card, index) => (
        <div className="col-lg-4 col-md-6 col-12 item" key={index}>
          <CardItem {...card} />
        </div>
      ))}
    </div>
  )
}

export default CardItemList;