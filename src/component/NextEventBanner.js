import React from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RatingValue from './Rating';
import overwhelmed from './../assets/img/overwhelmed.svg';

const NextEventBanner = ()=>{
    return(
        <div className="recSlider" style={{margin:"0px 0px 0px 84px"}}>
            <h2 className="trending__title">Charlie, we have find some recommendation for you</h2>
            <div className="swiper tailored arrow_pos">
                <div className="">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        <SwiperSlide>
                            <a href="#" className="recSlider__link">
                                <img src={process.env.PUBLIC_URL + "./img/Event-Banner.png"} alt="event title" />
                                <div className="recSlider__info">
                                    <div className="recSlider__info__title">Explore the deep sea</div>
                                    <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__price">10:30AM - 7:30PM</div>
                                        {/*<div className="recSlider__info__price">AED 1800 <span>per person</span></div>*/}
{/*                                        <div className="recSlider__info__rating">
                                            <RatingValue readOnly={true} initialValue={5}/>
                                            <div className="review">5.0  (123 reviews)</div></div>*/}
                                            <div className="recSlider__info__rating">
                                                <div className="vibes">
                                                    <img src={overwhelmed} alt="Overwhelmed"
                                                         className="vibes__icon"/>
                                                    <span className="vibes__text">Overwhelmed</span>
                                                </div>
                                            </div>

                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="recSlider__link">
                                <img src={process.env.PUBLIC_URL + "./img/recommend2.jpg"} alt="event title" />
                                <div className="recSlider__info">
                                    <div className="recSlider__info__title">Swimming game for below 18 year kids</div>
                                    <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                                        <div className="recSlider__info__rating">
                                            <div className="vibes">
                                                <img src={overwhelmed} alt="Overwhelmed"
                                                     className="vibes__icon"/>
                                                <span className="vibes__text">Overwhelmed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="recSlider__link">
                                <img src={process.env.PUBLIC_URL + "./img/recommend1.jpg"} alt="event title" />
                                <div className="recSlider__info">
                                    <div className="recSlider__info__title">Explore the deep sea</div>
                                    <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                                        <div className="recSlider__info__rating">
                                            <div className="vibes">
                                                <img src={overwhelmed} alt="Overwhelmed"
                                                     className="vibes__icon"/>
                                                <span className="vibes__text">Overwhelmed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="recSlider__link">
                                <img src={process.env.PUBLIC_URL + "./img/recommend2.jpg"} alt="event title" />
                                <div className="recSlider__info">
                                    <div className="recSlider__info__title">Swimming game for below 18 year kids</div>
                                    <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                                        <div className="recSlider__info__rating">
                                            <div className="vibes">
                                                <img src={overwhelmed} alt="Overwhelmed"
                                                     className="vibes__icon"/>
                                                <span className="vibes__text">Overwhelmed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default NextEventBanner;
