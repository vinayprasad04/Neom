import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "./Slider.scss";

const RatingSliderCard = (props) => {
  const {heading, SliderCard} = props;
  return (
    <div class="recSlider recSlider--ratingCards">
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
                  <img
                      src={process.env.PUBLIC_URL + "./img/" + item.img}
                      alt="event title"
                    />
                <div class="recSlider__profile--info">
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                </div>
              </div>
                  
                    <div class="recSlider__info">
                    <div class="recSlider__info__description">{item.desc}</div>
                <div class="recSlider__info__row">
                  <div class="recSlider__info__rating"><div class="rating"></div><div class="review">5.0</div></div>
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
