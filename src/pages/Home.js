import React from 'react';

import Header from "../component/Header";
import Footer from "../component/Footer";

import Banner from "../component/Banner";
import NextEventBanner from "../component/NextEventBanner";
import Map from "../component/Map";
import Trending from "../component/Trending";
import Recommendations from "../component/Recommendations";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import getJson from "../utils/homepageData";
const homePage = getJson();

const Home = ()=>{
    return(
        <div>
            <Header/>
            <main className="content home">
                <Banner/>
                <NextEventBanner/>
                <Trending {...homePage.TrendingCardData} />
                <Recommendations {...homePage.RecommendationData} />
                <Map/>
            </main>
        </div>
    )
}

export default Home;
