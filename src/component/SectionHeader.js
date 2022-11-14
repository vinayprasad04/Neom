import React from "react";

const SectionHeader = (props) =>{
    return(<>
            {props.heading && <h2 className="recSlider__title">
                {props.heading}
            </h2>}
            {props.desc && <div className="recSlider__subtitle">{props.desc}</div>}
        </>
    )
}
export default SectionHeader
