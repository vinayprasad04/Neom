import React from "react";
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
import {useParams} from "react-router-dom";
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
import SectionHeader from "../component/SectionHeader";
import EventCart from "../component/EventCart";

const imagesGallery = [Image120,Image118,Image122,Image121];
const eventDetailPage = getJson();


const EmotionList = ({rating}) =>{
      console.log("rating",rating);
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
  const Sucmsg = () =>{
    let el = document.getElementById('sucmsg')
    el.style= 'display:block'
  }
  return (
    <div>
      <Header />
      <main className="content event">
        <div class="eventAddReview" style={{display:'none'}}>
          <div class="container" id="sucmsg" style={{display:'none'}}>
            <div class="eventAddReview__card">
              <div>
                <h2 class="eventAddReview__card--title">Congratulations</h2>
                <p class="eventAddReview__card--subtitle">
                  Message goes her We are sure that you have enjoyed this event
                  a lot. Would you like to share your feedback with us.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                <div className="eventReserve__form">
                  <form>
                    <div className="eventReserve__form--title">
                      AED 1800 <span>per person</span>
                    </div>
                    <div className="eventReserve__form--date"></div>
                    <div className="form__flex--row">
                      <div className="s-form-floating">
                        <input
                          type="text"
                          className="s-form-control"
                          id="floatingFromInput"
                          value={eventData.Event_Start_Date}
                          readonly
                        />
                        <label for="floatingFromInput">From</label>
                      </div>
                      <div className="s-form-floating">
                        <input
                          type="text"
                          className="s-form-control"
                          id="floatingToInput"
                          value={eventData.Event_End_Date}
                          readonly
                        />
                        <label for="floatingToInput">To</label>
                      </div>
                    </div>
                    <div className="s-form-floating">
                      <select
                          className="s-form-select"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                      >
                        <option value="0">1 adult</option>
                        <option value="1">2 adult</option>
                        <option value="2">3 adult</option>
                        <option value="3">4 adult</option>
                      </select>
                      <label for="floatingSelectGrid">Guests</label>
                    </div>
                    <div className="eventReserve__form--seats">
                      {eventData.Seat_Booking_Availability} Seats still available
                    </div>
                    <button className="btn btn__black" onClick={Sucmsg}>Reserve my seats</button>
                    <ul className="guests__list">
                      <li className="guests__list--item">
                        <div className="guests">1800 x 1 adult</div>
                        <div className="price">1800</div>
                      </li>
                      <li className="guests__list--item">
                        <div className="guests">600 x 0 children</div>
                        <div className="price">0</div>
                      </li>
                    </ul>
                    <div className="total">
                      <div className="total__title">Total</div>
                      <div className="total__price">AED 1800</div>
                    </div>
                  </form>

                  <a href="#" className="eventReserve__form--help">
                    Need help?
                  </a>
                </div>
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
