import React from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RatingValue from './Rating';

const NextEventBanner = ()=>{
    return(
        <div className="recSlider" style={{margin:"0px 0px 0px 84px"}}>
            <div className="recSlider__title">Good morning Shane!</div>
            <div className="recSlider__subtitle">We have tailored a collection of some exiting activities for you today.</div>
            <div className="swiper tailored">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1.2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        <SwiperSlide>
                            <a href="#" className="recSlider__link">
                                <img src={process.env.PUBLIC_URL + "./img/trending1.jpg"} alt="event title" />
                                <div className="recSlider__info">
                                    <div className="recSlider__info__title">Explore the deep sea</div>
                                    <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                                        <div className="recSlider__info__rating">
                                            <RatingValue readOnly={true} initialValue={5}/>
                                            <div className="review">5.0  (123 reviews)</div></div>
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
                                            <RatingValue readOnly={true} initialValue={5}/>                                            <div className="review">5.0 (123 reviews)</div>
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
                                            <RatingValue readOnly={true} initialValue={5}/>
                                            <div className="review">5.0 (123 reviews)</div>
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
                                            <RatingValue readOnly={true} initialValue={5}/>
                                            <div className="review">5.0 (123 reviews)</div>
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
