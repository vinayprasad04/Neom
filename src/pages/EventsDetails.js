import React, {useState} from "react";
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
import { eventDetailImage } from "../MockData.js";
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

const Cart = ({eventData}) =>{
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
    setTimeout(()=>{
      setAlert(false);
    },3000)
  }
  return(
      <div className="eventReserve__form" >
        <div className={`alert ${alert && "open"}`}>
          <div className="left">
            <h2>Success!</h2>
            <p>your data successfully submit</p>
          </div>
          <svg onClick={onCancelAlert} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88" enable-background="new 0 0 122.881 122.88"><g><path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z"></path></g></svg>
        </div>
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
          <div className="btn btn__black" onClick={Sucmsg}>Reserve my seats</div>
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

  const eventData = detail.find((event) => JSON.stringify(event.Event_ID) === id);
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "edb174adcaf962338a5b74bbb3498eb1",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric",
  });

  return (
    <div>
      <Header />
      <main className="content event" id={"eventDetail"}>
        <div class="eventDetails">
          <div class="container">
              <h2 className="eventDetails__title">{eventData.Event_Name}</h2>
            <div className="eventDetails__review">
              <RatingValue readOnly={true} initialValue={eventData.Overall_Event_Rating}/>
              <div className="review">{eventData.Overall_Event_Rating}<span>23 reviews</span></div>
              <div className="location">{eventData.Event_Location}</div>
            </div>

            <GallaryItems imagesGallery={imagesGallery} status={eventData.Event_Status} />
          </div>
        </div>
        <div class="eventReserve">
          <div class="container">
            <div class="eventReserve__grid">
              <div class="eventReserve__grid--col">
                <div class="event__meter">
                  <h4 class="event__reserve--title">
                    Vibe-o-meter of the event
                  </h4>
                  <EmotionList rating={eventData.Overall_Event_Rating}/>
                </div>
                <div class="event__description">
                  <h4 class="event__reserve--title">About the event</h4>
                  <ul class="event__description--list">
                    <li class="event__description--list-item">
                      <div class="icon icon-category"></div>
                      <div class="description-details">
                        <h5>Golf</h5>
                        <p>
                          This is one of the many events comes under the Golf
                          category.
                        </p>
                      </div>
                    </li>
                    <li class="event__description--list-item">
                      <div class="icon icon-location"></div>
                      <div class="description-details">
                        <h5>Great location</h5>
                        <p>
                          This is one of the many events comes under the Golf
                          category.
                        </p>
                      </div>
                    </li>
                    <li class="event__description--list-item">
                      <div class="icon">
                        <img
                          src={overwhelmed}
                          alt="overwhelmed"
                        />
                      </div>
                      <div class="description-details">
                        <h5>Overwhelmed experience</h5>
                        <p>
                          This event has a rating of 5.0 that make this event
                          overwhelmed.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div class="event__description--content">
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
                <div class="event__review">
                  <h4 class="event__reserve--title">Operated by {eventData.Operator_Name}</h4>
                  <div class="event__review--row">
                    <div class="rating"><RatingValue readOnly={true} initialValue={eventData.Operator_Rating}/></div>
                    <div class="review">{eventData.Operator_Rating}</div>
                  </div>
                  <div class="event__description--content">
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
                <Cart eventData={eventData}/>
              </div>
            </div>
          </div>
        </div>
        {/* <Trending /> */}
        <RatingSlider {...eventDetailPage.RatingSliderCardData} />

{/*        <Recommendations
          {...eventDetailPage.RecommendationData}
          showHeartIcon={true}
        />*/}
        <div className="recommendations event--recommendations">
          <div className="container">
            <h2 className="recommendations__title">Some more recommendations for you, Charlie!</h2>
            <div className="card__grid">
              {
                eventDetailPage.RecommendationData.Recommendation.map((item, index)=>{
                  return(
                      <EventCart key={index} item={item}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
