import React, {useEffect} from "react";

import {
  Header,
  Footer,
  Trending,
  SliderCard,
  EventSlider,
  useOpenWeather,
  Map,
  YourChoice,
  // SimpleMap
} from "../component/index.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/dashboardData";
import {EventDetail, Profile} from './../MockData';
const dashboardPage = getJson();


const Dashboard = (props) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'edb174adcaf962338a5b74bbb3498eb1',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
  });
    useEffect(()=>{
        let user = Profile[0].Customer_ID;
        localStorage.setItem('User',JSON.stringify(Profile[0]));
    },[])

    const setRecSlider = () => {
        let wWidth = window.innerWidth,
            cWidth = document.querySelector('.header .container').offsetWidth,
            marg = (wWidth - cWidth) / 2,
            recSlider = document.querySelectorAll(".recSlider");
        if (wWidth > 767) {
            recSlider.forEach((item) => {
                item.style.margin = '0px';
                item.style.marginLeft = marg + 'px';
            })
        }
        else {
            recSlider.forEach((item) => {
                item.style.margin = '0 16px';
            })
        }
    }
    useEffect(() => {
        window.addEventListener('resize', setRecSlider)
    });
    useEffect(() => {
        window.scrollTo(0, 0);
        setRecSlider()
    },[])
  return (
    <div>
      <Header active={"dashboard"} />
      <main className="content">
        <SliderCard EventDetail={EventDetail.slice(0, 4)}/>
        <YourChoice {...dashboardPage.YourChoice}/>
        <Trending {...dashboardPage.RecommendationsCard} showHeartIcon={true}/>
        <EventSlider {...dashboardPage.AttendEventCard}/>
        <Map />
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
