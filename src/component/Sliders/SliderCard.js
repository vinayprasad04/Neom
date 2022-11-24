import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {Link} from 'react-router-dom';
import "./Slider.scss";
import banner from './../../assets/img/spa_0.png';
import abstract from './../../assets/img/abstract.jpg';
import overwhelmed from './../../assets/img/overwhelmed.svg';
import RatingValue from "../Rating";
import {Profile} from './../../MockData';

const SliderCard = ({EventDetail, rCancelAlert}) => {
    const itneryData = rCancelAlert.crBookedAlert ? EventDetail.slice(0,3): rCancelAlert.crAlert? EventDetail.slice(1,3):EventDetail.slice(5, 7);

    const userName = Profile[0].Customer_Name;
  return (
    <div className="recSlider recSlider--cardView" id={"newId"}>
      <h2 className="recSlider__title"> Hey {userName}!</h2>
      <div className="recSlider__subtitle">
        <p>
          Below listed are your itineraries, have a look to the timings and the
          location.
        </p>
        <p>We wish you to enjoy the activities and the weather!</p>
      </div>
      <div className="swiper tailored arrow_pos">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2.2}
          navigation
          autoplay={false}
          breakpoints={{
              1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
              },
              768: {
                  slidesPerView: 2.1,
                  spaceBetween: 20,
              },
              300: {
                  slidesPerView:1,
                  spaceBetween: 10,
              },

          }}
        >
          <div className="swiper-wrapper">
            { !rCancelAlert.srBookedAlert?
                itneryData.map((item, index) => {
              return (
                <SwiperSlide>
                    <Link className={"recSlider__link"} to={`/eventdetails/${item.Event_ID}`} >
                        <div className="slider__image--wrapper">
                            <img src={process.env.PUBLIC_URL + "./../img/" + item?.url} alt="event title"/>
                            <div className="weather"><div className="weather__icon"><img src={abstract} alt="Weather" /></div>
                            <div className="weather__text">
                                <h2>30&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>33&#176;</span>
                                    <span>22&#176;</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="recSlider__info" key={index}>
                      <h3 className="recSlider__info__title">{item.Event_Name}</h3>
                      <div className="recSlider__info__rating">
                          <RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={item.Overall_Event_Rating}/>
                              <div className="review">{item.Overall_Event_Rating.toFixed(1)}</div>
                          </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items recSlider__info__description">
                          {item.Event_Description} <span className="read--more">read more</span>
                        </div>
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items calenderField">
                          <span className="icon icon-calendar"></span>
                          {item.Event_Start_Date}, {item.Event_Start_Time} -  {item.Event_End_Date}, {item.Event_End_Time}
                        </div>
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items">
                          <span className="icon icon-location"></span>
                          {item.Event_Location}
                        </div>
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items">
                          <span className="icon icon-category"></span>
                          {item.Event_Category}
                        </div>
                      </div>
                      <div className="recSlider__info__row recSlider__footer">
                        <div className="recSlider__footer__item">
                            <div className="vibes">
                                <img src={overwhelmed} alt="Overwhelmed" className="vibes__icon"/>
                                    <span className="vibes__text">{item.vibes_text} </span>
                            </div>
                            <span className={`status ${(item.Event_Status == "Over" || item.Event_Status == "Completed") ? "completed" : (item.Event_Status == "Cancelled") ? "cancelled" : "scheduled"}`}>{item.Event_Status}</span>
                        </div>
                      </div>
                    </div>
                    </Link>
                </SwiperSlide>
              );
            }):
                EventDetail.slice(4,5).map((item, index) => {
                    return (
                        <>
                            {rCancelAlert.ReseduleWithJazzOut && <SwiperSlide>
                                <Link className={"recSlider__link"} to={`/eventdetails/10101`}>
                                    <div className="slider__image--wrapper">
                                        <img src={process.env.PUBLIC_URL + "./../img/yacht.jpg"} alt="event title"/>
                                        <div className="weather">
                                            <div className="weather__icon"><img src={abstract} alt="Weather"/></div>
                                            <div className="weather__text">
                                                <h2>30&#176;<sup>C</sup></h2>
                                                <div className="weather__text--wrap">
                                                    <span>33&#176;</span>
                                                    <span>22&#176;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recSlider__info" key={index}>
                                        <h3 className="recSlider__info__title">Jazz Music</h3>
                                        <div className="recSlider__info__rating">
                                            <RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={4.1}/>
                                            <div className="review">4.1</div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items recSlider__info__description">
                                                Most awaited concert featuring a spectacular line-up of Grammy-nominated
                                                musicians from across the world coming together to create some fine
                                                jazz... <span className="read--more">read more</span>
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items calenderField">
                                                <span className="icon icon-calendar"></span>
                                                Dec 11, 2022, 8:00 PM - Dec 11, 2022, 11:59 PM
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items">
                                                <span className="icon icon-location"></span>
                                                Sindalah Island
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items">
                                                <span className="icon icon-category"></span>
                                                Jazz Music
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row recSlider__footer">
                                            <div className="recSlider__footer__item">
                                                <div className="vibes">
                                                    <img src={overwhelmed} alt="Overwhelmed" className="vibes__icon"/>
                                                    <span className="vibes__text">Overwhelmed vibes </span>
                                                </div>
                                                <span className={`status scheduled`}>Scheduled</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>}
                            <SwiperSlide>
                                    <Link className={"recSlider__link"} to={`/eventdetails/10104`} >
                                        <div className="slider__image--wrapper">
                                            <img src={process.env.PUBLIC_URL + "./../img/golf.jpg" } alt="event title"/>
                                            <div className="weather"><div className="weather__icon"><img src={abstract} alt="Weather" /></div>
                                                <div className="weather__text">
                                                    <h2>30&#176;<sup>C</sup></h2>
                                                    <div className="weather__text--wrap">
                                                        <span>33&#176;</span>
                                                        <span>22&#176;</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="recSlider__info" key={index}>
                                            <h3 className="recSlider__info__title">Round of Golf</h3>
                                            <div className="recSlider__info__rating">
                                                <RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={4.1}/>
                                                <div className="review">4.1</div>
                                            </div>
                                            <div className="recSlider__info__row">
                                                <div className="recSlider__info__items recSlider__info__description">
                                                    The course will test even the most seasoned golfer due to cunning bunker design and water hazards that affect twelve of the eighteen holes... <span className="read--more">read more</span>
                                                </div>
                                            </div>
                                            <div className="recSlider__info__row">
                                                <div className="recSlider__info__items calenderField">
                                                    <span className="icon icon-calendar"></span>
                                                    {/* {rCancelAlert.srBookedAlertData.selectedDate} &nbsp;  {rCancelAlert.srBookedAlertData.selectedTime} */}
                                                    Jan 01, 2023 10:30 AM | 3:00 PM | 5:30 PM
                                                </div>
                                            </div>
                                            <div className="recSlider__info__row">
                                                <div className="recSlider__info__items">
                                                    <span className="icon icon-location"></span>
                                                    Sindalah Island
                                                </div>
                                            </div>
                                            <div className="recSlider__info__row">
                                                <div className="recSlider__info__items">
                                                    <span className="icon icon-category"></span>
                                                    Golf
                                                </div>
                                            </div>
                                            <div className="recSlider__info__row recSlider__footer">
                                                <div className="recSlider__footer__item">
                                                    <div className="vibes">
                                                        <img src={overwhelmed} alt="Overwhelmed" className="vibes__icon"/>
                                                        <span className="vibes__text">Invigorating & Uplifting </span>
                                                    </div>
                                                    <span className={`status scheduled`}>Re-Scheduled</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className={"recSlider__link"} to={`/eventdetails/${item.Event_ID}`} >
                                    <div className="slider__image--wrapper">
                                        <img src={process.env.PUBLIC_URL + "./../img/" + item?.url} alt="event title"/>
                                        <div className="weather"><div className="weather__icon"><img src={abstract} alt="Weather" /></div>
                                            <div className="weather__text">
                                                <h2>30&#176;<sup>C</sup></h2>
                                                <div className="weather__text--wrap">
                                                    <span>33&#176;</span>
                                                    <span>22&#176;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recSlider__info" key={index}>
                                        <h3 className="recSlider__info__title">{item.Event_Name}</h3>
                                        <div className="recSlider__info__rating">
                                            <RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={item.Overall_Event_Rating}/>
                                            <div className="review">{item.Overall_Event_Rating.toFixed(1)}</div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items recSlider__info__description">
                                                {item.Event_Description} <span className="read--more">read more</span>
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items calenderField">
                                                <span className="icon icon-calendar"></span>
                                                {item.Event_Start_Date}, {item.Event_Start_Time} -  {item.Event_End_Date}, {item.Event_End_Time}
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items">
                                                <span className="icon icon-location"></span>
                                                {item.Event_Location}
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row">
                                            <div className="recSlider__info__items">
                                                <span className="icon icon-category"></span>
                                                {item.Event_Category}
                                            </div>
                                        </div>
                                        <div className="recSlider__info__row recSlider__footer">
                                            <div className="recSlider__footer__item">
                                                <div className="vibes">
                                                    <img src={overwhelmed} alt="Overwhelmed" className="vibes__icon"/>
                                                    <span className="vibes__text">{item.vibes_text} </span>
                                                </div>
                                                <span className={`status ${(item.Event_Status == "Over" || item.Event_Status == "Completed") ? "completed" : (item.Event_Status == "Cancelled") ? "cancelled" : "scheduled"}`}>{item.Event_Status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </>
                    );
                })
            }
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default SliderCard;
