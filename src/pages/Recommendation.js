import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import { useLocation, Link } from 'react-router-dom';
import {
    Header,
    Banner
} from "../component/index.js";
import {Profile,RecommendationBannerData} from './../MockData';
import getJson from "../utils/eventDetailData";
import EventCart from "../component/EventCart";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import AlertBooked from "../component/AlertBooked";
import AlertMsg from "../component/AlertMsg";
import CircleTimer from "./../component/CircleTimer";


const Recommendation = () =>{
    let location = useLocation().hash;
    const recommendationsPage = getJson();
const [drive, setDrive] = useState();
const [distance, setDistance] = useState()
const [filterCards, setFilterCards] = useState(recommendationsPage.RecommendationData.Recommendation);
const [alertBooked, setAlterBooked] = useState(false);
const [alertBookedData, setAlterBookedData] = useState({name:"",date:"",time:""});

const cards = recommendationsPage.RecommendationData.Recommendation;

  const slectedDrive = (driveFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.drive === driveFilter)
    setFilterCards(cardsFilterd)
    setDrive(driveFilter)
    setDistance(null)
  }
  const slectedWalkingDistance = (distanceFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.walking === distanceFilter)
    setFilterCards(cardsFilterd)
    setDistance(distanceFilter)
    setDrive(null);
  }
  const onAlertOpen = (e, name, date, time) =>{
      setAlterBookedData({name: name, date: date, time: time})
      setAlterBooked(true);
  }
  const onCancelAlert = () =>{
      setAlterBooked(false);
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])

    return(
        <>
            {alertBooked &&
            <AlertBooked onCancelAlert={onCancelAlert}
                heading={"Hi, Charlie"}
                dec={`You have chosen a new ${alertBookedData.name} event on ${alertBookedData.date} at ${alertBookedData.time}. Have a great day ahead and enjoy your new ${alertBookedData.name}!`}/>
            }
        <Header/>
            <main className="content home recommendation--page">

                <div className="eventAddReview" style={{padding:"0"}}>
                    <div className="container">
                        <div className="eventAddReview__card">
                            <div>
                                <h2 className="eventAddReview__card--title">Hey {Profile[0].Customer_Name},</h2>
                                {location === "#confirmAlert" && <p className="eventAddReview__card--subtitle">
                                    We have a few similar event for you against your today's rescheduled event of "Round of Golf".
                                    And one of them is just starting in an hour and 5 minutes drive away.
                                </p>}
                                {location === "#cancelAlert" && <p className="eventAddReview__card--subtitle">
                                    You have just cancelled your "Round of Golf" event. We have found a few similar event for you against your today's cancelled event.
                                    And one of them is just starting in an hour and 5 minutes drive away.
                                </p>}
                                {location === "#bookedSeat" && <p className="eventAddReview__card--subtitle">
                                    As you have just rescheduled your "Round of Golf" event and your slot is free, we have found alternate events for you.
                                    And one of them is just an hour and 5 minutes drive away.
                                </p>}
                            </div>
                        </div>
                    </div>
                </div>

{/*                <div className="recommendations">
                    <div className="container">
                        <h2 className="recommendations__title">Hey {Profile[0].Customer_Name},</h2>
                        <div className="recommendations__subtitle">
                            <h3>Due to some bad weather your "Golf Tournament" event has been cancelled.</h3>
                            <h3> We have a similar event for you, starting just in an hour and 5 minutes drive
                                away.</h3>
                        </div>
                    </div>
                </div>*/}
                {/*<Banner/>*/}
                <div className="banner">
                    <div className="container">
                        <div className="swiper mainbanner">
                            <div className="swiper-wrapper">
                                <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={1} navigation autoplay={false}>
                                    {
                                        RecommendationBannerData.map(( item, index)=>{
                                            return(
                                                <SwiperSlide key={index}>
                                                    <img src={process.env.PUBLIC_URL + "./img/"+item.url} alt="event title"/>
                                                    <div className="banner__info">
                                                        <div className="banner__info__title">{item.Event_Name}</div>
                                                        <div className="banner__info__location">{item.Event_Location}</div>
                                                        <div className="banner__info__date">{item.Event_Start_Date} at {item.Event_Start_Time}</div>
                                                        <div className="banner__info__countdown">
                                                            <CircleTimer itemTime={item.Event_Start_Date}/>
                                                            {/*<div className="counter" id={"counterNew"} data-date={item.Event_Start_Date}></div>*/}
                                                        </div>
                                                        <div className="banner__info__link">
                                                            <Link onClick={(e)=>onAlertOpen(e, item.Event_Name, item.Event_Start_Date, item.Event_Start_Time)}>Yes, I am in</Link>
                                                        </div>
                                                    </div>
{/*                                                    {
                                                        ReactDOM.createPortal(
                                                            alertBooked ? <AlertBooked  heading={"Hi, Charlie"} dec={`You have chosen a new ${item.Event_Name} event on ${item.Event_Start_Date} at ${item.Event_Start_Time}. Have a great day ahead and enjoy your new ${item.Event_Name}!`}/>:"",
                                                            container
                                                    )}*/}

                                                </SwiperSlide>
                                            )
                                        })
                                    }

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recommendations">
                    <div className="container">
                        <h2 className="recommendations__title">Some similar recommendation for you, {Profile[0].Customer_Name}.</h2>
                        <div className="schedule">
                            <div className="time">
                                <ul className="time__list">
                                    {recommendationsPage.FilterList.DistanceFilter.map((item, index) => {
                                      return(
                                        <li className={`time__list--item ${distance === item.title && 'active'}`} onClick={(()=> slectedWalkingDistance(item.title))}>{item.title}</li>
                                      )
                                    })}
                                </ul>

                                <ul className="time__list">
                                    {recommendationsPage.FilterList.DriveFilter.map((item, index) => {
                                      return(
                                        <li className={`time__list--item ${drive === item.title && 'active'}`} onClick={(()=> slectedDrive(item.title))}>{item.title}</li>
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
