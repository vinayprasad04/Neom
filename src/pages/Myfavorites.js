import React from "react";

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
const eventDetailPage = getJson();

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
    return (
        <div>
            <Header />
            <main className="content favorites">
                <Recommendations
                    {...eventDetailPage.RecommendationData}
                    showHeartIcon={true}
                />
                <Trending {...eventDetailPage.RecommendationData} />
            </main>
            <Footer />
        </div>
    );
};

export default Myfavorites;
