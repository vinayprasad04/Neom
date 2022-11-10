import React from 'react';
import EventCart from "./EventCart";
import {RecommendationData} from './../MockData';

const Recommendations = () =>{
    return(
        <div className="recommendations">
            <div className="container">
                <div className="recommendations__title">Some more recommendations for you, Shane!</div>
                <div className="card__grid">
                    {
                        RecommendationData.map((item, index)=>{
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
