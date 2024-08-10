import React from "react";
import ButtonTransparent from "../button/Button.transparent";

const Banner = ({intro, title, subtitle, content, btn1, btn2}) => {
  const backgroundImage = `url(${intro})`;
    return (
      <div className="section-bgc intro" style={{width: '100vw'}}>
				<div className="intro-item intro-item-type-1" style={{ backgroundImage }} >
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="intro-content" style={{marginLeft: "4rem"}}>
									<div className="section-heading shm-none">
										<div className="section-subheading">{subtitle}</div>
										<h1>{title}</h1>
										<p className="section-desc">
                      {content}
                    </p>
									</div>
									<div className="btn-group intro-btns">
										<ButtonTransparent to={btn1.link} style={{padding: '3% 10%'}}>
                        {btn1.name}
                    </ButtonTransparent>
										<ButtonTransparent to={btn2.link} style={{padding: '3% 10%'}}>
                        {btn2.name}
                    </ButtonTransparent>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}

export default Banner;