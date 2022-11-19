import React from 'react';
import EventCart from "./EventCart";
const Trending = (props) =>{
    const {Treading} = props;
    return(
        <div className="card__grid">
            {
                Treading?.map((item, index)=>{
                    return(
                        <EventCart key={index} item={item}/>
                        )
                })
            }
        </div>
    )
}

export default Trending;
