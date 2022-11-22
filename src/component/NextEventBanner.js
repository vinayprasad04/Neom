import React, {useState} from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RatingValue from './Rating';
import overwhelmed from './../assets/img/overwhelmed.svg';
import {Link} from "react-router-dom";

const NextEventsData = [
    {
        "Event_ID": 10006,
        "Operator_ID": 20005,
        "url":'surfing.jpg',
        "Operator_Name": "Basket of gold",
        "Event_Category": "Surfing",
        "Event_Name": "Surfing at leisure",
        "Event_Description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
        "Event_Start_Date": "11/11/2022",
        "Event_End_Date": "11/30/2022",
        "Event_Start_Time": "10:00 PM",
        "Event_End_Time": "05:00 PM",
        "Seat_Booking_Availability": 20,
        "Event_Location": "Sindalah Island",
        "Event_Status": "Not Sarted",
        "Event_Capacity": 300,
        "Overall_Event_Rating": 4.6,
        "Operator_Rating": 5,
        "vibes_text":"Active & Energizing",
        "imgurl":[
            {"img": "surfing.jpg"},
            {"img": "surfing.jpg"},
            {"img": "surfing.jpg"},
            {"img": "surfing.jpg"},
            {"img": "surfing.jpg"},
        ]
    },
    {
        "Event_ID": 10005,
        "Operator_ID": 20004,
        "url":'golf.jpg',
        "Operator_Name": "Northern lights",
        "Event_Category": "Golf",
        "Event_Name": "Golf tournament",
        "Event_Description": "Mens Golf League",
        "Event_Start_Date": "11/10/2022",
        "Event_End_Date": "11/29/2022",
        "Event_Start_Time": "02:00 PM",
        "Event_End_Time": "05:00 PM",
        "Seat_Booking_Availability": 30,
        "Event_Location": "Sindalah Island",
        "Event_Status": "Not Sarted",
        "Event_Capacity": 250,
        "Overall_Event_Rating": 4.6,
        "Operator_Rating": 4,
        "vibes_text":"Invigorating & Uplifting",
        "imgurl":[
            {"img": "golf.jpg"},
            {"img": "golf.jpg"},
            {"img": "golf.jpg"},
            {"img": "golf.jpg"},
            {"img": "golf.jpg"},
        ]
    },
    {
        "Event_ID": 10007,
        "Operator_ID": 20005,
        "url":'yacht.jpg',
        "Operator_Name": "Basket of gold",
        "Event_Category": "Jazz Music",
        "Event_Name": "Jazz Music",
        "Event_Description": "Jazz Music",
        "Event_Start_Date": "11/11/2022",
        "Event_End_Date": "11/30/2022",
        "Event_Start_Time": "10:00 PM",
        "Event_End_Time": "05:00 PM",
        "Seat_Booking_Availability": 20,
        "Event_Location": "Sindalah Island",
        "Event_Status": "Not Sarted",
        "Event_Capacity": 300,
        "Overall_Event_Rating": 4.6,
        "Operator_Rating": 5,
        "vibes_text":"Vibrant & Social",
        "imgurl":[
            {"img": "yacht.jpg"},
            {"img": "yacht.jpg"},
            {"img": "yacht.jpg"},
            {"img": "yacht.jpg"},
            {"img": "yacht.jpg"},
        ]
    },
    {
        "Event_ID": 10008,
        "Operator_ID": 20006,
        "url":'dive.jpg',
        "Operator_Name": "Basket of gold",
        "Event_Category": "Sweet Wonderland",
        "Event_Name": "Sweet Wonderland",
        "Event_Description": "Sweet Wonderland",
        "Event_Start_Date": "11/11/2022",
        "Event_End_Date": "11/30/2022",
        "Event_Start_Time": "10:00 PM",
        "Event_End_Time": "05:00 PM",
        "Seat_Booking_Availability": 20,
        "Event_Location": "Sindalah Island",
        "Event_Status": "Not Sarted",
        "Event_Capacity": 300,
        "Overall_Event_Rating": 4.6,
        "Operator_Rating": 5,
        "vibes_text":"Glamorous & Grand",
        "imgurl":[
            {"img": "dive.jpg"},
            {"img": "dive.jpg"},
            {"img": "dive.jpg"},
            {"img": "dive.jpg"},
            {"img": "dive.jpg"},
        ]
    },
]

const NextEventBanner = ({showHeartIcon})=>{
    const [heartAdd, setHeartAdd] = useState({});
    const onHeartClick = (id)=>{
        setHeartAdd({...heartAdd, [id]:!heartAdd[id]});
    }
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
                        breakpoints={{
                            1024: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            300: {
                                slidesPerView:1,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {
                            NextEventsData.map((item,index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        {showHeartIcon && <button className="card__fav" onClick={()=>onHeartClick(item.Event_ID)}><span className="icon-heart" style={{color:heartAdd[item.Event_ID] ?"red":""}}></span></button>}
                                        <Link className={"recSlider__link"}  to={`/eventdetails/${item.Event_ID || 10005}`} >
                                            <img src={process.env.PUBLIC_URL + "./img/"+item.url} alt="event title" />
                                            <div className="recSlider__info">
                                                <div className="recSlider__info__title">{item.Event_Name}</div>
                                                <div className="recSlider__info__date">{item.Event_Start_Date} - {item.Event_End_Date}</div>
                                                <div className="recSlider__info__row">
                                                    <div className="recSlider__info__price">{item.Event_Start_Time} - {item.Event_End_Time}</div>
                                                    <div className="recSlider__info__rating">
                                                        <div className="vibes">
                                                            <img src={overwhelmed} alt="Overwhelmed"
                                                                 className="vibes__icon"/>
                                                            <span className="vibes__text">{item.vibes_text}</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                    )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default NextEventBanner;
