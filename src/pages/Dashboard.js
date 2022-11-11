import React from "react";

import {
  Header,
  Footer,
  Trending,
  SliderCard,
  EventSlider,
} from "../component/index.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/dashboardData";
const dashboardPage = getJson();

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <main className="content home">
        <SliderCard {...dashboardPage.SliderCardData}/>
        <EventSlider {...dashboardPage.CartInfoSlider}/>
        <Trending />
        <div class="vibeMeter">
        <div class="container">
            <h2 class="vibeMeter__title">Your master journey with Unified Guests</h2>
            <div class="grid__row">
                <div class="grid__col graph">
                    <img src={process.env.PUBLIC_URL + "./img/graph.svg"} alt="Graph"/>
                </div>
            </div>
        </div>
    </div>
      </main>
      <Footer />
    </div>
    
  );
};

export default Dashboard;
