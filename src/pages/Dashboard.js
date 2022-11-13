import React from "react";

import {
  Header,
  Footer,
  Trending,
  SliderCard,
  EventSlider,
  useOpenWeather,
  Map,
  // SimpleMap
} from "../component/index.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/dashboardData";
const dashboardPage = getJson();

const Dashboard = (props) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'edb174adcaf962338a5b74bbb3498eb1',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
  });
  console.log(data, "data is callllled")
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
        <SliderCard {...dashboardPage.SliderCardData}/>
        <EventSlider {...dashboardPage.CartInfoSlider}/>
        <Trending />
        <Map />
      </main>
      <Footer />
    </div>
    
  );
};

export default Dashboard;
