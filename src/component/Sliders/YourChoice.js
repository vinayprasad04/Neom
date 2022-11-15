import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {SectionHeader} from '../index.js'
import "./Slider.scss";

const YourChoice = (props) => {
  const {heading, SliderCard} = props;
  return (
    <div className="recSlider recSlider--cardView recSlider--cardView-fullWidth" style={{margin: "0px 0px 0px 84px"}}>
       {(heading) && (
          <SectionHeader heading={heading} />
      )}
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
        >
          <div className="swiper-wrapper">
            {SliderCard.map((item, index) => {
              return (
                <SwiperSlide>
                  <a href="#" className="recSlider__link">
                  <div className="slider__image--wrapper">
                              <img
                      src={process.env.PUBLIC_URL + "./img/" + item.img}
                      alt="event title"
                    />
                            </div>

                    <div className="recSlider__info" key={index}>
                    <h3 className="recSlider__info__title">{item.title}</h3>
                                <div className="recSlider__info__row">
                                    <div className="recSlider__info__items">{item.date}</div>
                                </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__items recSlider__info__description">
                          {item.desc}
                        </div>
                      </div>
                      <div className="recSlider__info__row">
                                    <button className="btn btn__black">Yes, I accept</button>
                                    <button className="btn btn__link">No, thanks</button>
                                </div>
                    </div>
                    <div className="recSlider__emotion">
                                <img src={process.env.PUBLIC_URL + "./img/disappointed.svg" } alt="" />
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
export default YourChoice;
