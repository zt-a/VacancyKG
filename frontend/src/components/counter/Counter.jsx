const Counter = ({num, info, icon}) => {
    return (
      <div className="counter-min">
        <div className="counter-min-block">
          <div className="counter-min-ico">
            <i className="material-icons material-icons-outlined md-36">{icon}</i>
          </div>
          <div className="counter-min-numb spincrement" data-from="0" data-to={num} style={{opacity: 1}}>{num}</div>
        </div>
        <div className="counter-min-info">
          <h4 className="counter-min-heading">{info}</h4>
        </div>
      </div>
    )

}

export default Counter;