import React from 'react';
import EventCart from "./EventCart";
import SectionHeader from "./SectionHeader";

const Recommendations = (props) =>{
    const {Recommendation, heading, desc} = props;
    return(
        <div className="recommendations">
            <div className="container">
                <SectionHeader heading={heading} desc={desc}/>
                {/*<h2 className="recommendations__title">Some more recommendations for you, Shane!</h2>*/}
                <div className="card__grid">
                    {
                        Recommendation.map((item, index)=>{
                            return(
                                <EventCart key={index} item={item}/>
                            )
                        })
                    }
                </div>
                <div className="recommendations__more">
                    <button className="btn btn__black">Load more</button>
                </div>
            </div>
        </div>
    )
}

export default Recommendations;
