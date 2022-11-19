import React, {useState} from 'react';
import EventCart from "./EventCart";
import SectionHeader from "./SectionHeader";

const Recommendations = (props) =>{
    const {Recommendation, heading, desc} = props;
    const [evnetData, setEventData] = useState(Recommendation);
    const onRemoveItem = (e, item) =>{
        const filteredData = evnetData.filter((person) => person.favorites_Id !== item)
        setEventData(filteredData);
    }
    return(
        <div className="recommendations">
            <div className="container">
                <SectionHeader heading={"Good morning Charlie!"} desc={`You have short listed ${evnetData.length} events to join later.`}/>
                <div className="card__grid">
                    {
                        evnetData.map((item, index)=>{
                            return(
                                <EventCart key={index} item={item} setEventData={setEventData} onRemoveItem={onRemoveItem}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommendations;
