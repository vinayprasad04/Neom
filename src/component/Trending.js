import React from 'react';
import EventCart from "./EventCart";
// import {Treading} from './../MockData';
const Trending = (props) =>{
    const {Treading, heading, headingNew} = props;
    return(
        <div className="trending">
            <div className="container">
                <div className="trending__title">{headingNew||heading}</div>
                <div className="card__grid">
                    {
                        Treading?.map((item, index)=>{
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
