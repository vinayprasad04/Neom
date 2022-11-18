import React, { useEffect, useState } from "react";

import {
  Header,
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
import { EventDetail, Profile } from "./../MockData";
import { getEventList, getYourChoiceList, getRecommendationsList, getAttendedEvent } from "../utils/Api";

const dashboardPage = getJson();

const Dashboard = (props) => {
  const { api } = props;
  const [data, setData] = useState(EventDetail);
  const [dataYourchoice, setDataYourchoice] = useState([...dashboardPage.YourChoice.SliderCard]);
  const [dataRecList, setdataRecList] = useState([...dashboardPage.RecommendationsCard.Treading]);
  const [dataAttend, setDataAttend] = useState([...dashboardPage.AttendEventCard.Treading]);
  const[recommendations, setRecommendations] = useState([])
  const [eventList, setEventList] = useState([]);
  const [attendList, setAttendList] = useState([]);
  const [yourChoiceList, setChoiceYourList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const apiResponse = localStorage.getItem("ApiSwitch");
      if (apiResponse === JSON.stringify(true)) {
        setData(eventList);
        setDataYourchoice(yourChoiceList);
        setdataRecList(recommendations)
        setDataAttend(attendList)
      } else {
        setData(EventDetail);
        setDataYourchoice([...dashboardPage.YourChoice.SliderCard]);
        setdataRecList([...dashboardPage.RecommendationsCard.Treading]);
        setDataAttend([...dashboardPage.AttendEventCard.Treading]);
      }
    }, 10);
  }, [api]);

  useEffect(() => {
    let user = Profile[0].Customer_ID;
    localStorage.setItem("User", JSON.stringify(Profile[0]));
  }, []);

  useEffect(() => {
    fetchEvents();
    fetchYourChoice();
    fetchRecommendations();
    fetchAttended();
  }, []);

  const fetchEvents = () =>
    getEventList().then((items) => {
      setEventList(items);
    });
  const fetchYourChoice = () =>
    getYourChoiceList().then((items) => {
      setChoiceYourList(items);
    });
    const fetchRecommendations = () =>
    getRecommendationsList().then((items) => {
      setRecommendations(items);
    });
    const fetchAttended = () =>
    getAttendedEvent().then((items) => {
      setAttendList(items);
    });
  const setRecSlider = () => {
    let wWidth = window.innerWidth,
      cWidth = document.querySelector(".header .container").offsetWidth,
      marg = (wWidth - cWidth) / 2,
      recSlider = document.querySelectorAll(".recSlider");
    if (wWidth > 767) {
      recSlider.forEach((item) => {
        item.style.margin = "0px";
        item.style.marginLeft = marg + "px";
      });
    } else {
      recSlider.forEach((item) => {
        item.style.margin = "0 16px";
      });
    }
  };
  useEffect(() => {
    window.addEventListener("resize", setRecSlider);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    setRecSlider();
    // localStorage.setItem("ApiSwitch", false)
  }, []);
  return (
    <div>
      <Header active={"dashboard"} />
      <main className="content">
        <SliderCard EventDetail={data.slice(0, 4)} />
        <YourChoice SliderCard={dataYourchoice} />
        <Trending Treading={dataRecList} showHeartIcon={true} />
        <EventSlider Treading={dataAttend} />
        <Map />
      </main>
    </div>
  );
};

export default Dashboard;
