import Ini from "./Ini";


const Litem = ({litemList, title, subtitle, ...props}) => {
    return (
      <div className="row litems">
        {title || subtitle ?
          <header className="col-12">
            <div className="section-heading heading-center">
              <div className="section-subheading">{subtitle}</div>
              <h2>{title}</h2>
            </div> 
          </header>
          : <></>
        }
        {litemList.map((ini, index) => (
          <div className="col-lg-4 col-md-6 col-12 litem" key={index} {...props}>
            <Ini title={ini.title} content={ini.content} index={index}/>
          </div>
        ))}
      </div>
    )
}

export default Litem;