import React from 'react';
import EventCart from "./EventCart";

const Recommendations = (props) =>{
    const {Recommendation} = props;
    return(
        <div className="recommendations">
            <div className="container">
                <div className="recommendations__title">Some more recommendations for you, Shane!</div>
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
