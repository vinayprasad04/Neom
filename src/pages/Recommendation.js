import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    Header
} from "../component/index.js";
import {Profile,RecommendationBannerData} from './../MockData';
import getJson from "../utils/eventDetailData";
import EventCart from "../component/EventCart";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import AlertBooked from "../component/AlertBooked";
import CircleTimer from "./../component/CircleTimer";


const Recommendation = (props) =>{
    const { rCancelAlert, setRCancelAlert} = props;

    let location = useLocation().hash;
    const recommendationsPage = getJson();
    const cards = recommendationsPage.RecommendationData.Recommendation;
const [drive, setDrive] = useState();
const [distance, setDistance] = useState()
const [filterCards, setFilterCards] = useState(cards);
const [noLimit, setNoLimit] = useState(false);
const [alertBooked, setAlterBooked] = useState(false);

const [alertBookedData, setAlterBookedData] = useState({name:"",date:"",time:""});
const [reseduleWithJazz, setReseduleWithJazz] = useState(false);

  const slectedDrive = (driveFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.drive === driveFilter)
    setFilterCards(cardsFilterd)
    setDrive(driveFilter)
    setDistance(null)
      setNoLimit(false);
  }
  const slectedWalkingDistance = (distanceFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.drive === distanceFilter)
    setFilterCards(cardsFilterd)
    setDistance(distanceFilter)
    setDrive(null);
      setNoLimit(false);
  }
  const onAlertOpen = (e, name, date, time) =>{
      setAlterBookedData({name: name, date: date, time: time})
      setAlterBooked(true);
  }
  const onCancelAlert = () =>{
      setAlterBooked(false);
  }
  const onNoLimit = () =>{
      setNoLimit(true);
      setFilterCards(cards);
      setDrive(null);
      setDistance(null)
  }
  const onReseduleWithJazz = () =>{
      setAlterBooked(true);
      setReseduleWithJazz(true);
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
const bookedMsgFlash = rCancelAlert.crBookedAlert ||rCancelAlert.ReseduleWithJazzOut ? "Congratulations! Your Jazz  Event has been booked.":"As you have just rescheduled your \"Round of Golf\", we have found alternate events for you and one of them is just an hour and 5 minutes drive away.";
const cancelEventBannerData = (location !== "#confirmAlert" && rCancelAlert.crAlert) ? RecommendationBannerData.slice(1,3):RecommendationBannerData.slice(0,1);
    return(
        <>
            {alertBooked &&
            <AlertBooked reseduleWithJazz={reseduleWithJazz} onCancelAlert={onCancelAlert} rCancelAlert={rCancelAlert} setRCancelAlert={setRCancelAlert}
                heading={"Hi, Charlie"} eventName={alertBookedData.name}
                dec={`Please reserve your event. Have a great day ahead and enjoy!`}/>
            }
            {/*dec={`You have chosen a new ${alertBookedData.name} event on ${alertBookedData.date} at ${alertBookedData.time}. Have a great day ahead and enjoy your new ${alertBookedData.name}!`}*/}
        <Header {...props}/>
            <main className="content home recommendation--page">
                <div className="eventAddReview" style={{padding:"0"}}>
                    <div className="container">
                        <div className="eventAddReview__card">
                            <div>
                                <h2 className="eventAddReview__card--title">Hey {Profile[0].Customer_Name},</h2>
                                {location === "#confirmAlert" && <p className="eventAddReview__card--subtitle">
                                    As you plan to reschedule your Round Of Golf, here are some options.
                                </p>}
                                {location === "#cancelAlert" && <p className="eventAddReview__card--subtitle">
                                    You have just cancelled your "Round of Golf" event. We have found a few similar event for you against your today's cancelled event.
                                    And one of them is just starting in an hour and 5 minutes drive away.
                                </p>}
                                {location === "#bookedSeat" && <p className="eventAddReview__card--subtitle">
                                    {bookedMsgFlash}
                                   {/* and your slot is free, we have found alternate events for you.
                                    And one of them is just an hour and 5 minutes drive away.*/}
                                </p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="swiper mainbanner">
                            <div className={`swiper-wrapper ${(location === "#confirmAlert")? "rescheduleBannerNotification":""}`}>
                                <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={1} navigation autoplay={false}>
                                    { (location !== "#confirmAlert" && rCancelAlert.crAlert) ?
                                        RecommendationBannerData.slice(1,2).map(( item, index)=>{
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
                                                            <button onClick={(e)=>onAlertOpen(e, item.Event_Name, item.Event_Start_Date, item.Event_Start_Time)}>Yes, I am in</button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                        : location === "#bookedSeat" && !rCancelAlert.crBookedAlert ?
                                            RecommendationBannerData.slice(1,2).map(( item, index)=>{
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
                                                                <button onClick={onReseduleWithJazz}>Yes, I am in</button>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                            :
                                        RecommendationBannerData.slice(0,1).map(( item, index)=>{
                                            return(
                                                <SwiperSlide key={index}>
                                                    <img src={process.env.PUBLIC_URL + "./img/"+item.url} alt="event title"/>
                                                    <div className="banner__info">
                                                        <h2 className="banner__info__title">{item.Event_Name}</h2>
                                                        <div className="banner__info__location">{item.Event_Location}</div>
                                                        <div className="banner__info__date">{item.Event_Start_Date}</div>
                                                        <div className="banner__info__time">{item.Event_Start_Time}</div>
                                                       {/* <div className="banner__info__countdown">
                                                            <CircleTimer itemTime={item.Event_Start_Date}/>
                                                        </div>*/}
                                                        <div className="banner__info__link" style={{marginTop:"20px"}}>
                                                            <button onClick={(e)=>onAlertOpen(e, item.Event_Name, item.Event_Start_Date, item.Event_Start_Time)} style={{fontSize:"21px"}}>Reschedule</button>
                                                        </div>
                                                    </div>
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
                                    <li className={`time__list--item border-rounded ${noLimit ? "active":""}`} onClick={onNoLimit}>No limits</li>
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
