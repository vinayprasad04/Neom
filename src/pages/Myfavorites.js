import React, {useEffect, useState} from "react";

import {
    Header,
    Footer,
    Trending,

    useOpenWeather,

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
    const [myFavorites, setMyFavorites] = useState(FavoriteData);
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: "edb174adcaf962338a5b74bbb3498eb1",
        lat: "48.137154",
        lon: "11.576124",
        lang: "en",
        unit: "metric",
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
        window.addEventListener('resize', setRecSlider);
    });
    useEffect(() => {
        window.scrollTo(0, 0);
        setRecSlider()
        localStorage.setItem('bellAlert', 'alert');
    },[])
    return (
        <div>
            <Header active={"myfavorites"} {...props}/>
            <main className="content favorites">
                <Recommendations{...myFavorites.FavoritesData} showCancelFavorite={true}/>
                <NextEventBanner showHeartIcon={true}/>
                <div className="trending">
                    <div className="container">
                        <h2 className="trending__title">Top 5 activities on this island today</h2>
                            <Trending {...eventDetailPage.RecommendationData}  showHeartIcon={true} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Myfavorites;
