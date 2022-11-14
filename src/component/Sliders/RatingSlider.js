import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import trending1 from './../../assets/img/trending1.jpg';
import RatingValue from './../Rating';

import "./Slider.scss";

const RatingSliderCard = (props) => {
  const {heading, SliderCard} = props;
  return (
    <div class="recSlider recSlider--ratingCards" style={{margin:"0px 0px 0px 84px"}}>
      <div class="swiper tailored arrow_pos">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3.4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          autoplay={{
            delay: 112500,
          }}
        >
          <div class="swiper-wrapper">
            {SliderCard.map((item, index) => {
              return (
                <SwiperSlide>
                  <a href="#" class="recSlider__link">
                  <div class="recSlider__profile">
                  <img src={trending1} alt="event title"/>
                <div class="recSlider__profile--info">
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                </div>
              </div>

                    <div class="recSlider__info">
                    <div class="recSlider__info__description">{item.desc}</div>
                <div class="recSlider__info__row">
                  <div class="recSlider__info__rating">
                    <div class="rating">
                      <RatingValue readOnly={true} initialValue={5}/>
                    </div>
                    <div class="review">5.0</div></div>
                </div>
              </div>
              <button class="recSlider__button">Read more</button>
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
