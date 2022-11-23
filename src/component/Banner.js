import React, { useEffect } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  useEffect(() => {}, []);

  return (
    <div className="banner">
      <div className="container">
        <div className="swiper mainbanner">
          <div className="swiper-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              autoplay={{
                delay: 112500,
              }}
            >
              <SwiperSlide>
                <img
                  src={process.env.PUBLIC_URL + "./img/banner.jpg"}
                  alt="event title"
                />
                <div className="banner__info">
                  <div className="banner__info__title">
                    Music <br />
                    Jazz Concert
                  </div>
                  <div className="banner__info__location">
                    Sindalah Island
                  </div>
                  <div className="banner__info__date">
                    Jan 01, 2023 at 00:00
                  </div>
                  <div className="banner__info__countdown">
                    <div
                      className="counter"
                      data-date="2023-1-1 00:00:00"
                    ></div>
                  </div>
                  <div className="banner__info__link">
                    <a href="#">Yes, I am in</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
