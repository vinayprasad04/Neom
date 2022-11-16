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

const SliderCard = ({EventDetail}) => {
  //const {heading, SliderCard} = props;
    const userName = Profile[0].Customer_Name;
  return (
    <div className="recSlider recSlider--cardView" id={"newId"}>
      <h2 className="recSlider__title">Good morning {userName}!</h2>
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
          slidesPerView={2.4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          autoplay={{
            delay: 112500,
          }}
          breakpoints={{
              1024: {
                  slidesPerView: 2.4,
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
            {EventDetail.map((item, index) => {
              return (
                <SwiperSlide>
                    <Link className={"recSlider__link"} to={`/eventdetails/${item.Event_ID}`} >
                        <div className="slider__image--wrapper">
                            <img
                                src={process.env.PUBLIC_URL + "./../img/" + item?.url}
                                alt="event title"
                            />
                            <div className="weather">
                               <div className="weather__icon">
                            <img src={abstract} alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="recSlider__info" key={index}>
                      <h3 className="recSlider__info__title">{item.Event_Name}</h3>
                      <div className="recSlider__info__rating">
                          <RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={item.Overall_Event_Rating}/>
                              <div className="review">{item.Overall_Event_Rating}</div>
                          </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items recSlider__info__description">
                          {item.Event_Description} <span className="read--more">read more</span>
                        </div>
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items">
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
                          <span className={`status ${(item.Event_Status=="Over"||item.Event_Status=="Completed") ?"completed":(item.Event_Status=="cancelled")?"cancelled":"scheduled"}`}>{item.Event_Status}</span>
                        </div>
                      </div>
                    </div>
                    </Link>

                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default SliderCard;
