import React, {useEffect, useState} from "react";

import {
  Header,
  Footer,
  Trending,
  SliderCard,
  EventSlider,
  Map,
  YourChoice,
  // SimpleMap
} from "../component/index.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/dashboardData";
import {EventDetail, Profile} from './../MockData';
import { getEventList } from '../utils/Api';

const dashboardPage = getJson();

const Dashboard = (props) => {
    const {api} = props;
    const [data, setData] = useState(EventDetail);
    const [list, setList] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            const apiResponse = localStorage.getItem("ApiSwitch");
            if(apiResponse===JSON.stringify(true)){
                setData(list);
            } else {
                setData(EventDetail)
            }
        },10)
    },[api]);


    useEffect(()=>{
        let user = Profile[0].Customer_ID;
        localStorage.setItem('User',JSON.stringify(Profile[0]));
    },[])

    useEffect(() => {
      fetchEvents();
    }, []);

    const fetchEvents = () =>
    getEventList().then(items => {
        setList(items.res.docs);
        console.log(list, "calllled")
      });
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
        // localStorage.setItem("ApiSwitch", false)
    },[])
  return (
    <div>
      <Header active={"dashboard"} />
      <main className="content">
        <SliderCard EventDetail={data.slice(0, 4)}/>
        <YourChoice {...dashboardPage.YourChoice}/>
        <Trending {...dashboardPage.RecommendationsCard} showHeartIcon={true}/>
        <EventSlider {...dashboardPage.AttendEventCard}/>
        <Map />
      </main>
    </div>

  );
};

export default Dashboard;
