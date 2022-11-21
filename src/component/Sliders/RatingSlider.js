import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import trending1 from './../../assets/img/trending1.jpg';
import RatingValue from './../Rating';

import "./Slider.scss";

const RatingSliderCard = (props) => {
  const {heading, SliderCard} = props;
  return (
    <div className="recSlider recSlider--ratingCards" style={{margin:"0px 0px 0px 84px"}}>
      <div className="swiper tailored arrow_pos">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3.4}
          navigation
          autoplay={{
            delay: 112500,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3.4,
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
            {SliderCard.map((item, index) => {
              return (
                <SwiperSlide key ={index}>
                  <a href="#" className="recSlider__link">
                  <div className="recSlider__profile">
                  <img src={process.env.PUBLIC_URL + "./../img/" + item.img} alt="event title"/>
                <div className="recSlider__profile--info">
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                </div>
              </div>

                    <div className="recSlider__info">
                    <div className="recSlider__info__description">{item.desc}</div>
                <div className="recSlider__info__row">
                  <div className="recSlider__info__rating">
                    <div className="rating">
                      <RatingValue fillColor={"#FF385C"} readOnly={true} initialValue={item.rating}/>
                    </div>
                    <div className="review">{item.rating.toFixed(1)}</div></div>
                </div>
              </div>
              <button className="recSlider__button">Read more</button>
                  </a>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        </div>
    </div>
  );
};
export default RatingSliderCard;
