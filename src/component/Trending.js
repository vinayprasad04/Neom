import React from 'react';
import EventCart from "./EventCart";
import {Treading} from './../MockData';

const Trending = () =>{
    return(
        <div className="trending">
            <div className="container">
                <div className="trending__title">Top 5 activities on this island today</div>
                <div className="card__grid">
                    {
                        Treading.map((item, index)=>{
                            return(
                                <EventCart key={index} item={item}/>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Trending;
