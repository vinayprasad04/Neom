import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {SectionHeader} from '../index'
import RatingValue from "../Rating";
import {Link} from "react-router-dom";

const EventSlider = (props) => {
  const { Treading } = props;
  return (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView:1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="card__grid">
            {Treading.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={"card__grid card__grid--dashboard"} >
                    <div className="card__item">
                      <Link className={"card__link"}  to={`/eventdetails/${item.Event_ID || 10005}`} >
                        <div className="card__thumb">
                          <img
                              src={process.env.PUBLIC_URL + "./img/" + item.Event_Img}
                              alt="event name"
                              className="card__img"
                          />
                          {item.Event_Rank && (
                              <span className="card__count">
                            <img
                                src={
                                  process.env.PUBLIC_URL + "./img/" + item.Event_Rank
                                }
                                alt="Top ranking 1"
                            />
                          </span>
                          )}
                        </div>

                        <div className="card__info">
                          <h3 className="card__title">{item.Event_Name}</h3>
                          <div className="card__price">{/*{item.desc}*/}10:30AM - 7:30PM</div>
                          <div className="card__date">on {item.Event_Start_Date}</div>
                          <div className="card__row">
                            <div className="card__rating">
                            <span className="card__rating__txt">
                              <span className="card__rating__txt">You rated this event</span></span>
                              <RatingValue fillColor={"black"} readOnly={true} initialValue={4}/>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
  );
};

export default EventSlider;
