import React, {useEffect} from "react";

import {
    Header,
    Footer,
    Trending,
    SliderCard,
    EventSlider,
    useOpenWeather,
    RatingSlider,
    GallaryItems,
    // SimpleMap
} from "../component/index.js";
import Recommendations from "../component/Recommendations";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { eventDetailImage } from "../MockData.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import getJson from "../utils/eventDetailData";
import getJsonFavorite from "../utils/myfavoritesData";
import NextEventBanner from "../component/NextEventBanner";
const eventDetailPage = getJson();
const FavoriteData = getJsonFavorite();

const Myfavorites = (props) => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: "edb174adcaf962338a5b74bbb3498eb1",
        lat: "48.137154",
        lon: "11.576124",
        lang: "en",
        unit: "metric",
    });
    const Sucmsg = () =>{
        let el = document.getElementById('sucmsg')
        el.style= 'display:block'
    }
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
        setRecSlider()
    },[])
    return (
        <div>
            <Header active={"myfavorites"} />
            <main className="content favorites">
                <Recommendations
                    {...FavoriteData.FavoritesData}
                    showCancelFavorite={true}
                />
                <NextEventBanner showHeartIcon={true}/>
                <Trending {...eventDetailPage.RecommendationData} headingNew={"Top 5 activities on this island today"} showHeartIcon={true} />
            </main>
            <Footer />
        </div>
    );
};

export default Myfavorites;
