import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';

import {
  Header,
  Footer,
  Trending,
  SliderCard,
  EventSlider,
  useOpenWeather,
  RatingSlider,
  GallaryItems,
  // SimpleMap
} from "../component/index.js";
import Recommendations from "../component/Recommendations";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/eventDetailData";
import {useParams, Link} from "react-router-dom";
import {EventDetail as detail} from "../MockData";

import Image120 from './../assets/img/Image120.jpg';
import Image118 from './../assets/img/Image118.jpg';
import Image122 from './../assets/img/Image122.jpg';
import Image121 from './../assets/img/Image121.jpg';

import overwhelmed from './../assets/img/overwhelmed.svg';
import joy from './../assets/img/joy.svg';
import appreciation from './../assets/img/appreciation.svg';
import boredom from './../assets/img/boredom.svg';
import disappointed from './../assets/img/disappointed.svg';
import anger from './../assets/img/anger.svg';
import RatingValue from "../component/Rating";
import EventCart from "../component/EventCart";
import AddAReview from "../component/AddAReview";
import AddVivoMeaterReview from "../component/AddVivoMeaterReview";
import ThanksAlert from "../component/ThanksAlert";

const imagesGallery = [Image120,Image118,Image122,Image121];
const eventDetailPage = getJson();


const EmotionList = ({rating}) =>{
  return(
      <ul className="emotions__list">
        <li className={`emotions__list--item  ${rating>4 && 'active'}`}>
          <div className="emotion overwhelmed"></div>
          <img src={overwhelmed} alt="overwhelmed"/>
        </li>
        <li className={`emotions__list--item  ${rating<4 && 'active'}`}>
          <div className="emotion joy"></div>
          <img src={joy} alt="joy"/>
        </li>
        <li className={`emotions__list--item  ${rating<3.5 && 'active'}`}>
          <div className="emotion appreciation"></div>
          <img src={appreciation} alt="appreciation"/>
        </li>
        <li className={`emotions__list--item  ${rating<3 && 'active'}`}>
          <div className="emotion boredom"></div>
          <img src={boredom} alt="boredom"/>
        </li>
        <li className={`emotions__list--item  ${rating<2 && 'active'}`}>
          <div className="emotion disappointed"></div>
          <img src={disappointed} alt="disappointed"/>
        </li>
        <li className={`emotions__list--item  ${rating<1 && 'active'}`}>
          <div className="emotion anger"></div>
          <img src={anger} alt="anger"/>
        </li>
      </ul>
  )
}

const Cart = ({eventData,setSeatValue, alert, setAlert, onSelectSeat, onCancelAlert, Sucmsg}) =>{
/*  const [seatValue, setSeatValue] = useState(1);
  const [alert, setAlert] = useState(false);

  const onSelectSeat = (e) =>{
    setSeatValue(e.target.value);
  }
  const onCancelAlert = ()=>{
    setAlert(false);
  }
  const Sucmsg = () =>{
    setAlert(true);
  }*/
  return(
      <div className="eventReserve__form" >
        <form>
          <div className="eventReserve__form--title">
          {/*  AED 1800 <span>per person</span>*/}10:30AM - 7:30PM
          </div>
          <div className="eventReserve__form--date"></div>
          <div className="form__flex--row">
            <div className="s-form-floating">
              <input type="text" className="s-form-control" id="floatingFromInput" value={eventData.Event_Start_Date} readOnly/>
              <label htmlFor="floatingFromInput">From</label>
            </div>
            <div className="s-form-floating">
              <input type="text" className="s-form-control" id="floatingToInput" value={eventData.Event_End_Date} readOnly/>
              <label htmlFor="floatingToInput">To</label>
            </div>
          </div>
          <div className="s-form-floating">
            <select className="s-form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={onSelectSeat}>
              <option value="1">1 adult</option>
              <option value="2">2 adult</option>
              <option value="3">3 adult</option>
              <option value="4">4 adult</option>
            </select>
            <label htmlFor="floatingSelectGrid">Guests</label>
          </div>
          <div className="eventReserve__form--seats">
            {eventData.Seat_Booking_Availability} Seats still available
          </div>
          {!eventData.Client_Booked && <div className="btn btn__black" onClick={Sucmsg}>Reserve my seats</div>}
          <ul className="guests__list">
            {/*<li className="guests__list--item">
              <div className="guests">1800 x {seatValue} adult</div>
              <div className="price">{1800*seatValue}</div>
            </li>
            <li className="guests__list--item">
              <div className="guests">600 x 0 children</div>
              <div className="price">0</div>
            </li>*/}
          </ul>
         {/* <div className="total">
            <div className="total__title">Total</div>
            <div className="total__price">AED {1800*seatValue}</div>
          </div>*/}
        </form>
        <Link className="eventReserve__form--help">
          Need help?
        </Link>

      </div>
  )
}

