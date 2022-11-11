import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "./Slider.scss";

const SliderCard = (props) => {
  const {heading, SliderCard} = props;
  return (
    <div class="recSlider recSlider--cardView">
      <div class="recSlider__title">{heading}</div>
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
            {SliderCard.map((item, index) => {
              return (
                <SwiperSlide>
                  <a href="#" class="recSlider__link">
                    <img
                      src={process.env.PUBLIC_URL + "./img/" + item.img}
                      alt="event title"
                    />
                    <div class="recSlider__info" key={index}>
                      <div class="recSlider__info__title">{item.title}</div>
                      <div class="recSlider__info__rating">
                        <div class="rating"></div>
                        <div class="review">{item.rating}</div>
                      </div>
                      <div class="recSlider__info__row">
                        <div class="recSlider__info__items recSlider__info__description">
                          {item.desc} <span class="read--more">read more</span>
                        </div>
                      </div>
                      <div class="recSlider__info__row">
                        <div class="recSlider__info__items">
                          <span class="icon icon-calendar"></span>
                          {item.date}
                        </div>
                      </div>
                      <div class="recSlider__info__row">
                        <div class="recSlider__info__items">
                          <span class="icon icon-location"></span>
                          {item.city}
                        </div>
                      </div>
                      <div class="recSlider__info__row">
                        <div class="recSlider__info__items">
                          <span class="icon icon-category"></span>
                          {item.game}
                        </div>
                      </div>
                      <div class="recSlider__info__row recSlider__footer">
                        <div class="recSlider__footer__item">
                          <span>
                            Operated by River Stone (
                            <span class="icon-star"></span> 4.9 )
                          </span>
                          <span class="status scheduled">Scheduled</span>
                        </div>
                      </div>
                    </div>
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
export default SliderCard;
