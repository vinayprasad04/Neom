import React from 'react';

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import Banner from "./Banner";
import NextEventBanner from "../../component/NextEventBanner";
import Map from "./Map";
import Trending from "../../component/Trending";
import Recommendations from "../../component/Recommendations";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = ()=>{
    return(
        <div>
            <Header/>
            <main className="content home">
                <Banner/>
                <NextEventBanner/>
                <Trending/>
                <Recommendations/>
                <Map/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;
