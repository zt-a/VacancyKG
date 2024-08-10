const Ini = ({title, content, index}) => {
  return (
    <div className="ini">
      <div className="ini-count">{index}</div>
      <div className="ini-info">
        <h3 className="ini-heading item-heading-large">{title}</h3>
        <div className="ini-desc">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Ini;