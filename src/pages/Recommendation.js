import React, {useState, useEffect} from 'react';
import {
    Header,
    Footer,
    Banner
} from "../component/index.js";
import {Profile} from './../MockData';
import Recommendations from "../component/Recommendations";
import getJson from "../utils/eventDetailData";
import EventCart from "../component/EventCart";

const Recommendation = () =>{
    const recommendationsPage = getJson();
const [drive, setDrive] = useState();
const [distance, setDistance] = useState()
const [filterCards, setFilterCards] = useState(recommendationsPage.RecommendationData.Recommendation);

const cards = recommendationsPage.RecommendationData.Recommendation

  const slectedDrive = (driveFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.drive == driveFilter)
    setFilterCards(cardsFilterd)
    setDrive(driveFilter)
    setDistance(null)
  }
  const slectedWalkingDistance = (distanceFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.walking == distanceFilter)
    setFilterCards(cardsFilterd)
    setDistance(distanceFilter)
    setDrive(null);
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
    return(
        <>
        <Header/>
            <main className="content home recommendation--page">

                <div className="recommendations">
                    <div className="container">
                        <h2 className="recommendations__title">Hey {Profile[0].Customer_Name},</h2>
                        <div className="recommendations__subtitle">
                            <h3>Due to some bad weather your "Golf Tournament" event has been cancelled.</h3>
                            <h3> We have a similar event for you, starting just in an hour and 5 minutes drive
                                away.</h3>
                        </div>
                    </div>
                </div>
                <Banner/>


                <div className="recommendations">
                    <div className="container">
                        <h2 className="recommendations__title">Some similar recommendation for you, {Profile[0].Customer_Name}.</h2>

                        <div className="schedule">
                            <div className="time">
                                <ul className="time__list">
                                {recommendationsPage.FilterList.DistanceFilter.map((item, index) => {
                          return(
                            <li className={`time__list--item ${distance == item.title && 'active'}`} onClick={(()=> slectedWalkingDistance(item.title))}>{item.title}</li>
                          )
                        })}
                                </ul>

                                <ul className="time__list">
                                {recommendationsPage.FilterList.DriveFilter.map((item, index) => {
                          return(
                            <li className={`time__list--item ${drive == item.title && 'active'}`} onClick={(()=> slectedDrive(item.title))}>{item.title}</li>
                          )
                        })}
                                </ul>

                                <ul className="time__list">
                                    <li className="time__list--item border-rounded">No limits</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card__grid">
                        {
                filterCards.slice(0, 15).map((item, index)=>{
                  return(
                    <EventCart key={index} item={item}/>
                  )
                })
              }

                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Recommendation;
