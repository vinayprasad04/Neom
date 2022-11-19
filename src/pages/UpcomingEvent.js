import React, {useEffect, useState} from "react";

import {
  Header,
  Footer,
} from "../component/index.js";

import "photoswipe/dist/photoswipe.css";


import getJson from "../utils/eventDetailData";
import EventCart from "../component/EventCart";
import { filter, height } from "dom7";
const eventDetailPage = getJson();
const itemPerRow = 15;
let totalFilters = []
const UpcomingEvent = (props) => {
  const [next, setNext] = useState(itemPerRow);
  const [filterItem, setItemFilter ] = useState()
  const [drive, setDrive] = useState()
  const [distance, setDistance] = useState()
  const [location, setLocation] = useState()
  const [date, setDate] = useState()
  const cards = eventDetailPage.RecommendationData.Recommendation
const [filterCards, setFilterCards] = useState(eventDetailPage.RecommendationData.Recommendation.slice(0, next));

const selectedFilter = (filter) =>{
    // totalFilters.push(filter)
    setDrive(null)
    setItemFilter(filter)
    let cardsFilterd = cards.filter((item)=>item.category == filter)
    setFilterCards(cardsFilterd)
    setNext(100)
  }
  const slectedDrive = (driveFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.drive == driveFilter)
    setFilterCards(cardsFilterd)
    setNext(100)
    setItemFilter(null)
    setDrive(driveFilter)
    setDistance(null)
  }
  const slectedWalkingDistance = (distanceFilter) =>{
    let cardsFilterd = cards.filter((item)=>item.drive == distanceFilter)
    setFilterCards(cardsFilterd)
    setDistance(distanceFilter)
    setNext(100)
    setItemFilter(null)
    setDrive(null)
  }

  const handleChnage = (newValue) =>{
    const nValue = newValue.target.value
    setLocation(nValue)
    let cardsFilterd = cards.filter((item)=>item.location == location)
    setFilterCards(cardsFilterd)
    setDistance(null)
    setNext(100)
    setItemFilter(null)
    setDrive(null)
  }
  const handleMoreItem = () => {
    setNext(next + itemPerRow);
  };
  const noLimit = () =>{
    let cardsFilterd = cards.filter((item)=>item.location == location)
    setFilterCards(cardsFilterd)
    setDistance(null)
    setNext(100)
    setItemFilter(null)
    setDrive(null)
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <Header active={"upcomingevent"}/>
      <main className="content event">
        <div className="recommendations">
          <div className="container">
            <h2 className="recommendations__title">Hey Charlie,</h2>
            <h3 className="recommendations__subtitle">Let's find something exiting for you.</h3>
            <button className="filter btn btn__black">Filters</button>
            <div className="filterWrap">
              <div className="filterWrap__title">Filters <button className="filterWrap__close closeFilter">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  y="0px" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88" enableBackground="new 0 0 122.881 122.88">
                        <g>
                            <path
                                d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z">
                            </path>
                        </g>
                    </svg>
              </button></div>
              <div className="filterWrap__content">
                <div className="schedule">
                  <div>
                    <form>
                    <div className="schedule__title">What suits your schedules?</div>
                    <div className="schedule__input">
                      <div className="schedule__input--fields datepicker">
                        <span className="icon icon-calendar"></span>
                        <input type="date"/>
                      </div>
                      <div className="schedule__input--fields locationpicker">
                        {/* <span className="icon icon-location"></span>
                        <input type="text" placeholder="Pick a location" onChange={handleChnage}/> */}
                        <select value={location} onChange={handleChnage} style={{width:'265px', height:'50px', border:'0', backgroundColor:'transparent', fontSize:'16px'}}>
                        <option value="">Select Location</option>
                        <option value="Location One">Location One</option>
                        <option calue="Location Two">Location Two</option>
                        <option Location One="Location Three">Location Three</option>
                        </select>
                      </div>
                    </div>
                    </form>
                  </div>

                  <div>
                    <div className="schedule__title">How far are you willing to travel?</div>
                    <div className="time">
                      <ul className="time__list">
                        {eventDetailPage.FilterList.DistanceFilter.map((item, index) => {
                          return(
                            <li className={`time__list--item ${distance == item.title && 'active'}`} onClick={(()=> slectedWalkingDistance(item.title))}>{item.title}</li>
                          )
                        })}
                      </ul>

                      <ul className="time__list">
                        {eventDetailPage.FilterList.DriveFilter.map((item, index) => {
                          return(
                            <li className={`time__list--item ${drive == item.title && 'active'}`} onClick={(()=> slectedDrive(item.title))}>{item.title}</li>
                          )
                        })}
                      </ul>

                      <ul className="time__list">
                        <li className="time__list--item border-rounded" onClick={(()=> noLimit())}>No limits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <div className="category__title">You can always filter out the events by category wise.</div>
                  <ul className="category__list">
                    {eventDetailPage.FilterList.Filter.map((item, index) => {
                      return(
                   <li key={index} className={`category__list--item  ${filterItem == item.title  && 'active'}`} onClick={(()=> selectedFilter(item.title))}>{item.title}</li>
                    )})}
                  </ul>
                </div>
              </div>
              <div className="filterWrap__apply">
                <button className="btn closeFilter">Apply</button>
              </div>
            </div>
            <div className="card__grid">
              {
                filterCards.map((item, index)=>{
                  return(
                    <EventCart key={index} item={item}/>
                  )
                })
              }
              {/* {
                filterCards.map((item, index)=>{
                   return totalFilters.length ? totalFilters.map((filter, index)=>{
                  return(
                      (filter == item.category) ? <EventCart key={index} item={item}/> :  null
                  )
                }) : (drive == item.drive ) ? <EventCart key={index} item={item}/> : null
                })
              } */}
            </div>
          </div>
        </div>

        <div className="recommendations__more">
        {next < eventDetailPage.RecommendationData.Recommendation?.length && (
          <button className="btn btn__black" onClick={handleMoreItem}>Load more</button>
          )}
        </div>

      </main>
    </div>
  );
};

export default UpcomingEvent;
