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

const UpcomingEvent = (props) => {
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
        <div className="recommendations p-0">
          <div className="container">
            <h2 className="recommendations__title">Hey Charlie,</h2>
            <h3 className="recommendations__subtitle">Let's find something exiting for you.</h3>

            <div className="schedule">
              <div>
                <div className="schedule__title">What suits your schedules?</div>
                <div className="schedule__input">
                  <div className="schedule__input--fields datepicker">
                    <span className="icon icon-calendar"></span>
                    <input type="date"/>
                  </div>
                  <div className="schedule__input--fields locationpicker">
                    <span className="icon icon-location"></span>
                    <input type="text" placeholder="Pick a location"/>
                  </div>
                </div>
              </div>

              <div>
                <div className="schedule__title">How far are you willing to travel?</div>
                <div className="time">
                  <ul className="time__list">
                    <li className="time__list--item">10 mins walking</li>
                    <li className="time__list--item active">20 mins walking</li>
                    <li className="time__list--item">30 mins walking</li>
                  </ul>

                  <ul className="time__list">
                    <li className="time__list--item">10 mins drive</li>
                    <li className="time__list--item active">20 mins drive</li>
                    <li className="time__list--item">30 mins drive</li>
                  </ul>

                  <ul className="time__list">
                    <li className="time__list--item border-rounded">No limits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="category">
              <div className="category__title">You can always filter out the events by category wise.</div>
              <ul className="category__list">
                <li className="category__list--item">Stand Up Comedy</li>
                <li className="category__list--item">RAMP Walk</li>
                <li className="category__list--item">Box Cricket</li>
                <li className="category__list--item">Swimming</li>
                <li className="category__list--item active">Golf Tournament</li>
                <li className="category__list--item">Singing</li>
                <li className="category__list--item">Talks Shows</li>
                <li className="category__list--item">Kite Surfing</li>
                <li className="category__list--item">Book Exhibitions</li>
              </ul>
            </div>
          </div>
        </div>

        <Recommendations
          {...eventDetailPage.RecommendationData}
          showHeartIcon={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default UpcomingEvent;