const EventDetail = (props) => {
  const {id} = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [vivoMeaterModal, setVivoMeaterModal] = useState(false);

  const eventData = detail.find((event) => JSON.stringify(event.Event_ID) === id);
  const [eventAddReviewPanel, setEventAddReviewPanel] = useState(eventData.Client_Booked);

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "edb174adcaf962338a5b74bbb3498eb1",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric",
  });
  function openModal() {
    let el = document.getElementById('modal')
    el.style = 'display:block'
  }
  function closeModal() {
    let el = document.getElementById('modal')
    el.style = 'display:none';
  }
  const setRecSlider = () => {
    let wWidth = window.innerWidth,
        cWidth = document.querySelector('.header .container').offsetWidth,
        marg = (wWidth - cWidth) / 2,
        recSlider = document.querySelectorAll(".recSlider");
    if (wWidth > 767) {
      recSlider.forEach((item) => {
        item.style.margin = '0px';
        item.style.marginLeft = marg + 'px';
      })
    }
    else {
      recSlider.forEach((item) => {
        item.style.margin = '0 16px';
      })
    }
  }
  useEffect(() => {
    window.addEventListener('resize', setRecSlider);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    setRecSlider();
  },[])

  const [seatValue, setSeatValue] = useState(1);
  const [alert, setAlert] = useState(false);

  const onSelectSeat = (e) =>{
    setSeatValue(e.target.value);
  }
  const onCancelAlert = ()=>{
    setAlert(false);
  }
  const Sucmsg = () =>{
    setAlert(true);
  }

  return (
    <div>
      <ThanksAlert alert={alert} onCancel={onCancelAlert}/>
      <Header {...props}/>
      <main className="content event" id={"eventDetail"}>
        {eventAddReviewPanel && <div className="eventAddReview">
          <div className="container">
            <div className="eventAddReview__card">
              <div>
                <h2 className="eventAddReview__card--title">Hey Charlie,</h2>
                <p className="eventAddReview__card--subtitle">We are sure that you have enjoyed this event a lot. Would you like to share your feedback with us.</p>
                <p className="eventAddReview__card--subtitle">It helps us to improve and serve you better.</p>
              </div>
              <button className="btn__black" id="modalBtn" onClick={openModal}>Add a review</button>
              <AddAReview closeModal={closeModal} vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>
              {vivoMeaterModal && <AddVivoMeaterReview vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal} setEventAddReviewPanel={setEventAddReviewPanel}/>}
            </div>
          </div>
        </div>}
        <div className={`eventDetails  ${eventAddReviewPanel ?"p-0":""}`}>
          <div className="container">
              <h2 className="eventDetails__title">{eventData.Event_Name}</h2>
              <div className="eventDetails__review">
                <RatingValue readOnly={true} fillColor={"#FF385C"} initialValue={eventData.Overall_Event_Rating.toFixed(1)}/>
                <div className="review">{eventData.Overall_Event_Rating.toFixed(1)}<span>23 reviews</span></div>
                <div className="location">{eventData.Event_Location}</div>
              </div>

            <GallaryItems imagesGallery={eventData} status={eventData.Event_Status} />
          </div>
        </div>
        <div className="eventReserve">
          <div className="container">
            <div className="eventReserve__grid">
              <div className="eventReserve__grid--col">
               {/* <div className="event__meter">
                  <h4 className="event__reserve--title">
                    Vibe-o-meter of the event
                  </h4>
                  <EmotionList rating={eventData.Overall_Event_Rating}/>
                </div>*/}
                <div className="event__description">
                  <h4 className="event__reserve--title">About the event</h4>
                  <ul className="event__description--list">
                    <li className="event__description--list-item">
                      <div className="icon icon-category"></div>
                      <div className="description-details">
                        <h5>Golf</h5>
                        <p>
                          This is one of the many events comes under the Golf
                          category.
                        </p>
                      </div>
                    </li>
                    <li className="event__description--list-item">
                      <div className="icon icon-location"></div>
                      <div className="description-details">
                        <h5>Great location</h5>
                        <p>
                        Every guest has given a five star rating to this location.
                        </p>
                      </div>
                    </li>
                    <li className="event__description--list-item">
                      <div className="icon">
                        <img
                          src={overwhelmed}
                          alt="overwhelmed"
                        />
                      </div>
                      <div className="description-details">
                        <h5>Invigorating & uplifting experience</h5>
                        <p>
                        This event has a rating of 5.0 that make this event overwhelmed.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="event__description--content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elit.
                    </p>
                  </div>
                </div>
                <div className="event__review">
                  <h4 className="event__reserve--title">Operator River Stone {eventData.Operator_Name}</h4>
                  <div className="event__review--row">
                    <div className="rating"><RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={eventData.Operator_Rating.toFixed(1)}/></div>
                    <div className="review">{eventData.Operator_Rating.toFixed(1)}</div>
                  </div>
                  <div className="event__description--content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="eventReserve__grid--col flex__order--1">
                <Cart eventData={eventData} Sucmsg={Sucmsg} onCancelAlert={onCancelAlert} onSelectSeat={onSelectSeat} alert={alert} setAlert={setAlert} setSeatValue={setSeatValue}/>
              </div>
            </div>
          </div>
        </div>
        <RatingSlider {...eventDetailPage.RatingSliderCardData} />
        <div className="recommendations event--recommendations">
          <div className="container">
            <h2 className="recommendations__title">Some more recommendations for you, Charlie!</h2>
            <div className="card__grid">
              {
                eventDetailPage.RecommendationData.Recommendation.slice(0,10).map((item, index)=>{
                  return(
                      <EventCart key={index} item={item}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
