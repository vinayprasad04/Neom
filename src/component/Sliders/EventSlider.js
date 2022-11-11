import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {SectionHeader} from '../index'

const EventSlider = (props) => {
  const { Treading, heading, slidesPerView } = props;
  return (
    <div className="trending">
      <div className="container">
        <div className="trending__title">
        {(heading) && (
          <SectionHeader heading={heading} />
      )}
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          //   navigation
          //   autoplay={{
          //     delay: 2500,
          //   }}
        >
          <div className="card__grid">
            {Treading.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="card__item">
                    <a href="#" className="card__link">
                      <div className="card__thumb">
                        <button className="card__fav">
                          <span className="icon-heart"></span>
                        </button>
                        <img
                          src={process.env.PUBLIC_URL + "./img/" + item.img}
                          alt="event name"
                          className="card__img"
                        />
                        {item.rank && (
                          <span className="card__count">
                            <img
                              src={
                                process.env.PUBLIC_URL + "./img/" + item.rank
                              }
                              alt="Top ranking 1"
                            />
                          </span>
                        )}
                      </div>
                      <div className="card__info">
                        <div className="card__row">
                          <div className="card__rating">
                            <span className="icon-star"></span>
                            {item.rating}
                          </div>
                          <div className="card__date">{item.date}</div>
                        </div>
                        <div className="card__title">{item.title}</div>
                        <div className="card__price">{item.desc}</div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default EventSlider;
