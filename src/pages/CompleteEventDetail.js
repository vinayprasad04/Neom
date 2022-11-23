import React from "react";

import {
  Header,
  useOpenWeather,
  RatingSlider,
  GallaryItems
  // SimpleMap
} from "../component/index.js";
import Recommendations from "../component/Recommendations";

import "photoswipe/dist/photoswipe.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/eventDetailData";


const eventDetailPage = getJson();

const CompleteEventDetail = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
   let el = document.getElementById('modal')
    el.style = 'display:block'
  }
  function closeModal() {
    let el = document.getElementById('modal')
     el.style = 'display:none'
   }
  return (
    <div>
      <Header {...props}/>
      <main className="content event">
      <div className="eventAddReview">
            <div className="container">
                <div className="eventAddReview__card">
                    <div>
                        <h2 className="eventAddReview__card--title">Hey Charlie,</h2>
                        <p className="eventAddReview__card--subtitle">We are sure that you have enjoyed this event a lot.
                            Would you like to share your feedback with us.</p>
                        <p className="eventAddReview__card--subtitle">It helps us to improve and serve you better.</p>
                    </div>

                    <button className="btn__black" id="modalBtn" onClick={openModal}>Add a review</button>
                    <div id="modal" className="modal" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close">
                                    <img src={process.env.PUBLIC_URL + "./img/close.svg"} alt="Close" onClick={closeModal}/>
                                    {/* <svg version="1.1" id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88"
                                        enable-background="new 0 0 122.881 122.88" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z" />
                                        </g>
                                    </svg> */}

                                </span>
                                <h2>Add a review</h2>
                            </div>
                            <div className="modal-body">
                                <p>Hi Charlie, If you're here on this page, we bet you enjoy this event fully. Would you
                                    mind to share your valuable feedback review with us?</p>
                                 {/* <div className="modal-image">
                                <img src="./assets/img/vibe-o-meter.svg" alt="">
                            </div>  */}
                                <div className="card">
                                    <div className="card__info">
                                        <div className="card__info--image">
                                            <img src={process.env.PUBLIC_URL + "./img/trending1.jpg"} alt="" />
                                        </div>
                                        <div className="card__info--details">
                                            <h4>Men's Golf League</h4>
                                            <p>Nov 10-29</p>
                                        </div>
                                    </div>
                                    <div className="card__review">
                                        <div className="rating"></div>
                                        <div className="review"><span>5.0</span>(23 reviews)</div>
                                    </div>
                                </div>
                                <div className="ratings__row">
                                    <div className="ratings__row--item">
                                        <div className="ratings--title">Quality of Event</div>
                                        <div className="rating"></div>
                                    </div>
                                    <div className="ratings__row--item">
                                        <div className="ratings--title">Services at Event</div>
                                        <div className="rating"></div>
                                    </div>
                                </div>
                                <div className="ratings__row">
                                    <div className="ratings__row--item">
                                        <div className="ratings--title">Facilities of Event</div>
                                        <div className="rating"></div>
                                    </div>
                                    <div className="ratings__row--item">
                                        <div className="ratings--title">Operator of Event</div>
                                        <div className="rating"></div>
                                    </div>
                                </div>
                                <div className="ratings__row">
                                    <div className="ratings__row--item">
                                        <div className="ratings--title">Staff Politeness</div>
                                        <div className="rating"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="form__group">
                                    <textarea name="" id="" rows="5"
                                        placeholder="Share your feedback and suggestions about this event..."></textarea>
                                </div>
                                <button className="btn btn__black">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="eventDetails p-0">
          <div className="container">
            <div className="eventDetails__title">Men's Golf League</div>

            <div className="eventDetails__review">
              <div className="rating"></div>
              <div className="review">
                5.0 <span>23 reviews</span>
              </div>
              <div className="location">Sindalah Island</div>
            </div>
            <GallaryItems {...eventDetailPage.PhotoGallaryData} />
          </div>
        </div>

        <div className="eventReserve">
          <div className="container">
          <div className="eventReserve__grid">
                <div className="eventReserve__grid--col flex__order--2">
                    <div className="event__meter">
                        <h4 className="event__reserve--title">Vibe-o-meter of the event</h4>
                        <ul className="emotions__list">
                    <li className="emotions__list--item active">
                      <div className="emotion overwhelmed"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/overwhelmed.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li className="emotions__list--item">
                      <div className="emotion joy"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/joy.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li className="emotions__list--item">
                      <div className="emotion appreciation"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/appreciation.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li className="emotions__list--item">
                      <div className="emotion boredom"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/boredom.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li className="emotions__list--item">
                      <div className="emotion disappointed"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/disappointed.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li className="emotions__list--item">
                      <div className="emotion anger"></div>
                      <img
                        src={process.env.PUBLIC_URL + "./img/anger.svg"}
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                  </ul>
                    </div>
                    <div className="event__description">
                        <h4 className="event__reserve--title">About the event</h4>
                        <ul className="event__description--list">
                            <li className="event__description--list-item">
                                <div className="icon icon-category"></div>
                                <div className="description-details">
                                    <h5>Golf</h5>
                                    <p>This is one of the many events comes under the Golf category.</p>
                                </div>
                            </li>
                            <li className="event__description--list-item">
                                <div className="icon icon-location"></div>
                                <div className="description-details">
                                    <h5>Great location</h5>
                                    <p>This is one of the many events comes under the Golf category.</p>
                                </div>
                            </li>
                            <li className="event__description--list-item">
                                <div className="icon"><img src={process.env.PUBLIC_URL + "./img/overwhelmed.svg"} alt="" /></div>
                                <div className="description-details">
                                    <h5>Overwhelmed experience</h5>
                                    <p>This event has a rating of 5.0 that make this event overwhelmed.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="event__description--content">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                        </div>
                    </div>
                    <div className="event__review">
                        <h4 className="event__reserve--title">Operated by River Stone</h4>
                        <div className="event__review--row">
                            <div className="rating"></div>
                            <div className="review">4.9</div>
                        </div>
                        <div className="event__description--content">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="eventReserve__grid--col flex__order--1">
                    <div className="eventReserve__form">
                        <form action="">
                            <div className="eventReserve__form--title">AED 1800 <span>per person</span></div>
                            <div className="eventReserve__form--date"></div>
                            <div className="form__flex--row">
                                <div className="s-form-floating">
                                    <input type="text" className="s-form-control" id="floatingFromInput" />
                                    <label for="floatingFromInput">From</label>
                                </div>
                                <div className="s-form-floating">
                                    <input type="text" className="s-form-control" id="floatingToInput" />
                                    <label for="floatingToInput">To</label>
                                </div>
                            </div>
                            <div className="s-form-floating">
                                <select className="s-form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                    <option value="0">1 adult</option>
                                    <option value="1">2 adult</option>
                                    <option value="2">3 adult</option>
                                    <option value="3">4 adult</option>
                                </select>
                                <label for="floatingSelectGrid">Guests</label>
                            </div>
                            <div className="eventReserve__form--seats">172 Seats still available</div>
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

                        <a href="#" className="eventReserve__form--help">Need help?</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* <Trending /> */}
        <RatingSlider {...eventDetailPage.RatingSliderCardData}/>

        <Recommendations {...eventDetailPage.RecommendationData} showHeartIcon={true} />
      </main>
    </div>
  );
};

export default CompleteEventDetail;
