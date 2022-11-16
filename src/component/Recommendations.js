import React from 'react';
import EventCart from "./EventCart";
import SectionHeader from "./SectionHeader";

const Recommendations = (props) =>{
    const {Recommendation, heading, desc} = props;
    return(
        <div className="recommendations">
            <div className="container">
                <SectionHeader heading={heading} desc={desc}/>
                <div className="card__grid">
                    {
                        Recommendation.map((item, index)=>{
                            return(
                                <EventCart key={index} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommendations;
