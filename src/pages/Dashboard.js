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
import {SectionHeader} from "../component/index";
import {HomePage} from "./index";

const dashboardPage = getJson();

const Dashboard = (props) => {
  const { api, rCancelAlert } = props;
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

  const itneryData = rCancelAlert.srBookedAlert? data.slice(3,5): rCancelAlert.crBookedAlert ? data.slice(0,3): rCancelAlert.crAlert? data.slice(1,3):data.slice(5, 7);
  return (
    <div>
      <Header active={"dashboard"} {...props}/>
      <main className="content">
        <SliderCard EventDetail={data}  rCancelAlert={rCancelAlert}/>

        <div className="recSlider recSlider--cardView recSlider--cardView-fullWidth">
              <SectionHeader heading={"Hope we understand you better"} />
          <YourChoice SliderCard={dataYourchoice} />
        </div>
        <div className="trending">
          <div className="container">
            <h2 className="trending__title">Today's recommendations for you</h2>
            <Trending Treading={dataRecList} showHeartIcon={true} />
          </div>
        </div>

        <div className="trending">
          <div className="container">
            <div className="trending__title">
                  <SectionHeader heading={"Here is your master journey with us so far"} />
            </div>
            <EventSlider Treading={dataAttend} />
          </div>
        </div>
        <Map />
      </main>
    </div>
  );
};

export default Dashboard;
