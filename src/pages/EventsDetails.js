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
const eventDetailPage = getJson();

const EventDetail = (props) => {
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
        <div class="eventAddReview">
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
        <div class="eventDetails p-0">
          <div class="container">
            <div class="eventDetails__title">Men's Golf League</div>

            <div class="eventDetails__review">
              <div class="rating"></div>
              <div class="review">
                5.0 <span>23 reviews</span>
              </div>
              <div class="location">Sindalah City, Dubai</div>
            </div>
            <GallaryItems {...eventDetailPage.PhotoGallaryData} />
          </div>
        </div>

        <div class="eventReserve">
          <div class="container">
            <div class="eventReserve__grid">
              <div class="eventReserve__grid--col flex__order--2">
                <div class="event__meter">
                  <h4 class="event__reserve--title">
                    Vibe-o-meter of the event
                  </h4>
                  <ul class="emotions__list">
                    <li class="emotions__list--item active">
                      <div class="emotion overwhelmed"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/overwhelmed.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion joy"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/joy.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion appreciation"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/appreciation.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion boredom"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/boredom.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion disappointed"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/disappointed.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion anger"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/anger.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                  </ul>
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
                          src={process.env.PUBLIC_URL + "./img/overwhelmed.svg"}
                          alt=""
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
                  <h4 class="event__reserve--title">Operated by River Stone</h4>
                  <div class="event__review--row">
                    <div class="rating"></div>
                    <div class="review">4.9</div>
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
              <div class="eventReserve__grid--col flex__order--1">
                <div class="eventReserve__form">
                  <form>
                    <div class="eventReserve__form--title">
                      AED 1800 <span>per person</span>
                    </div>
                    <div class="eventReserve__form--date"></div>
                    <div class="form__flex--row">
                      <div class="s-form-floating">
                        <input
                          type="text"
                          class="s-form-control"
                          id="floatingFromInput"
                        />
                        <label for="floatingFromInput">From</label>
                      </div>
                      <div class="s-form-floating">
                        <input
                          type="text"
                          class="s-form-control"
                          id="floatingToInput"
                        />
                        <label for="floatingToInput">To</label>
                      </div>
                    </div>
                    <div class="s-form-floating">
                      <select
                        class="s-form-select"
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
                    <div class="eventReserve__form--seats">
                      172 Seats still available
                    </div>
                    <button class="btn btn__black" onClick={Sucmsg}>Reserve my seats</button>
                    <ul class="guests__list">
                      <li class="guests__list--item">
                        <div class="guests">1800 x 1 adult</div>
                        <div class="price">1800</div>
                      </li>
                      <li class="guests__list--item">
                        <div class="guests">600 x 0 children</div>
                        <div class="price">0</div>
                      </li>
                    </ul>
                    <div class="total">
                      <div class="total__title">Total</div>
                      <div class="total__price">AED 1800</div>
                    </div>
                  </form>

                  <a href="#" class="eventReserve__form--help">
                    Need help?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Trending /> */}
        <RatingSlider {...eventDetailPage.RatingSliderCardData} />

        <Recommendations
          {...eventDetailPage.RecommendationData}
          showHeartIcon={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
