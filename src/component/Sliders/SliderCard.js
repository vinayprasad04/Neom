import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {Link} from 'react-router-dom';
import "./Slider.scss";
import banner from './../../assets/img/spa_0.png';
import abstract from './../../assets/img/abstract.jpg';
import RatingValue from "../Rating";

const SliderCard = ({EventDetail}) => {
    console.log("EventDetail",EventDetail);
  //const {heading, SliderCard} = props;
  return (
    <div class="recSlider recSlider--cardView">
      <h2 class="recSlider__title">Good morning Shane</h2>
      <div class="recSlider__subtitle">
        <p>
          Below listed are your itineraries, have a look to the timings and the
          location.
        </p>
        <p>We wish you to enjoy the activities and the weather!</p>
      </div>
      <div class="swiper tailored arrow_pos">
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
        >
          <div class="swiper-wrapper">
            {EventDetail.map((item, index) => {
              return (
                <SwiperSlide>
                    <Link className={"recSlider__link"} to={`/eventdetails/${item.Event_ID}`} >
                        <div className="slider__image--wrapper">
                            <img
                                src={banner}
                                alt="event title"
                            />
                            <div className="weather">
                               <div class="weather__icon">
                            <img src={abstract} alt="Weather" />
                            </div>
                            <div class="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div class="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="recSlider__info" key={index}>
                      <div className="recSlider__info__title">{item.Event_Name}</div>
                      <div className="recSlider__info__rating">
                          <RatingValue readOnly={true} initialValue={item.Overall_Event_Rating}/>
                              <div className="review">{item.Overall_Event_Rating}</div>
                          </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items recSlider__info__description">
                          {item.Event_Description}<br/> <span className="read--more">read more</span>
                        </div>
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items">
                          <span className="icon icon-calendar"></span>
                          {item.Event_Start_Date}
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
                          <span>
                            Operated by {item.Operator_Name} (
                            <span className="icon-star"></span> {item.Operator_Rating} )
                          </span>
                          <span className="status scheduled">{item.Event_Status}</span>
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
