import React from "react";

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
import {EventDetail} from './../MockData';
const dashboardPage = getJson();


const Dashboard = (props) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'edb174adcaf962338a5b74bbb3498eb1',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
  });
  return (
    <div>
      <Header />
      <main className="content home">
        {/* <SimpleMap /> */}
      <useOpenWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
        <SliderCard EventDetail={EventDetail}/>
        <YourChoice {...dashboardPage.YourChoice}/>
        <Trending {...dashboardPage.RecommendationsCard} />
        <EventSlider {...dashboardPage.AttendEventCard}/>
        <Map />
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
